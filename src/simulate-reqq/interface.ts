export interface Props {
  onSuccess: (res?: any) => void;
  key: string;
}

export interface Options extends Props {
  duration: number;
}

export interface Params extends Props {
  duration?: number;
}

export interface IArrayObjects {
  [key: string]: string;
}

export interface ISchemaObject {
  type: string;
  data?: IArrayObjects;
}

export interface ISchemaTypes {
  arrayObjects: (schema: IArrayObjects) => ISchemaObject;
  arrayStrings: () => ISchemaObject;
  arrayNumber: () => ISchemaObject;
  shape: (schema: IArrayObjects) => ISchemaObject;
}

export interface IGet extends Params {
  schema: ISchemaObject;
  recordCount?: number;
}

export interface IDataTypes {
  image: () => string;
  street: () => string;
  city: () => string;
  zip: () => string;
  state: () => string;
  country: () => string;
  productName: () => string;
  color: () => string;
  datePast: () => string;
  dateFuture: () => string;
  email: () => string;
  username: () => string;
  uuid: () => string;
  number: () => string;
  words: () => string;
  word: () => string;
  paragraph: () => string;
  sentence: () => string;
  fullAddress: () => string;
  firstName: () => string;
  lastName: () => string;
  jobTitle: () => string;
  fullName: () => string;
}

export type Simulate = {
  get: (opt: IGet) => void;
  put: ({ key, onSuccess, duration }: Params) => void;
  post: ({ key, onSuccess, duration }: Params) => void;
  remove: ({ key, onSuccess, duration }: Params) => void;
};
