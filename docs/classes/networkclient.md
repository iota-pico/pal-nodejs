[@iota-pico/pal-nodejs](../README.md) > [NetworkClient](../classes/networkclient.md)

# Class: NetworkClient

Implementation of a node client for use in NodeJS.

## Hierarchy

**NetworkClient**

## Implements

* `INetworkClient`

## Index

### Constructors

* [constructor](networkclient.md#constructor)

### Methods

* [doRequest](networkclient.md#dorequest)
* [get](networkclient.md#get)
* [json](networkclient.md#json)
* [post](networkclient.md#post)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new NetworkClient**(networkEndPoint: *`INetworkEndPoint`*, logger?: *`ILogger`*, timeoutMs?: *`number`*, httpClientRequest?: *`function`*): [NetworkClient](networkclient.md)

*Defined in [network/networkClient.ts:24](https://github.com/iota-pico/pal-nodejs/tree/master/src/network/networkClient.ts#L24*

Create an instance of NetworkClient.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| networkEndPoint | `INetworkEndPoint` | - |  The endpoint to use for the client. |
| `Optional` logger | `ILogger` | - |  Logger to send communication info to. |
| `Default value` timeoutMs | `number` | 0 |  The timeout in ms before aborting. |
| `Optional` httpClientRequest | `function` | - |  The client request object, usually not required. |

**Returns:** [NetworkClient](networkclient.md)

___

## Methods

<a id="dorequest"></a>

###  doRequest

▸ **doRequest**(method: *`string`*, data: *`string`*, additionalPath?: *`string`*, additionalHeaders?: *`object`*): `Promise`<`string`>

*Defined in [network/networkClient.ts:127](https://github.com/iota-pico/pal-nodejs/tree/master/src/network/networkClient.ts#L127*

Perform a request asynchronously.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| method | `string` |  The method to send the data with. |
| data | `string` |  The data to send. |
| `Optional` additionalPath | `string` |  An additional path append to the endpoint path. |
| `Optional` additionalHeaders | `object` |  Extra headers to send with the request. |

**Returns:** `Promise`<`string`>
Promise which resolves to the object returned or rejects with error.

___
<a id="get"></a>

###  get

▸ **get**(data: *`object`*, additionalPath?: *`string`*, additionalHeaders?: *`object`*): `Promise`<`string`>

*Defined in [network/networkClient.ts:59](https://github.com/iota-pico/pal-nodejs/tree/master/src/network/networkClient.ts#L59*

Get data asynchronously.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| data | `object` |  The data to send. |
| `Optional` additionalPath | `string` |  An additional path append to the endpoint path. |
| `Optional` additionalHeaders | `object` |  Extra headers to send with the request. |

**Returns:** `Promise`<`string`>
Promise which resolves to the object returned or rejects with error.

___
<a id="json"></a>

###  json

▸ **json**<`T`,`U`>(data?: *`T`*, method?: *`NetworkMethod`*, additionalPath?: *`string`*, additionalHeaders?: *`object`*): `Promise`<`U`>

*Defined in [network/networkClient.ts:90](https://github.com/iota-pico/pal-nodejs/tree/master/src/network/networkClient.ts#L90*

Request data as JSON asynchronously.

**Type parameters:**

#### T 

The generic type for the object to send.

#### U 

The generic type for the returned object.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` data | `T` |  The data to send as the JSON body. |
| `Optional` method | `NetworkMethod` |  The method to send with the request. |
| `Optional` additionalPath | `string` |  An additional path append to the endpoint path. |
| `Optional` additionalHeaders | `object` |  Extra headers to send with the request. |

**Returns:** `Promise`<`U`>
Promise which resolves to the object returned or rejects with error.

___
<a id="post"></a>

###  post

▸ **post**(data: *`string`*, additionalPath?: *`string`*, additionalHeaders?: *`object`*): `Promise`<`string`>

*Defined in [network/networkClient.ts:73](https://github.com/iota-pico/pal-nodejs/tree/master/src/network/networkClient.ts#L73*

Post data asynchronously.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| data | `string` |  The data to send. |
| `Optional` additionalPath | `string` |  An additional path append to the endpoint path. |
| `Optional` additionalHeaders | `object` |  Extra headers to send with the request. |

**Returns:** `Promise`<`string`>
Promise which resolves to the object returned or rejects with error.

___

