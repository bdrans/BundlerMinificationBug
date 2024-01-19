using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BundlerMinificationBug.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Bundled()
        {
            return View();
        }
        public ActionResult UnBundled()
        {
            return View();
        }
        public ActionResult Workaround()
        {
            return View();
        }
    }
}