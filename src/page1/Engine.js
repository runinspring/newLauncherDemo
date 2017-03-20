import React, { Component } from 'react';
import { Dropdown, Menu } from 'antd';
export default class Engine extends Component {
    menu = (
        <Menu>
            <Menu.Item>
                <a rel="noopener noreferrer">4.2.1</a>
            </Menu.Item>
            <Menu.Item>
                <a  rel="noopener noreferrer" >4.2.0</a>
            </Menu.Item>
            <Menu.Item>
                <a  >4.1.1</a>
            </Menu.Item>
        </Menu>
    );
    render() {
        return (
            <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 'bold', fontSize: 20 }}>Egret Engine <a  style={{ fontWeight: 'bold', fontSize: 14,color:"rgba(0,0,0,0.65)" }}> 当前使用版本为4.0.3</a></div>
                <div  style={{ fontWeight: 'bold', fontSize: 14 }}>
                <Dropdown overlay={this.menu}>
                    <a className="ant-dropdown-link" href="#">
                        +添加引擎版本
                    </a>
                </Dropdown></div>
                <img alt='' src={require('../assets/p2_1.png')} />
            </div>
        );
    }
}