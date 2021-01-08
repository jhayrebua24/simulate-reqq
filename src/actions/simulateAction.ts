import { req } from 'react-reqq';
import {
  Params,
  Simulate,
  IGet,
  IArrayObjects,
  ISuccessData,
  IPost,
  IPut,
  ISchemaObject,
} from '../interface';
import {
  ARRAY_SCHEMA_TYPES,
  FAKER_FUNCTION,
  VALID_DATATYPES,
} from '../utils/constants';

const getReturnObject = (data: IArrayObjects): IArrayObjects => {
  const dataKeys = Object.keys(data || {});
  const returnObject = <IArrayObjects>{};

  dataKeys.forEach((key: string) => {
    if (VALID_DATATYPES.includes(data[key])) {
      returnObject[key] = FAKER_FUNCTION[data[key]]();
    } else {
      if (typeof data[key] === 'object') {
        returnObject[key] = formatReturnData(data[key]?.count || 1, data[key]);
        return;
      }
      if (typeof data[key] === 'string' || typeof data[key] === 'number') {
        returnObject[key] = data[key];
        return;
      }
      returnObject[key] = FAKER_FUNCTION['lorem.sentence']();
    }
  });

  return returnObject;
};

const formatReturnData = (
  recordCount: number,
  schema: ISchemaObject
): string[] | number[] | IArrayObjects[] | IArrayObjects => {
  const { type, data } = schema;
  if (type === 'object') {
    return getReturnObject(data || {});
  }
  if (type === 'random') {
    const arr = Array.isArray(data) ? data : [];
    return arr[Math.floor(Math.random() * arr.length)];
  }

  if (ARRAY_SCHEMA_TYPES.includes(type)) {
    return [...Array(recordCount)].map(() => {
      if (type === 'arrayObjects') return getReturnObject(data || {});
      if (type === 'arrayStrings') return FAKER_FUNCTION['lorem.sentence']();

      return FAKER_FUNCTION['random.number']();
    });
  }

  return {};
};

const get = async ({ recordCount = 10, ...opt }: IGet): Promise<void> => {
  const { schema, duration, onSuccess, key = '', params = { page: 1 } } = opt;
  const returnData: ISuccessData = {
    data: {},
  };
  req.set(`LOADING/get/${key}`, true);
  if (ARRAY_SCHEMA_TYPES.includes(schema.type)) {
    returnData.meta = {
      totalPage: 10,
      totalRecord: recordCount * 10,
      currentPage: params.page,
    };
  }
  returnData.data = formatReturnData(recordCount, schema);
  await new Promise(res => {
    setTimeout(() => {
      res('');
    }, duration || 1000);
  });
  req.set(`LOADING/get/${key}`, '');
  onSuccess(returnData);
};

const post = async ({
  key = '',
  onSuccess,
  duration = 1000,
  returnKey = 'uuid',
  returnData,
  payload = {},
}: IPost): Promise<void> => {
  req.set(`LOADING/post/${key}`, true);
  const data = returnData ? getReturnObject(returnData?.data || {}) : {};
  await new Promise(res => {
    setTimeout(() => {
      res('');
    }, duration);
  });
  req.set(`LOADING/post/${key}`, '');

  onSuccess({
    data: {
      [returnKey]: FAKER_FUNCTION['random.uuid'](),
      ...payload,
      ...data,
    },
    message: 'Record Added',
  });
};

const put = async ({
  key = '',
  onSuccess,
  duration = 1000,
  returnData,
  payload = {},
}: IPut): Promise<void> => {
  req.set(`LOADING/put/${key}`, true);
  const data = returnData ? getReturnObject(returnData?.data || {}) : {};
  await new Promise(res => {
    setTimeout(() => {
      res('');
    }, duration);
  });
  req.set(`LOADING/put/${key}`, '');

  onSuccess({
    data: {
      ...payload,
      ...data,
    },
    message: 'Record Updated',
  });
};

const remove = async ({
  key = '',
  onSuccess,
  duration = 1000,
}: Params): Promise<void> => {
  req.set(`LOADING/remove/${key}`, true);
  await new Promise(res => {
    setTimeout(() => {
      res('');
    }, duration);
  });
  req.set(`LOADING/remove/${key}`, '');
  onSuccess({
    message: 'Record Deleted',
  });
};

export default <Simulate>{ get, put, post, remove };
