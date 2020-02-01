(function(){
    angular.module('vw.headings.headOne')
        .directive('vwHeadOne', function(){
            return {
                scope: {},
                templateUrl: 'src/headings/headOne/headOne.template.html',
                link: function(scope) {
                    scope.title = 'This is HeadOne!'
                }
            }
        })
})()