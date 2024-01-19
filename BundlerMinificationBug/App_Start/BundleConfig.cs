using System.Web;
using System.Web.Optimization;

namespace BundlerMinificationBug
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/ForTest").Include(
                        "~/Scripts/ForTest.js"));

            bundles.Add(new ScriptBundle("~/bundles/ForTestWorkaround").Include(
                        "~/Scripts/ForTestWorkaround.js"));

            BundleTable.EnableOptimizations = true;
        }
    }
}
