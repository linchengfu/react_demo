import * as React from "react";
import { isValidElement } from "react";

function Groups(props) {
  console.log(props);
  const newChildren = [];
  React.Children.forEach(props.children, (item) => {
    console.log(item);
    const { type, props } = item || {};
    if (isValidElement(item) && type === Item && props.isShow) {
      newChildren.push(item);
    }
  });

  return newChildren;
}

function Item(props) {
  return <div>名称：{props.name}</div>;
}

const Compose = () => {
  return (
    <Groups>
      <Item isShow name="lin" />
      <Item isShow={false} name="cheng" />
      <Item isShow name="fu" />
    </Groups>
  );
};

export default Compose;
