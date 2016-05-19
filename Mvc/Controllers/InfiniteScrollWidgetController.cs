using SitefinityWebApp.Mvc.Models;
using System.ComponentModel;
using System.Web.Mvc;
using Telerik.Sitefinity.Mvc;

namespace SitefinityWebApp.Mvc.Controllers
{
    [ControllerToolboxItem(Name = "InfiniteScrollWidget", Title = "InfiniteScrollWidget", SectionName = "MvcWidgets")]
    public class InfiniteScrollWidgetController : Controller
    {
        [Category("String Properties")]
        public string Heading { get; set; }

        [Category("String Properties")]
        public string NoMoreItemsText { get; set; }

        /// <summary>
        /// This is the default Action.
        /// </summary>
        public ActionResult Index()
        {
            var model = new InfiniteScrollWidgetModel();
            if (string.IsNullOrEmpty(this.Heading))
            {
                model.Heading = "Hello, World!";
            }
            else
            {
                model.Heading = this.Heading;
            }

            if (string.IsNullOrEmpty(this.NoMoreItemsText))
            {
                model.NoMoreItemsText = "No more items";
            }
            else
            {
                model.NoMoreItemsText = this.NoMoreItemsText;
            }

            return View("Default", model);
        }
    }
}