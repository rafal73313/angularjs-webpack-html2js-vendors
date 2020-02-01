(function () {
    angular.module('vw.headings')
        .directive('vwHeadings', function() {
            return {
                scope: {},
                templateUrl: 'src/headings/headings.template.html',
                link: function(scope) {
                    scope.title = 'This is HEADINGS!'
                }
            }
        })
})()