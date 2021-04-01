import React, { Component } from 'react';
import Axois from 'axios';
import Api from '../../service/api';

class RankList extends Component {
    constructor(props) {
        super(props);
    }

    getData() {
        Axois.get(Api.getRanking, {
            params: {
                page: 1, size: 10
            }
        })
        .then()
        .catch();
    } 

    render() {
        return (<div>
                <button onClick={ () => {
                    this.props.history.push({
                        pathname: '/other'
                    });

                    //在可能会出现死循环的地方使用replace来跳转
                    // this.props.history.replace('/other');
                    // this.props.history.replace({
                    //     pathname:'/other',
                    //     state : {
                    //         id:4
                    //     }
                    // });

                    //返回上级页面
                    // this.props.history.goBack();
                    }
                }> 使用函数跳转到other页面 </button>
                    <button onClick={this.getData.bind(this)}>
                        调用函数
                    </button>
            </div>
        );
    }
}

export default RankList;