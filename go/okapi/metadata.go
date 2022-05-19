package okapi

import "github.com/trinsic-id/okapi/go/okapiproto"

// Metadataer implements Linked-Data Proofs
type OkapiMetadataer interface {
	GetMetadata() (*okapiproto.MetadataResponse, error)
}

// OkapiMetadata implements Linked-Data Proofs
func OkapiMetadata() OkapiMetadataer {
	return &okapiMetadata{}
}

type okapiMetadata struct{}

func (o okapiMetadata) GetMetadata() (*okapiproto.MetadataResponse, error) {
	request := &okapiproto.MetadataRequest{}
	response := okapiproto.MetadataResponse{}
	err := callOkapiNative(request, &response, "okapi_metadata")
	return &response, err
}
