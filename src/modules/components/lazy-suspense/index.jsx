import * as React from 'react';
import Test from './Test';
import { Spin } from 'antd';

const LazyComponent = React.lazy(() => new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      default: () => <Test />
    })
  }, 2000)
}));

class Index extends React.Component {
  render() {
    return (
      <div style={{ border: "1px solid gray", padding: "20px", marginTop: "30px" }}>
        <h3>React.lazy and Reac</h3>
        <React.Suspense fallback={<Spin />}>
          <LazyComponent />
        </React.Suspense>
      </div>
    )
  }
}

export default Index
