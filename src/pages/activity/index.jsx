import React, { Component } from 'react';
import Axois from 'axios';
import Api from '../../service/api';
import { Button } from 'antd-mobile';
import styles from './index.less';

class RankList extends Component {
    constructor(props) {
        super(props);
    }

    getData() {
        Axois.get(Api.getRanking, {
            params: {
                page: this.page, size: 10
            }
        })
        .then(res => {
            const data = res.data.data.records;
            if(data.length>0) {
                this.setState({
                    rankData: {
                        isfinish: false,
                        rankList: this.state.rankData.rankList.concat(res.data.data.records)
                    }
                });
            }else{
                this.setState({
                    rankData: {
                        isfinish: true,
                        rankList: this.state.rankData.rankList.concat(res.data.data.records)
                    }
                });
            }
        }).catch(() => {
            this.setState({
                rankData: {
                    isfinish: true,
                    rankList: []
                }
            });
        });
    } 

    render() {
        return (<div>
                <a className='style_a' onClick={ () => {
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
                }> 使用函数跳转到other页面 </a>
                    <Button onClick={this.getData.bind(this)}>
                        调用函数
                    </Button>
            </div>
        );
    }
}

export default RankList;