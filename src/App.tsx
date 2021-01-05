import * as R from "react";
import simulate, { schemaTypes, dataTypes } from "simulate-reqq";

function App(): JSX.Element {
  R.useEffect(() => {
    simulate.get({
      key: "foo",
      schema: schemaTypes.arrayObjects({
        uuid: dataTypes.uuid(),
        description: dataTypes.sentence(),
        price: dataTypes.number(),
      }),
      onSuccess: (res) => {
        console.log(res);
      },
      recordCount: 10,
    });
  });
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      Tailwind-ts-setup
    </div>
  );
}

export default App;
