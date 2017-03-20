import React, { Component } from 'react';
import Page1 from './Page1';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import './App.css';


class App extends Component {
  state = {
    activeKey: '1',
    panes: [
      { title: '白鹭引擎', content: <Page1 />, key: '1', closable: false },
      { title: '未来增加内容1', content: '未来增加内容1', key: '2', closable: false },
      { title: '未来增加内容2', content: '未来增加内容2', key: '3', closable: false },

    ]
  }
  onChange = (activeKey) => {
    this.setState({ activeKey });
  }
  render() {
    return (
      <div style={{ textAlign: 'center',paddingTop:'8px' }}>
        <div className="app">
          <Tabs
            onChange={this.onChange}
            activeKey={this.state.activeKey}
            animated={false}
            type="editable-card"
            hideAdd={true}
            >
            {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>{pane.content}</TabPane>)}
          </Tabs>
        </div>
      </div>
    );
  }
}

export default App;

/*
render() {
    return (
      <div className="App">
        <Tabs
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          animated = {false}
          type="editable-card"
          hideAdd= {true}
          >
          {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>{pane.content}</TabPane>)}
        </Tabs>
      </div>
    );
  }
  */