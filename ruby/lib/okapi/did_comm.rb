# frozen_string_literal: true

module Okapi
  # DidComm module
  module DidComm
    def self.pack(request)
      Okapi.verify_type(request, Transport_V1::PackRequest)
      Okapi.ffi_call('didcomm_pack', request, Transport_V1::PackResponse)
    end

    def self.unpack(request)
      Okapi.verify_type(request, Transport_V1::UnpackRequest)
      Okapi.ffi_call('didcomm_unpack', request, Transport_V1::UnpackResponse)
    end

    def self.sign(request)
      Okapi.verify_type(request, Transport_V1::SignRequest)
      Okapi.ffi_call('didcomm_sign', request, Transport_V1::SignResponse)
    end

    def self.verify(request)
      Okapi.verify_type(request, Transport_V1::VerifyRequest)
      Okapi.ffi_call('didcomm_verify', request, Transport_V1::VerifyResponse)
    end
  end
end
