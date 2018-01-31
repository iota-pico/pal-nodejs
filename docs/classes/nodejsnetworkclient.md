[@iota-pico/pal-nodejs](../README.md) > [NodeJsNetworkClient](../classes/nodejsnetworkclient.md)



# Class: NodeJsNetworkClient


Default implementation of a node client.
*__interface__*: 


## Implements

* `INetworkClient`

## Index

### Constructors

* [constructor](nodejsnetworkclient.md#constructor)


### Methods

* [postJson](nodejsnetworkclient.md#postjson)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new NodeJsNetworkClient**(networkEndPoint: *`INetworkEndPoint`*): [NodeJsNetworkClient](nodejsnetworkclient.md)


*Defined in [network/nodeJsNetworkClient.ts:11](https://github.com/iotaeco/iota-pico-pal-nodejs/blob/05145fd/src/network/nodeJsNetworkClient.ts#L11)*



Create an instance of NodeJsNetworkClient.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| networkEndPoint | `INetworkEndPoint`   |  The endpoint to use for the client. |





**Returns:** [NodeJsNetworkClient](nodejsnetworkclient.md)

---


## Methods
<a id="postjson"></a>

###  postJson

► **postJson**T,U(data: *`T`*, additionalHeaders?: *`object`*): `Promise`.<`U`>



*Defined in [network/nodeJsNetworkClient.ts:32](https://github.com/iotaeco/iota-pico-pal-nodejs/blob/05145fd/src/network/nodeJsNetworkClient.ts#L32)*



Post data asynchronously.


**Type parameters:**

#### T 

The generic type for the object to send.

#### U 

The generic type for the returned object.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `T`   |  The data to send. |
| additionalHeaders | `object`   |  Extra headers to send with the request. |





**Returns:** `Promise`.<`U`>
Promise which resolves to the object returned or rejects with error.






___


