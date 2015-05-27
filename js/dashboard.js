// Delete these three lines once you have your environment variables set
// The environment-configured 'keen' variable is set in layout.erb
var client = new Keen({
    projectId: "5563847fc1e0ab48c0e844f0",
    writeKey: "81dce749e66682c6301db1bc678ee4324d55f21c853963873801db28f26bc435d8d7af4bcd550ed7f6c05f5ddf7a005a95dcfda5171de4434aff9af6a378eebc975c45a7c1d14daf03ec3ce776537839cbc9d8db37370cd35a4b8f9ba6b9075ac5221bc8a8fb85efbafa7a750f06a953",
    readKey: "7ffb4a3c7890ce7985758d0d7c6a194495a7ef4d22d8fdf86f99cee66f629b32b7b6eda91d4a0888f4a0bdc24365164761ddd88908af6fbd7809c33b9cc86c5d8499b2b318f359f3ad326af621948507541412a5e4ba035d66d4aac9b635245f722ef19d493be5c909467ef71ffc6f54"
});

Keen.ready(function(){

  // Delete these queries once you're ready to make your own

  // ----------------------------------------
  // Pageviews Area Chart
  // ----------------------------------------
  var pageviews_timeline = new Keen.Query("count", {
    eventCollection: "clicks",
    groupBy: "element.text"
  });
  client.draw(pageviews_timeline, document.getElementById("grid-1-1"), {
    chartType: "columnchart",
    title: false,
    height: "auto",
    width: "auto",
    chartOptions: {
      chartArea: {
          //options
      },
      isStacked: true
    }
  });

  var pageviews_timeline = new Keen.Query("count", {
    eventCollection: "pageviews",
  });
  client.draw(pageviews_timeline, document.getElementById("grid-1-2"), {
    // chartType: "barchart",
    title: false,
    height: "auto",
    width: "auto",
    chartOptions: {
      chartArea: {
          //options
      },
      isStacked: true
    }
  });

  var pageviews_timeline = new Keen.Query("count", {
    eventCollection: "pageviews",
    groupBy: "ip_geo_info.city"
  });
  client.draw(pageviews_timeline, document.getElementById("grid-3-1"), {
    chartType: "barchart",
    title: false,
    height: "auto",
    width: "auto",
    chartOptions: {
      chartArea: {
          //options
      },
      isStacked: true
    }
  });

  var pageviews_timeline = new Keen.Query("count", {
    eventCollection: "pageviews",
    groupBy: "referrer_info.medium"
  });
  client.draw(pageviews_timeline, document.getElementById("grid-2-2"), {
    chartType: "barchart",
    title: false,
    height: "auto",
    width: "auto",
    chartOptions: {
      chartArea: {
          //options
      },
      isStacked: true
    }
  });

  var pageviews_timeline = new Keen.Query("count", {
    eventCollection: "pageviews",
    groupBy: "referrer_url"
  });
  client.draw(pageviews_timeline, document.getElementById("grid-2-3"), {
    chartType: "barchart",
    title: false,
    height: "auto",
    width: "auto",
    chartOptions: {
      chartArea: {
          //options
      },
      isStacked: true
    }
  });

  var pageviews_timeline = new Keen.Query("count", {
    eventCollection: "pageviews",
    groupBy: "ip_geo_info.country"
  });
  client.draw(pageviews_timeline, document.getElementById("grid-2-1"), {
    chartType: "barchart",
    title: false,
    height: "auto",
    width: "auto",
    chartOptions: {
      chartArea: {
          //options
      },
      isStacked: true
    }
  });

  var pageviews_timeline = new Keen.Query("count", {
    eventCollection: "pageviews",
    timeframe: "this_month",
    interval: "daily"
  });
  client.draw(pageviews_timeline, document.getElementById("grid-3-2"), {
    chartType: "linechart",
    title: false,
    height: "auto",
    width: "auto",
    chartOptions: {
      chartArea: {
          //options
      },
      isStacked: true
    }
  });

  // var pageviews_timeline = new Keen.Query("count", {
  //   eventCollection: "clicks",
  //   groupBy: "element.text"
  // });
  // client.draw(pageviews_timeline, document.getElementById("grid-3-3"), {
  //   chartType: "columnchart",
  //   title: false,
  //   height: "auto",
  //   width: "auto",
  //   chartOptions: {
  //     chartArea: {
  //         //options
  //     },
  //     isStacked: true
  //   }
  // });

});
