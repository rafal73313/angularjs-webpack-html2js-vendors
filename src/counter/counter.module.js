import waCounter from "./counter.directive";
import waCounterController from "./counter.controller";

const waCounterModule = angular.module('wa.counter', [])
    .controller('waCounterController', waCounterController)
    .directive('waCounter', waCounter)

export default waCounterModule;