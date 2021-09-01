import * as React from 'react';

const Index = (props) => {
  const { number } = props;
  return <h3>{number}</h3>
}

const ChildrenMemo = React.memo(Index, (pre, next) => {
  console.log(pre, next)
  return pre !== next;
})

const Parent = () => {
  const [age, setAge] = React.useState(18);
  const [number, setNumber] = React.useState(1);
  return (
    <div style={{ border: "1px solid gray", padding: "20px" }}>
      <h3>React.memo</h3>
      <p>{age}</p>
      <button onClick={() => {
        setAge((pre) => pre + 1);
        setNumber((pre) => pre - 1);
      }}>age++</button>
      <ChildrenMemo number={number} />
    </div>
  )
};

export default Parent;