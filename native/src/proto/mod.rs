use std::{collections::HashMap, fmt::Formatter};

use crate::proto::google_protobuf::{value::*, *};
use serde::{
    de::{self, Error, SeqAccess, Visitor},
    ser::{SerializeMap, SerializeSeq},
    Deserialize, Deserializer, Serialize, Serializer,
};

impl Serialize for Struct {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: Serializer,
    {
        let mut map = serializer.serialize_map(Some(self.fields.len()))?;
        for (k, v) in &self.fields {
            map.serialize_entry(k, v)?;
        }
        map.end()
    }
}

impl Serialize for Value {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: Serializer,
    {
        match &self.kind {
            Some(x) => match x {
                value::Kind::NullValue(_) => serializer.serialize_unit(),
                value::Kind::NumberValue(v) => serializer.serialize_f64(*v),
                value::Kind::StringValue(v) => serializer.serialize_str(v),
                value::Kind::BoolValue(v) => serializer.serialize_bool(*v),
                value::Kind::StructValue(v) => v.serialize(serializer),
                value::Kind::ListValue(v) => {
                    let mut seq = serializer.serialize_seq(Some(v.values.len()))?;
                    for val in &v.values {
                        seq.serialize_element(&val)?;
                    }
                    seq.end()
                }
            },
            None => serializer.serialize_unit(),
        }
    }
}

impl<'de> Deserialize<'de> for Value {
    fn deserialize<D>(deserializer: D) -> Result<Self, D::Error>
    where
        D: Deserializer<'de>,
    {
        deserializer.deserialize_any(Value::default())
    }
}

impl<'de> Deserialize<'de> for Struct {
    fn deserialize<D>(deserializer: D) -> Result<Self, D::Error>
    where
        D: Deserializer<'de>,
    {
        deserializer.deserialize_map(Struct::default())
    }
}

impl<'de> Visitor<'de> for Struct {
    type Value = Struct;

    fn expecting(&self, formatter: &mut Formatter) -> std::fmt::Result {
        write!(formatter, "a map or `null`")
    }

    fn visit_map<A>(self, map: A) -> Result<Self::Value, A::Error>
    where
        A: de::MapAccess<'de>,
    {
        let mut result: HashMap<String, Value> = HashMap::new();
        let mut map = map;

        while let Some((k, v)) = map.next_entry().unwrap() {
            result.insert(k, v);
        }
        Ok(Struct { fields: result })
    }
}

impl<'de> Visitor<'de> for Value {
    type Value = Value;

    fn expecting(&self, formatter: &mut Formatter) -> std::fmt::Result {
        write!(formatter, "unrecognized value")
    }

    fn visit_map<A>(self, map: A) -> Result<Self::Value, A::Error>
    where
        A: de::MapAccess<'de>,
    {
        let mut fields: HashMap<String, Value> = HashMap::new();
        let mut map = map;

        while let Some((k, v)) = map.next_entry().unwrap() {
            fields.insert(k, v);
        }

        Ok(Value {
            kind: Some(Kind::StructValue(Struct { fields })),
        })
    }

    fn visit_bool<E>(self, v: bool) -> Result<Self::Value, E>
    where
        E: Error,
    {
        Ok(Value {
            kind: Some(Kind::BoolValue(v)),
        })
    }

    fn visit_u64<E>(self, v: u64) -> Result<Self::Value, E>
    where
        E: Error,
    {
        Ok(Value {
            kind: Some(Kind::NumberValue(v as f64)),
        })
    }

    fn visit_f64<E>(self, v: f64) -> Result<Self::Value, E>
    where
        E: Error,
    {
        Ok(Value {
            kind: Some(Kind::NumberValue(v)),
        })
    }

    fn visit_unit<E>(self) -> Result<Self::Value, E>
    where
        E: Error,
    {
        Ok(Value {
            kind: Some(Kind::NullValue(0)),
        })
    }

    fn visit_str<E>(self, v: &str) -> Result<Self::Value, E>
    where
        E: Error,
    {
        Ok(Value {
            kind: Some(Kind::StringValue(v.to_string())),
        })
    }

    fn visit_seq<A>(self, seq: A) -> Result<Self::Value, A::Error>
    where
        A: SeqAccess<'de>,
    {
        let mut values: Vec<Value> = vec![];
        let mut seq = seq;

        while let Some(k) = seq.next_element().unwrap() {
            values.push(k);
        }

        Ok(Value {
            kind: Some(Kind::ListValue(ListValue { values })),
        })
    }
}

pub mod tests {
    use crate::google::protobuf::{value::Kind, Struct, Value};
    use std::collections::HashMap;

    #[test]
    fn test_serialize() {
        let mut map = HashMap::new();
        map.insert(
            "id".to_string(),
            Value {
                kind: Some(Kind::StringValue("Test value".to_string())),
            },
        );
        map.insert(
            "active".to_string(),
            Value {
                kind: Some(Kind::BoolValue(false)),
            },
        );
        map.insert(
            "level".to_string(),
            Value {
                kind: Some(Kind::NumberValue(1f64)),
            },
        );
        map.insert(
            "something empt".to_string(),
            Value {
                kind: Some(Kind::NullValue(0)),
            },
        );
        map.insert(
            "collection of values".to_string(),
            Value {
                kind: Some(Kind::ListValue(super::ListValue {
                    values: vec![Value {
                        kind: Some(Kind::NumberValue(1f64)),
                    }],
                })),
            },
        );
        map.insert("not sure what this is".to_string(), Value { kind: None });
        map.insert(
            "struct here".to_string(),
            Value {
                kind: Some(Kind::StructValue(build())),
            },
        );

        let a = Struct { fields: map };
        let struct_json = serde_json::to_string_pretty(&a).unwrap();
        let struct_obj: Struct = serde_json::from_str(struct_json.as_str()).unwrap();
        let struct_obj1: Struct = serde_json::from_str("{\"v\": [1, 2, 3]}").unwrap();

        println!("{}", struct_json);
        println!("{:?}", struct_obj);
        println!("{:?}", struct_obj1);
    }

    #[allow(dead_code)]
    fn build() -> Struct {
        let mut map = HashMap::new();
        map.insert(
            "id".to_string(),
            Value {
                kind: Some(Kind::StringValue("Test value".to_string())),
            },
        );
        map.insert(
            "active".to_string(),
            Value {
                kind: Some(Kind::BoolValue(false)),
            },
        );
        map.insert(
            "level".to_string(),
            Value {
                kind: Some(Kind::NumberValue(1f64)),
            },
        );
        map.insert(
            "something empt".to_string(),
            Value {
                kind: Some(Kind::NullValue(0)),
            },
        );
        map.insert(
            "collection of values".to_string(),
            Value {
                kind: Some(Kind::ListValue(super::ListValue {
                    values: vec![Value {
                        kind: Some(Kind::NumberValue(1f64)),
                    }],
                })),
            },
        );
        map.insert("not sure what this is".to_string(), Value { kind: None });

        Struct { fields: map }
    }
}

pub mod didcomm_messaging;
pub mod google_protobuf;
