using Google.Protobuf;
using Okapi.Examples.V1;
using Okapi.Keys.V1;
using Okapi.Metadata;
using Okapi.Transport;
using Okapi.Transport.V1;
using Pbmse.V1;
using Xunit;

namespace Okapi.Tests;

public class MetadataTests
{
    [Fact]
    public void TestGetMetadata()
    {
        var response = OkapiMetadata.GetMetadata();
        Assert.NotNull(response);
        Assert.False(string.IsNullOrWhiteSpace(response.Version));
    }
}
