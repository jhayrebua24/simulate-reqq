import actions from "./actions/simulateAction";
import {
  IArrayObjects,
  ISchemaTypes,
  ISchemaObject,
  IDataTypes,
} from "./interface";

export const schemaTypes: ISchemaTypes = {
  arrayObjects: (data: IArrayObjects): ISchemaObject => ({
    type: "arrayObjects",
    data,
  }),
  arrayStrings: (): ISchemaObject => ({
    type: "arrayStrings",
  }),
  arrayNumber: (): ISchemaObject => ({
    type: "arrayNumbers",
  }),
  shape: (data: IArrayObjects): ISchemaObject => ({
    type: "object",
    data,
  }),
};

export const dataTypes: IDataTypes = {
  image: () => "image.imageUrl",
  street: () => "address.street",
  city: () => "address.city",
  zip: () => "address.zipCode",
  state: () => "address.state",
  country: () => "address.country",
  productName: () => "commerce.productName",
  color: () => "commerce.color",
  datePast: () => "date.past",
  dateFuture: () => "date.future",
  email: () => "internet.email",
  username: () => "internet.userName",
  uuid: () => "random.uuid",
  number: () => "random.number",
  words: () => "random.words",
  word: () => "random.word",
  sentence: () => "lorem.sentence",
  paragraph: () => "lorem.paragraph",
  fullAddress: () => "address.full",
  firstName: () => "name.firstName",
  lastName: () => "name.lastName",
  fullName: () => "name.fullName",
  jobTitle: () => "name.jobTitle",
};

export default actions;
