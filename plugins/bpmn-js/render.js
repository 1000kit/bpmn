import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

export default (function analyticsModule() {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }
  return {
    onRouteUpdate() {
      setTimeout(function () {
        renderAllBpmnJs();
      }, 0);
    },
  };
})();
