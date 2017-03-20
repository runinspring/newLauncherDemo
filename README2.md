# newLauncherDemo
newLauncherDemo

npm install -g create-react-app

create-react-app newLauncherDemo

运行： npm run start
发布：npm run build

antd 安装说明

```
yarn add antd --save
```

修改 src/App.js，引入 antd 的按钮组件。

```
import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
    );
  }
}
export default App;

```

修改 src/App.css，在文件顶部引入 antd/dist/antd.css

```
@import '~antd/dist/antd.css';

.App {
  text-align: center;
}
```
