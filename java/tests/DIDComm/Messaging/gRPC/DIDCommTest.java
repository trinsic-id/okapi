package DIDComm.Messaging.gRPC;
import DIDComm.Messaging.Proto.API;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class DIDCommTest {
    @Test
    public void testResolve() {
        API.ResolveRequest request = API.ResolveRequest.newBuilder().setDid("did:key:z6Mkk7yqnGF3YwTrLpqrW6PGsKci7dNqh1CjnvMbzrMerSeL#z6Mkk7yqnGF3YwTrLpqrW6PGsKci7dNqh1CjnvMbzrMerSeL").build();
        try {
            API.ResolveResponse response = DIDComm.Resolve(request);
            assertEquals("{\n  \"@context\": \"https://www.w3.org/ns/did/v1\",\n  \"id\": \"did:key:z6Mkk7yqnGF3YwTrLpqrW6PGsKci7dNqh1CjnvMbzrMerSeL\",\n  \"assertionMethod\": [\n    \"did:key:z6Mkk7yqnGF3YwTrLpqrW6PGsKci7dNqh1CjnvMbzrMerSeL#z6Mkk7yqnGF3YwTrLpqrW6PGsKci7dNqh1CjnvMbzrMerSeL\"\n  ],\n  \"authentication\": [\n    \"did:key:z6Mkk7yqnGF3YwTrLpqrW6PGsKci7dNqh1CjnvMbzrMerSeL#z6Mkk7yqnGF3YwTrLpqrW6PGsKci7dNqh1CjnvMbzrMerSeL\"\n  ],\n  \"capabilityDelegation\": [\n    \"did:key:z6Mkk7yqnGF3YwTrLpqrW6PGsKci7dNqh1CjnvMbzrMerSeL#z6Mkk7yqnGF3YwTrLpqrW6PGsKci7dNqh1CjnvMbzrMerSeL\"\n  ],\n  \"capabilityInvocation\": [\n    \"did:key:z6Mkk7yqnGF3YwTrLpqrW6PGsKci7dNqh1CjnvMbzrMerSeL#z6Mkk7yqnGF3YwTrLpqrW6PGsKci7dNqh1CjnvMbzrMerSeL\"\n  ],\n  \"keyAgreement\": [\n    \"did:key:z6Mkk7yqnGF3YwTrLpqrW6PGsKci7dNqh1CjnvMbzrMerSeL#z6LSrdqo4M24WRDJj1h2hXxgtDTyzjjKCiyapYVgrhwZAySn\"\n  ],\n  \"verificationMethod\": [\n    {\n      \"id\": \"did:key:z6Mkk7yqnGF3YwTrLpqrW6PGsKci7dNqh1CjnvMbzrMerSeL#z6Mkk7yqnGF3YwTrLpqrW6PGsKci7dNqh1CjnvMbzrMerSeL\",\n      \"type\": \"JsonWebKey2020\",\n      \"controller\": \"did:key:z6Mkk7yqnGF3YwTrLpqrW6PGsKci7dNqh1CjnvMbzrMerSeL\",\n      \"publicKeyJwk\": {\n        \"kty\": \"OKP\",\n        \"crv\": \"Ed25519\",\n        \"x\": \"VDXDwuGKVq91zxU6q7__jLDUq8_C5cuxECgd-1feFTE\"\n      }\n    },\n    {\n      \"id\": \"did:key:z6Mkk7yqnGF3YwTrLpqrW6PGsKci7dNqh1CjnvMbzrMerSeL#z6LSrdqo4M24WRDJj1h2hXxgtDTyzjjKCiyapYVgrhwZAySn\",\n      \"type\": \"OKP\",\n      \"controller\": \"did:key:z6Mkk7yqnGF3YwTrLpqrW6PGsKci7dNqh1CjnvMbzrMerSeL\",\n      \"publicKeyJwk\": {\n        \"kty\": \"OKP\",\n        \"crv\": \"X25519\",\n        \"x\": \"3kY9jl1by7pLzgJktUH-e9H6fihdVUb00-sTzkfmIl8\"\n      }\n    }\n  ]\n}", response.getDiddoc());
        } catch(Exception e) {
            e.printStackTrace();
            assertTrue(false);
        }
    }
}
