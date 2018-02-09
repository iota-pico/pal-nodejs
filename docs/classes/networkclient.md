[@iota-pico/pal-nodejs](../README.md) > [NetworkClient](../classes/networkclient.md)



# Class: NetworkClient


Implementation of a node client for use in NodeJS.
*__interface__*: 


## Implements

* `INetworkClient`

## Index

### Constructors

* [constructor](networkclient.md#constructor)


### Methods

* [postJson](networkclient.md#postjson)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new NetworkClient**(networkEndPoint: *`INetworkEndPoint`*): [NetworkClient](networkclient.md)


*Defined in [network/networkClient.ts:12](https://github.com/iotaeco/iota-pico-pal-nodejs/blob/16e916e/src/network/networkClient.ts#L12)*



Create an instance of NetworkClient.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| networkEndPoint | `INetworkEndPoint`   |  The endpoint to use for the client. |





**Returns:** [NetworkClient](networkclient.md)

---


## Methods
<a id="postjson"></a>

###  postJson

► **postJson**T,U(data: *`T`*, additionalHeaders?: *`object`*): `Promise`.<`U`>



*Defined in [network/networkClient.ts:33](https://github.com/iotaeco/iota-pico-pal-nodejs/blob/16e916e/src/network/networkClient.ts#L33)*



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


