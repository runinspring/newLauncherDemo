import React, { Component } from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import Engine from './page1/Engine';
import ProgectManager from './page1/ProgectManager';
// import Resource from './page1/Resource';
export default class  Page1 extends Component {
    state = {
        current: '1',
    }
    handleClick = (e) => {
        // console.log('click ', e,e.key);
        this.setState({
            current: e,
        });
    }
    render() {
        console.log('this.state.current:',this.state.current)
        return (
            <div >
                <Tabs onChange={this.handleClick} activeKey={this.state.current} tabPosition='left' type='line' size='small' tabBarStyle={{marginLeft:'-22px',width:'80px'}}>
                    <TabPane tab="项目管理" key="1"><ProgectManager/></TabPane>
                    <TabPane tab="引擎版本" key="2"><Engine/></TabPane>
                    <TabPane tab="工具管理" key="3"><img alt='' src={require('./assets/p1.png')} /></TabPane>
                    <TabPane tab="资源链接" key="4"><img alt='' src={require('./assets/p3.png')} /></TabPane>
                    <TabPane tab="论坛社区" key="10">社区，显示一个网页</TabPane>
                    <TabPane tab="学习中心" key="11">教程中心，显示一个网页</TabPane>
                    <TabPane tab="白鹭商城" key="12">商城，显示一个网页</TabPane>  
                </Tabs>
            </div>
        );
    }
}
