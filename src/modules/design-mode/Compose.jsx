import * as React from "react";
import { isValidElement } from "react";

let count = [];
function add() {
  count.push(1);
}
console.log("outside", count);
function Groups(props) {
  const newChildren = [];
  React.Children.forEach(props.children, (item) => {
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
  const [param, setParam] = React.useState(0);
  console.log("inner", count);
  return (
    <>
      <Groups>
        <Item isShow name="lin" />
        <Item isShow={false} name="cheng" />
        <Item isShow name="fu" />
      </Groups>
      <div>
        {count.map((item) => (
          <p>{item}</p>
        ))}
      </div>
      <h1>{param}</h1>
      <button
        onClick={() => {
          add();
        }}
      >
        ++
      </button>
      <button
        onClick={() => {
          setParam(Math.random());
        }}
      >
        change
      </button>
    </>
  );
};

export default Compose;
