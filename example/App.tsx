import * as React from 'react';
import { useApiLoading } from 'react-reqq';
import simulate, { schemaTypes, dataTypes } from '../src';

const TEST_FOO = 'TEST_FOO';

function App(): JSX.Element {
  const isLoading = useApiLoading(TEST_FOO, 'get');
  const isLoadingPost = useApiLoading(TEST_FOO, 'post');
  const isLoadingPut = useApiLoading(TEST_FOO, 'put');
  const isLoadingRemove = useApiLoading(TEST_FOO, 'remove');

  React.useEffect(() => {
    simulate.get({
      key: TEST_FOO,
      params: {
        page: 5,
      },
      schema: schemaTypes.arrayObjects({
        uuid: dataTypes.uuid(),
        first_name: dataTypes.firstName(),
        middle_name: dataTypes.lastName(),
        last_name: dataTypes.lastName(),
        profile_photo_url: dataTypes.uuid(),
        contact_number: dataTypes.contactNumber(),
        longitude: dataTypes.longitude(),
        latitude: dataTypes.latitude(),
        email: dataTypes.email(),
        created_at: dataTypes.dateFuture(),
      }),
      onSuccess: res => {
        console.log(res);
      },
      recordCount: 10,
    });

    simulate.post({
      key: TEST_FOO,
      returnKey: 'id',
      duration: 3000,
      payload: {
        test: 1,
      },
      returnData: schemaTypes.shape({
        supot: 1,
      }),
      onSuccess: res => {
        console.log(res);
      },
    });

    simulate.put({
      key: TEST_FOO,
      duration: 4000,
      payload: {
        test: 1,
      },
      returnData: schemaTypes.shape({
        supot: 1,
      }),
      onSuccess: res => {
        console.log(res);
      },
    });

    simulate.remove({
      key: TEST_FOO,
      duration: 5000,
      onSuccess: res => {
        console.log(res);
      },
    });
  }, []);
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      Tailwind-ts-setup
      {isLoading ? 'loading' : 'not loading'}
      {isLoadingPost ? 'loading' : 'not loading'}
      {isLoadingPut ? 'loading' : 'not loading'}
      {isLoadingRemove ? 'loading' : 'not loading'}
    </div>
  );
}

export default App;
