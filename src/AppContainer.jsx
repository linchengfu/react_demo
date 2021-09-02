import * as React from 'react';
import PureComponent from './modules/components/PureComponent';
import Memo from './modules/components/Memo';
import ForwardRef from './modules/components/forwardRef';
import Lazy from './modules/components/lazy-suspense';
import CloneElement from './modules/tools/cloneElement';
import Children from './modules/tools/Children';
import UserReducer from './modules/react-hooks/useReducer';
import ClassRef from "./modules/ref/ClassRef";
import FunctionRef from "./modules/ref/FunRef";
import UseImperativeHandle from "./modules/react-hooks/useImperativeHandle"

const Container = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", border: "1px solid black" }}>
      <PureComponent />
      <Memo />
      <ForwardRef />
      <Lazy />
      <CloneElement />
      <Children />
      <UserReducer />
      <ClassRef />
      <FunctionRef />
      <UseImperativeHandle />
    </div>
  )
}
export default Container;
