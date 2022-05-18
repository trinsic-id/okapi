package okapi

// OkapiVersion returns the version of the native binary loaded
func OkapiVersion() (string, error) {
	return okapiVersion()
}
