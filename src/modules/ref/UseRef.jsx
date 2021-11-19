import * as React from "react";

const Widgets = () => {
  const [str, setStr] = React.useState("str");
  const ref = React.useRef("initial");
  React.useEffect(() => {
    setTimeout(() => {
      ref.current = "i am ref";
      console.log("5000");
    }, 5000);
    return () => {
      // cleanup
    };
  }, []);
  const add = () => {
    setStr(ref.current);
  };

  const changeRef = () => {
    ref.current = "changeRef";
  };
  return (
    <div>
      <p>{str}</p>
      <button onClick={add}>click</button>
      <button onClick={changeRef}>changeRef</button>
    </div>
  );
};

export default Widgets;
