import React from 'react';

export default class Other extends React.Component {

    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        //地址栏跳转传参
        // console.log(this.props.match.params);

        //函数跳转传参
        //console.log(this.props.history.location.state);
    }

    render() {
        return (
            <div>
                <a className='style_a' href='/'>回到home页面</a>
            </div>
        );
    }
}