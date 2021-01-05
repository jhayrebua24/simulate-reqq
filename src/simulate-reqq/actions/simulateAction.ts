import { Params, Options, Simulate, IGet, IArrayObjects } from "../interface";
import {
  ARRAY_SCHEMA_TYPES,
  FAKER_FUNCTION,
  VALID_DATATYPES,
} from "../utils/constants";

interface IReturnData {
  data: { [key: string]: any };
  meta?: {
    totalPage: number;
    currentPage: number;
    totalRecord: number;
  };
}

const simulateRequest = async (
  type: string,
  options: Options
): Promise<void> => {
  await new Promise((res) => {
    setTimeout(() => {
      res("");
    }, options.duration || 2000);
  });
  options.onSuccess();
};

const getReturnObject = (
  dataKeys: string[],
  data: IArrayObjects
): IArrayObjects => {
  const returnObject = <IArrayObjects>{};

  dataKeys.forEach((key: string) => {
    returnObject[key] = VALID_DATATYPES.includes(data[key])
      ? FAKER_FUNCTION[data[key]]()
      : FAKER_FUNCTION["lorem.sentence"]();
  });

  return returnObject;
};

const get = async ({ recordCount = 10, ...opt }: IGet): Promise<void> => {
  const {
    schema: { type, data },
    duration,
    onSuccess,
  } = opt;
  const returnData: IReturnData = {
    data: {},
  };
  const keys = Object.keys(data || {});

  if (ARRAY_SCHEMA_TYPES.includes(type)) {
    returnData.meta = {
      totalPage: 10,
      totalRecord: recordCount * 10,
      currentPage: 1,
    };
    returnData.data = [...Array(recordCount)].map(() => {
      if (type === "arrayObjects") return getReturnObject(keys, data || {});
      if (type === "arrayStrings") return FAKER_FUNCTION["lorem.sentence"]();

      return FAKER_FUNCTION["random.number"]();
    });
  } else {
    returnData.data = getReturnObject(keys, data || {});
  }

  await new Promise((res) => {
    setTimeout(() => {
      res("");
    }, duration || 2000);
  });

  onSuccess(returnData);
};

const post = ({ key, onSuccess, duration = 2000 }: Params): Promise<void> =>
  simulateRequest("post", { key, onSuccess, duration });

const put = ({ key, onSuccess, duration = 2000 }: Params): Promise<void> =>
  simulateRequest("put", { key, onSuccess, duration });

const remove = ({ key, onSuccess, duration = 2000 }: Params): Promise<void> =>
  simulateRequest("remove", { key, onSuccess, duration });

export default <Simulate>{ get, put, post, remove };
