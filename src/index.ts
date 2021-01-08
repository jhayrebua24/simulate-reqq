import actions from './actions/simulateAction';
import {
  IArrayObjects,
  ISchemaTypes,
  ISchemaObject,
  IDataTypes,
  IRandomOptions,
} from './interface';

export const schemaTypes: ISchemaTypes = {
  arrayObjects: (data: IArrayObjects, count?: number): ISchemaObject => ({
    type: 'arrayObjects',
    data,
    count,
  }),
  arrayStrings: (count?: number): ISchemaObject => ({
    type: 'arrayStrings',
    count,
  }),
  arrayNumber: (count?: number): ISchemaObject => ({
    type: 'arrayNumbers',
    count,
  }),
  shape: (data: IArrayObjects): ISchemaObject => ({
    type: 'object',
    data,
  }),
  random: (data: IRandomOptions): ISchemaObject => ({
    type: 'random',
    data,
  }),
};

export const dataTypes: IDataTypes = {
  image: () => 'image.imageUrl',
  street: () => 'address.street',
  city: () => 'address.city',
  zip: () => 'address.zipCode',
  state: () => 'address.state',
  country: () => 'address.country',
  productName: () => 'commerce.productName',
  color: () => 'commerce.color',
  datePast: () => 'date.past',
  dateFuture: () => 'date.future',
  email: () => 'internet.email',
  username: () => 'internet.userName',
  uuid: () => 'random.uuid',
  number: () => 'random.number',
  words: () => 'random.words',
  word: () => 'random.word',
  sentence: () => 'lorem.sentence',
  paragraph: () => 'lorem.paragraph',
  fullAddress: () => 'address.full',
  firstName: () => 'name.firstName',
  lastName: () => 'name.lastName',
  fullName: () => 'name.fullName',
  jobTitle: () => 'name.jobTitle',
  randomAlphaNumber: () => 'random.alphanumeric',
  price: () => 'commerce.price',
  companyName: () => 'company.companyName',
  accountName: () => 'finance.accountName',
  latitude: () => 'address.latitude',
  longitude: () => 'address.longitude',
  contactNumber: () => 'phone.phontNumber',
};

export default actions;
