# react-hmr-decorator
> React hot module reload decorator

## installation
```bash
npm install @jswork/react-hmr-decorator
```

## usage
1. index.js
```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
```

2. app.js
```js
import React from 'react';
import hotable from 'react-hmr-decorator';

@hotable(module)
export default class extends React.Component{
  render(){
    return (
      <div>
        Hello world _42323!
        <input />
      </div>
    )
  }
}
```

3. babelrc
```json
{
  "presets":[
    "env",
    "react"
  ],
  "plugins": [
    "react-hot-loader/babel",
    "transform-decorators-legacy"
  ]
}
```

4. package.json scripts:
```json
"scripts": {
  "dev": "webpack-dev-server --hot"
},
```

## resources
- https://github.com/gaearon/react-hot-loader
- https://github.com/afeiship/webpack-notes
- https://larrylu.blog/react-decorator-hoc-2536db2737cb

