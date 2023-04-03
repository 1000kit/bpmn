"use strict";(self.webpackChunkbpmn=self.webpackChunkbpmn||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"References","href":"/bpmn/docs/references","docId":"references"},{"type":"category","label":"How it works","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Open topics","href":"/bpmn/docs/how-it-works/open-topics","docId":"how-it-works/open-topics"},{"type":"link","label":"Messages","href":"/bpmn/docs/how-it-works/messages","docId":"how-it-works/messages"}],"href":"/bpmn/docs/category/how-it-works"},{"type":"category","label":"Common patterns","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Cancel timer","href":"/bpmn/docs/common-patterns/cancel-timer","docId":"common-patterns/cancel-timer"},{"type":"link","label":"Request callback","href":"/bpmn/docs/common-patterns/request-callback","docId":"common-patterns/request-callback"}],"href":"/bpmn/docs/category/common-patterns"}]},"docs":{"common-patterns/cancel-timer":{"id":"common-patterns/cancel-timer","title":"Cancel timer","description":"Sometimes the business case requires that the set timer needs to be manually canceled so that the process can continue further. For this purpose, it is ideal to use an exclusive event-based gateway that enables work with events.","sidebar":"tutorialSidebar"},"common-patterns/request-callback":{"id":"common-patterns/request-callback","title":"Request callback","description":"","sidebar":"tutorialSidebar"},"how-it-works/messages":{"id":"how-it-works/messages","title":"Messages","description":"Camunda 8 uses message buffering, so the process instance doesn\'t have to be ready to receive the message event at exactly the moment it occurs (use message attribute TTL - time to live instead of time events or retry workarounds). Buffered message is mapped to a process instance based on the correlation key. Here the best practices on creating of correlation key taken from book Practical process automation","sidebar":"tutorialSidebar"},"how-it-works/open-topics":{"id":"how-it-works/open-topics","title":"Open topics","description":"Handling issues","sidebar":"tutorialSidebar"},"references":{"id":"references","title":"References","description":"Let\'s discover BPMN process modelling and how it works with Camunda 8 platform.","sidebar":"tutorialSidebar"}}}')}}]);