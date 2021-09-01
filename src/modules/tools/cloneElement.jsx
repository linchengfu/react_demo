import * as React from 'react';

function FatherComponent({ children }) {
  const newChildren = React.cloneElement(children, { age: 18 });
  return <div>
    {newChildren}
  </div>
}

function SonComponent(props) {
  console.log(props);
  return <h1>hello, my son!</h1>
}

class Index extends React.Component {
  render() {
    return (
      <div>
        <FatherComponent>
          <SonComponent name="lin"></SonComponent>
        </FatherComponent>
      </div>
    )
  }
}

export default Index;