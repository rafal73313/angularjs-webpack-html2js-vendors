(function() {

    angular.module('vw.headings.headTwo')
        .directive('vwHeadTwo', function(){
            return {
                scope: {},
                templateUrl: 'src/headings/headTwo/headTwo.template.html',
                link: function(scope) {
                    scope.title = 'This is HeadTwo!'
                }
            }
        })

})()