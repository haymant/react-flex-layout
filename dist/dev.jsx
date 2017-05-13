import React from 'react'
import ReactDOM from 'react-dom'
import {Layout, LayoutSplitter} from './../lib/index.js'
import domready from 'domready'

class Dev extends React.Component {
  constructor(props) {
    super(props)

    this.state = ({
      width: 100
    })
  }

  render() {
    return <Layout fill='window'>
      <Layout layoutWidth={this.state.width} onChange={(width) => { this.setState({ width }) }}>
        <div style={{height: '500px'}}>Column1</div>
      </Layout>
      <LayoutSplitter />
      <Layout layoutWidth='flex'>
        Column2
        <button onClick={() => this.setState({ width: 100 })}>Resize 100</button>
        <button onClick={() => this.setState({ width: 200 })}>Resize 200</button>
        <button onClick={() => this.setState({ width: 300 })}>Resize 300</button>
      </Layout>
    </Layout>
  }
}

domready(() => {
  var container = document.createElement('div')
  document.body.appendChild(container)
  ReactDOM.render(<Dev />, container)
})
