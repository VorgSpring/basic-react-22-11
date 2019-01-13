import React, { Component } from 'react'
import Comment from './comment'
import toggleOpen from '../decorators/toggleOpen'

class Comments extends Component {
  render() {
    const { toggleOpenItem, isOpen } = this.props

    return (
      <div>
        <button onClick={toggleOpenItem}>{isOpen ? 'close' : 'open'}</button>
        <ul>{this.comments}</ul>
      </div>
    )
  }

  get comments() {
    const { comments, isOpen } = this.props
    if (!isOpen) return null
    return comments.map(({ user, text, id }) => (
      <li key={id}>
        <Comment user={user} text={text} />
      </li>
    ))
  }
}

export default toggleOpen(Comments)
