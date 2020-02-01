import waAppModule from './app/app.module';

angular.module('wa', [
    waAppModule.name,
    'vw.headings',
    'wa.templates'
])