import React, {  PureComponent } from 'react'
import './Container.css'
export default class Container extends PureComponent {
  render() {
    return (
      <div className={`Main__Container ${this.props.nospacses?'':'Main__Container--padding'}`} >
        {this.props.children}
      </div>
    )
  }
}
