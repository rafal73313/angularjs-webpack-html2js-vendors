angular.module("wa.templates", ["src/app/app.template.html", "src/counter/counter.template.html", "src/headings/headings.template.html", "src/headings/headOne/headOne.template.html", "src/headings/headTwo/headTwo.template.html"]);

angular.module("src/app/app.template.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/app.template.html",
    "<div class=wa-app><h2>{{ title }}</h2><wa-counter></wa-counter></div>");
}]);

angular.module("src/counter/counter.template.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/counter/counter.template.html",
    "<div class=wa-counter><h2>Counter: {{ count }}</h2><div><button ng-click=increment()>increment</button> | <button ng-click=decrement()>decrement</button></div></div>");
}]);

angular.module("src/headings/headings.template.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/headings/headings.template.html",
    "<div><h3>{{ title }}</h3><hr><vw-head-one></vw-head-one><vw-head-two></vw-head-two></div>");
}]);

angular.module("src/headings/headOne/headOne.template.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/headings/headOne/headOne.template.html",
    "<div><h1>{{ title }}</h1></div>");
}]);

angular.module("src/headings/headTwo/headTwo.template.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/headings/headTwo/headTwo.template.html",
    "<div><h1>{{ title }}</h1></div>");
}]);
