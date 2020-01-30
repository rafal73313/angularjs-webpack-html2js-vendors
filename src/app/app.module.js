import waApp from './app.directive';
import waAppController from './app.controller';
import waCounterModule from '../counter/counter.module';

const waAppModule = angular.module('wa.app', [
    waCounterModule.name
])
    .controller('waAppController', waAppController)
    .directive('waApp', waApp)

export default waAppModule