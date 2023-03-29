---
sidebar_position: 7
---

# Notes to BPMN and Camunda


## How Gateways work

The **parallel gateway** generates for each activated sequence flow a new token. These are not running in multithreads, but waiting on another.
The **Event-Based Gateway** is type of exclusive gateway used when process needs to wait for an action made by external participant.

Camunda 8 uses [message buffering](https://docs.camunda.io/docs/components/concepts/messages/#message-buffering), so the process doesn't have to be ready to receive the message event at exactly the moment it occurs. Buffered message identifies a particular process instance with correlation ID.
- use UUID for correlation ID
- don't use process instance ID or business data

## Handling issues

Business process model defines business reactions based on the business requirements. By using an error event, path for situations like invalid or missing data, special type of response can be defined.

Technical issues that might occur on service task level (service temporarily unavailable, job worker fails ...), are handled by Camunda using retries and incidents.

## Idempotent workers