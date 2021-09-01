import * as React from 'react';

class Text extends React.Component{
    render(){
        return <div>hello,world</div>
    }
}
function WarpComponent(props){
    const newChildren = React.Children.map(props.children, (item) => item);
    const count = React.Children.count(props.children);
    console.log(newChildren, count);
    return newChildren;
}
function Index(){
    return <div style={{ marginTop:'50px' }} >
        <WarpComponent>
            {/* <Text/>
            <Text/>
            <Text/> */}
            { new Array(3).fill(0).map(()=><Text/>) }
            <span>hello,world</span>
        </WarpComponent>
    </div>
}

export default Index;