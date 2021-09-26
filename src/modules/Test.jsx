import * as React from "react";

const Demo = () => {
  React.useEffect(() => {
    console.log("hello");
    return () => {
      console.log("ffff");
    };
  }, []);
  return <div>test???????</div>;
};

export default Demo;
