import * as React from "react";
import PureComponent from "./modules/components/PureComponent";
import Memo from "./modules/components/Memo";
import ForwardRef from "./modules/components/forwardRef";
import Lazy from "./modules/components/lazy-suspense";
import CloneElement from "./modules/tools/cloneElement";
import Children from "./modules/tools/Children";
import UserReducer from "./modules/react-hooks/useReducer";
import ClassRef from "./modules/ref/ClassRef";
import FunctionRef from "./modules/ref/FunRef";
import UseImperativeHandle from "./modules/react-hooks/useImperativeHandle";
import Compose from "./modules/design-mode/Compose";
import Demo from "./modules/Test";
import UseRef from "./modules/ref/UseRef";

const Container = () => {
  const [obj, setObj] = React.useState();
  let arr = [];
  arr.push({ a: 2 });
  let arr2 = [];
  arr2.push({ b: 3 }, { a: 10 });
  console.log(obj);

  const [isShow, setIsShow] = React.useState(true);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid black",
      }}
    >
      {/* <PureComponent />
      <Memo />
      <ForwardRef />
      <Lazy />
      <CloneElement />
      <Children />
      <UserReducer />
      <ClassRef />
      <FunctionRef /> */}
      <UseRef />
      <UseImperativeHandle />
      {isShow ? <Demo /> : null}
      <Compose />
      <div style={{ border: "1px solid black", padding: "20px" }}>
        {/* {obj.map((item) => {
          return (
            <p key={Math.random()} style={{ marginTop: "20px" }}>
              {Object.values(item)}
            </p>
          );
        })} */}
        <button
          onClick={() => {
            setObj(arr);
            setIsShow(false);
          }}
        >
          change
        </button>
        <button
          onClick={() => {
            setObj(arr2);
          }}
        >
          change2
        </button>
      </div>
    </div>
  );
};
export default Container;
