angular.module("wa.templates", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/app.template.html",
    "<div class=wa-app><h2>{{ title }}</h2><wa-counter></wa-counter></div>");
  $templateCache.put("src/counter/counter.template.html",
    "<div class=wa-counter><h2>Counter: {{ count }}</h2><div><button ng-click=increment()>increment</button> | <button ng-click=decrement()>decrement</button></div></div>");
}]);
