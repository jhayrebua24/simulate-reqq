import faker from 'faker';

export const ARRAY_SCHEMA_TYPES = [
  'arrayObjects',
  'arrayNumbers',
  'arrayStrings',
];

export const FAKER_FUNCTION: any = {
  'image.imageUrl': () => faker.image.imageUrl(),
  'address.street': () => faker.address.streetAddress(),
  'address.city': () => faker.address.city(),
  'address.zipCode': () => faker.address.zipCode(),
  'address.state': () => faker.address.state(),
  'address.country': () => faker.address.country(),
  'address.full': () =>
    `${faker.address.streetAddress()} ${faker.address.city()} ${faker.address.country()}`,
  'commerce.productName': () => faker.commerce.productName(),
  'commerce.color': () => faker.commerce.color(),
  'date.past': () => faker.date.past(),
  'date.future': () => faker.date.future(),
  'internet.email': () => faker.internet.email(),
  'internet.userName': () => faker.internet.userName(),
  'name.firstName': () => faker.name.firstName(),
  'name.lastName': () => faker.name.lastName(),
  'name.jobTitle': () => faker.name.jobTitle(),
  'name.fullName': () => `${faker.name.firstName()} ${faker.name.lastName()}`,
  'random.uuid': () => faker.random.uuid(),
  'random.number': () => faker.random.number(),
  'random.words': () => faker.random.words(),
  'random.word': () => faker.random.word(),
  'lorem.sentence': () => faker.lorem.sentence(),
  'lorem.paragraph': () => faker.lorem.paragraph(),
  'random.alphanumeric': () => faker.random.alphaNumeric(),
  'commerce.price': () => faker.commerce.price(),
  'company.companyName': () => faker.company.companyName(),
  'finance.accountName': () => faker.finance.accountName(),
  'address.latitude': () => faker.address.latitude(),
  'address.longitude': () => faker.address.longitude(),
  'phone.phontNumber': () => '+639095515432',
};

export const VALID_DATATYPES = Object.keys(FAKER_FUNCTION);
