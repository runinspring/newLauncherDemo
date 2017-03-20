import React, { Component } from 'react';
import { Button, Input } from 'antd';
// import { Tabs } from 'antd';
// const TabPane = Tabs.TabPane;


export default class ProjectManager extends Component {
    state = {
        activeKey: '1',
        createType: [
            { id: 0, title: "Egret EUI 项目" },
            { id: 1, title: "Egret 游戏 项目" },
            { id: 2, title: "InstantGame 项目" },
            { id: 3, title: "TypeScript 项目" }
        ],
        createTitle: 'Egret EUI 项目'
    }
    list = [
        { name: '项目14', path: '/Users/user/egretWork/testing/TestDemo/项目14' },
        { name: '项目23', path: '/Users/user/egretWork/testing/TestDemo/项目23' },
        { name: '项目76', path: '/Users/user/egretWork/testing/TestDemo/项目76' },
    ]
    onChange(id) {
        // console.log(111,id);
        // var obj = {  };

        this.setState({activeKey: id});
    }

    projectList() {
        return (
            <div >
                <div className='left'>
                    <div style={{ marginBottom: "10px" }}>
                        <Button style={{ width: '150px' }}>
                            <div className='projectName'>打开项目</div>
                        </Button>
                    </div>
                    <div>
                        <Button style={{ width: '150px' }} onClick={this.onChange.bind(this, '2')}>
                            <div className='projectName' >创建新项目</div>
                        </Button>
                    </div>
                </div>
                <div className='right'>
                    {this.list.map((item, index) => {
                        return <div key={'his' + index} style={{ marginBottom: "4px" }}><Button style={{ textAlign: 'left' }}>
                            <div className='projectName'>{item.name}</div>
                            <div className='projectDir'>{item.path}</div>
                        </Button></div>
                    })}
                </div>
            </div>
        );
    }
    onChangeCreate(id) {
        // console.log(id, this.state.createType[id].title)
        // var obj = {  };
        // console.log(obj)
        this.setState({createTitle: this.state.createType[id].title});
        console.log('this.state',this.state)
    }
    newProject() {
        console.log('this.state.createTitle:',this.state.createTitle)
        return (<div>
            <div className='newProjectLeft'>
                {this.state.createType.map((item, index) => {
                    return <div key={'create' + index} style={{ marginBottom: 4 }}>
                        <Button style={{ width: 120 }} onClick={this.onChangeCreate.bind(this, item.id)}>
                            {item.title}
                        </Button>
                    </div>
                })}
            </div>
            <div className='newProjectRight'>
                <div className='projectName'>{this.state.createTitle}</div>
                <div>项目名称<Input placeholder="项目名称" /></div>
                <div>项目路径<Input placeholder="项目路径" /></div>

                <div style={{ marginTop: 100 }}>
                    <Button type="primary" style={{ marginRight: 10 }} onClick={this.onChange.bind(this, '1')}>取消</Button>
                    <Button type="primary" onClick={this.onChange.bind(this, '1')}>创建项目</Button>
                </div>
            </div>
        </div>)
    }
    render() {
        var getPage = ()=> {
            if (this.state.activeKey === '1') {
                return this.projectList()
            } else {
                return this.newProject()
            }
        }
        return (
            <div>
                {getPage()}
            </div>
        )

    }

}