using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Server.Kestrel.Core;

namespace Server
{
    class Program
    {
        static Task Main(string[] args) => CreateDefaultBuilder(args).Build().RunAsync();

        private static IWebHostBuilder CreateDefaultBuilder(string[] args) => WebHost.CreateDefaultBuilder(args)
            .UseKestrel(option =>
            {
                option.ListenLocalhost(5000, config =>
                {
                    config.Protocols = HttpProtocols.Http2;
                    //config.UseHttps();
                });
            })
            .UseStartup<Startup>();
    }
}
