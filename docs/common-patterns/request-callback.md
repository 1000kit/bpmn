---
sidebar_position: 1
---

# Request callback

Let's look at the typical pattern to integrate a communication with another system. 
<div bpmn="docs/common-patterns/request-callback.bpmn" callouts="Activity_send_request" />
You might keep the process model independent of the fact if the notification service is synchronous or asynchronous and use a `service task` for sending a request. <span className="callout">1</span> When the send and receive functionality is modeled in separate tasks/events, a correlation ID needs to be generated manually, message buffering is necessary and it is essential to think about idempotency.  

 See also comparison of **[communication patterns](https://blog.bernd-ruecker.com/service-integration-patterns-with-bpmn-and-camunda-cloud-53b0f458e49)** from Bernd Rücker. 

<div bpmn="docs/common-patterns/request-callback-retry-skip.bpmn" callouts="" />
