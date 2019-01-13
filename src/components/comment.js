import React from 'react'

const Comment = ({ user, text }) => (
  <div>
    <h4>{user}</h4>
    <p>{text}</p>
  </div>
)
export default Comment
