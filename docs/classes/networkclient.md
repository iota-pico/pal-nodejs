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

* [get](networkclient.md#get)
* [getJson](networkclient.md#getjson)
* [post](networkclient.md#post)
* [postJson](networkclient.md#postjson)

---

## Constructors

<a id="constructor"></a>

### ⊕ **new NetworkClient**(networkEndPoint: *`INetworkEndPoint`*, logger?: *`ILogger`*, timeoutMs?: *`number`*, httpClientRequest?: *`function`*): [NetworkClient](networkclient.md)

*Defined in [network/networkClient.ts:23](https://github.com/iota-pico/pal-nodejs/blob/ddbcf7f/src/network/networkClient.ts#L23)*

Create an instance of NetworkClient.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| networkEndPoint | `INetworkEndPoint`  | - |   The endpoint to use for the client. |
| logger | `ILogger`  | - |   Logger to send communication info to. |
| timeoutMs | `number`  | 0 |   The timeout in ms before aborting. |
| httpClientRequest | `function`  | - |   - |

**Returns:** [NetworkClient](networkclient.md)

---

## Methods

<a id="get"></a>

###  get

▸ **get**(additionalPath?: *`string`*, additionalHeaders?: *`object`*): `Promise`.<`string`>

*Defined in [network/networkClient.ts:53](https://github.com/iota-pico/pal-nodejs/blob/ddbcf7f/src/network/networkClient.ts#L53)*

Get data asynchronously.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| additionalPath | `string`   |  An additional path append to the endpoint path. |
| additionalHeaders | `object`   |  Extra headers to send with the request. |

**Returns:** `Promise`.<`string`>
Promise which resolves to the object returned or rejects with error.

___

<a id="getjson"></a>

###  getJson

▸ **getJson**U(additionalPath?: *`string`*, additionalHeaders?: *`object`*): `Promise`.<`U`>

*Defined in [network/networkClient.ts:81](https://github.com/iota-pico/pal-nodejs/blob/ddbcf7f/src/network/networkClient.ts#L81)*

Get data as JSON asynchronously.

**Type parameters:**

#### U 

The generic type for the returned object.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| additionalPath | `string`   |  An additional path append to the endpoint path. |
| additionalHeaders | `object`   |  Extra headers to send with the request. |

**Returns:** `Promise`.<`U`>
Promise which resolves to the object returned or rejects with error.

___

<a id="post"></a>

###  post

▸ **post**(data: *`string`*, additionalPath?: *`string`*, additionalHeaders?: *`object`*): `Promise`.<`string`>

*Defined in [network/networkClient.ts:67](https://github.com/iota-pico/pal-nodejs/blob/ddbcf7f/src/network/networkClient.ts#L67)*

Post data asynchronously.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `string`   |  The data to send. |
| additionalPath | `string`   |  An additional path append to the endpoint path. |
| additionalHeaders | `object`   |  Extra headers to send with the request. |

**Returns:** `Promise`.<`string`>
Promise which resolves to the object returned or rejects with error.

___

<a id="postjson"></a>

###  postJson

▸ **postJson**T,U(data: *`T`*, additionalPath?: *`string`*, additionalHeaders?: *`object`*): `Promise`.<`U`>

*Defined in [network/networkClient.ts:108](https://github.com/iota-pico/pal-nodejs/blob/ddbcf7f/src/network/networkClient.ts#L108)*

Post data as JSON asynchronously.

**Type parameters:**

#### T 

The generic type for the object to send.

#### U 

The generic type for the returned object.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `T`   |  The data to send. |
| additionalPath | `string`   |  An additional path append to the endpoint path. |
| additionalHeaders | `object`   |  Extra headers to send with the request. |

**Returns:** `Promise`.<`U`>
Promise which resolves to the object returned or rejects with error.

___

