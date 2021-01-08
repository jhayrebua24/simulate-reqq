export interface IArrayObjects {
  [key: string]: any;
}

export interface ISuccessData {
  data?: string[] | number[] | IArrayObjects[] | IArrayObjects;
  meta?: {
    totalPage: number;
    currentPage: number;
    totalRecord: number;
  };
  message?: string;
}

export interface Props {
  onSuccess: (res?: ISuccessData) => void;
  key: string;
}

export interface Params extends Props {
  duration?: number;
}

export interface ISchemaObject {
  type: string;
  data?: IArrayObjects;
  count?: number;
}

export type IRandomOptions = string[] | number[] | IArrayObjects[];

export interface ISchemaTypes {
  arrayObjects: (schema: IArrayObjects, count?: number) => ISchemaObject;
  arrayStrings: (count?: number) => ISchemaObject;
  arrayNumber: (count?: number) => ISchemaObject;
  shape: (schema: IArrayObjects) => ISchemaObject;
  random: (options: IRandomOptions) => ISchemaObject;
}

export interface IGet extends Params {
  schema: ISchemaObject;
  recordCount?: number;
  params?: {
    page: number;
    [key: string]: string | number;
  };
}
export interface IPut extends Params {
  payload?: IArrayObjects;
  returnData?: ISchemaObject;
}
export interface IPost extends IPut {
  returnKey?: string;
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
  randomAlphaNumber: () => string;
  price: () => string;
  companyName: () => string;
  accountName: () => string;
  latitude: () => string;
  longitude: () => string;
  contactNumber: () => string;
}

export type Simulate = {
  get: (opt: IGet) => void;
  put: (opt: IPut) => void;
  post: (opt: IPost) => void;
  remove: (opt: Params) => void;
};
