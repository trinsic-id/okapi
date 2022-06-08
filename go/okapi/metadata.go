package okapi

import "github.com/trinsic-id/okapi/go/okapi/metadata"

// Metadataer implements Linked-Data Proofs
type OkapiMetadataer interface {
	GetMetadata() (*metadata.MetadataResponse, error)
}

// OkapiMetadata implements Linked-Data Proofs
func OkapiMetadata() OkapiMetadataer {
	return &okapiMetadata{}
}

type okapiMetadata struct{}

func (o okapiMetadata) GetMetadata() (*metadata.MetadataResponse, error) {
	request := &metadata.MetadataRequest{}
	response := metadata.MetadataResponse{}
	err := callOkapiNative(request, &response, "okapi_metadata")
	return &response, err
}
