using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

namespace Server
{
    class Program
    {
        static Task Main(string[] args) => CreateDefaultBuilder(args).Build().RunAsync();

        private static IWebHostBuilder CreateDefaultBuilder(string[] args) => WebHost.CreateDefaultBuilder(args)
            .UseStartup<Startup>();
    }
}
