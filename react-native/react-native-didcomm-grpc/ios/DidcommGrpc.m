#import "DidcommGrpc.h"
#import <DIDComm-gRPC/NativeFunc.h>
#import <Foundation/Foundation.h>

@implementation DidcommGrpc

RCT_EXPORT_MODULE()

// Example method
// See // https://facebook.github.io/react-native/docs/native-modules-ios
RCT_REMAP_METHOD(multiply,
                 multiplyWithA:(nonnull NSNumber*)a withB:(nonnull NSNumber*)b
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)
{
  NSNumber *result = @([a floatValue] * [b floatValue]);

  resolve(result);
}

RCT_REMAP_METHOD(echo,
                 echoWithRequest:(nonnull NSArray*)request
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)
{
  resolve(request);
  return;
}

RCT_REMAP_METHOD(pack,
                 packWithRequest:(nonnull NSArray*)request
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)
{
  NSMutableData *requestData = [[NSMutableData alloc] initWithCapacity:request.count];
  for (id item in request) {
      [requestData appendBytes:&item length:1];
  }
  
  ByteBuffer req;
  req.len = requestData.length;
  req.data = (uint8_t *)[requestData bytes];
  
  ByteBuffer *response = (ByteBuffer*) malloc(sizeof(ByteBuffer));
  ExternError *err = (ExternError*) malloc(sizeof(ExternError));

  if (didcomm_pack(req, response, err) != 0) {
      NSError *error = [DidcommGrpc errorFromExternError:err];
      reject(@"err_native", @"Error in native library", error);
      return;
  }

  NSData* responseData =[[NSData alloc] initWithBytesNoCopy:response->data length:(NSUInteger)response->len freeWhenDone:true];

  //resolve([NSKeyedUnarchiver unarchivedObjectOfClass:NSData.class fromData:responseData error:nil]);
  NSArray *responseArray = [DidcommGrpc arrayFromData:responseData];
  //[NSKeyedUnarchiver unarchivedObjectOfClass:NSData.class fromData:responseData error:nil];
  //[DidcommGrpc arrayFromData:responseData];
  resolve(responseArray);
}

+ (NSArray *)arrayFromData:(NSData *)data;
{
    const void *bytes = [data bytes];
    NSMutableArray *ary = [NSMutableArray array];
    for (NSUInteger i = 0; i < [data length]; i += sizeof(uint8_t)) {
        uint8_t elem = OSReadLittleInt(bytes, i);
        [ary addObject:[NSNumber numberWithUnsignedInt:elem]];
    }
    return ary;
}

static NSString *const DMErrorDomain = @"DIDCommError";

+ (NSError *)errorFromExternError:(ExternError *)error {

    NSMutableDictionary *userInfo = [NSMutableDictionary new];

    if (error->message != NULL) {
        [userInfo setValue:[NSString stringWithUTF8String:error->message] forKey:@"message"];
        free(error->message);
    }

    NSError *result = [NSError errorWithDomain:DMErrorDomain code:error->code userInfo:userInfo];

    free(error);

    return result;
}

@end

@implementation DIDKeyGrpc

RCT_EXPORT_MODULE()

RCT_REMAP_METHOD(generate,
                 generateWithRequest:(nonnull NSArray*)request
                        withResolver:(RCTPromiseResolveBlock)resolve
                        withRejecter:(RCTPromiseRejectBlock)reject)
{
  NSMutableData *requestData = [[NSMutableData alloc] initWithCapacity:request.count];
  for (id item in request) {
      [requestData appendBytes:&item length:1];
  }
  
  ByteBuffer req;
  req.len = requestData.length;
  req.data = (uint8_t *)[requestData bytes];
  
  ByteBuffer *response = (ByteBuffer*) malloc(sizeof(ByteBuffer));
  ExternError *err = (ExternError*) malloc(sizeof(ExternError));

  if (didkey_generate(req, response, err) != 0) {
      NSError *error = [DidcommGrpc errorFromExternError:err];
      reject(@"err_native", @"Error in native library", error);
      return;
  }

  NSData* responseData =[[NSData alloc] initWithBytesNoCopy:response->data length:(NSUInteger)response->len freeWhenDone:true];

  NSArray *responseArray = [DidcommGrpc arrayFromData:responseData];
  resolve(responseArray);
}

@end