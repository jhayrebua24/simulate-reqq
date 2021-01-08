# simulate-reqq

simulate request from api & data response

### Install the package

> ### npm install simulate-reqq

### Import the package

> import simulate, { schemaTypes, dataTypes } from 'simulate-reqq';

<hr>
<b>GET Request</b>

```javascript
simulate.get({
  key: 'foo', // key for react-reqq
  params: { page: 5 },
  schema: schemaTypes.arrayObjects({
    uuid: dataTypes.uuid(),
  }), // schema for return data
  onSuccess: res => {
    console.log(res);
  },
  recordCount: 1, // number of return data (default 10)
  duration: 1000, // duration for request (default 1000)
});
```

Response:

```javascript
{
  data: [
    {
      uuid: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    },
  ],
  meta: {
      currentPage: 1,
      totalPage: 10,
      totalRecord: 10,
    }
}
```

<hr>
<b>POST Request</b>

```javascript
payload = {
  name: 'John',
};

simulate.post({
  key: 'foo',
  payload,
  returnKey: 'id',
  // you can also add additional return data if you want
  // just use schema just like on "get"
  returnData: schemaTypes.shape({
    additional: 1,
  }),
  onSuccess: res => {
    console.log(res);
  },
});
```

Response:

```javascript
{
  data: [
    {
      id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      name: 'John',
      additional: 1,
    },
  ],
  message: 'Record Added'
}
```

<hr>

### Nested schema

`You can do nested schema or returnData for post & put if you want to:`

```javascript
schema: schemaTypes.arrayObjects({
  uuid: dataTypes.uuid(),
  name: schemaTypes.shape({
    first: dataTypes.firstName(),
    last: dataTypes.lastName(),
    strings: schemaTypes.arrayString(2),
  }),
});
```

Result

```javascript
  data: {
    uuid: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    name: {
      first: 'John',
      last: 'Last',
      strings: ['this is foo', 'this is bar'] //random strings
    }
  }
```

<hr>

<br/>
<br/>
<br/>

### Props

| Props       | Method    | Type                    | Required | default    |
| ----------- | --------- | ----------------------- | -------- | ---------- |
| key         | All       | string                  | yes      | null       |
| params      | GET       | object - Optional       | yes      | { page: 1} |
| schema      | GET       | schemaObject - Required | yes      | null       |
| returnKey   | POST      | string                  | no       | uuid       |
| returnData  | POST, PUT | schemaObject            | no       | null       |
| payload     | POST, PUT | object                  | no       | {}         |
| duration    | All       | number                  | no       | 1000       |
| recordCount | GET       | number                  | no       | 10         |
| onSuccess   | All       | function                | yes      | null       |

<br/>
<br/>
<br/>

### schemaTypes

| function     | params                                                 |
| ------------ | ------------------------------------------------------ |
| arrayObjects | (object: required , count: optional(for nested only) ) |
| arrayNumber  | (count: optional(for nested only) )                    |
| arrayStrings | (count: optional(for nested only) )                    |
| shape        | (object: required )                                    |
| random       | (array of numbers, strings, or object: required        |

<br/>
<br/>
<br/>

### dataTypes

| function          |
| ----------------- |
| image             |
| street            |
| city              |
| zip               |
| state             |
| country           |
| productName       |
| color             |
| datePast          |
| dateFuture        |
| email             |
| username          |
| uuid              |
| number            |
| words             |
| word              |
| sentence          |
| paragraph         |
| fullAddress       |
| firstName         |
| lastName          |
| fullName          |
| jobTitle          |
| randomAlphaNumber |
| price             |
| companyName       |
| accountName       |
| latitude          |
| longitude         |
| contactNumber     |
