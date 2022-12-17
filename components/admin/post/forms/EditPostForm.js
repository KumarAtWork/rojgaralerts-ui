import React, { useState, useEffect } from 'react'

const EditPostForm = props => {
  const [ post, setPost ] = useState(props.currentPost)

  useEffect(
    () => {
      setPost(props.currentPost)
    },
    [ props ]
  )
  
  const handleInputChange = event => {
    const { name, value } = event.target

    setPost({ ...post, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        props.updateUser(post.id, post)
      }}
    >
      <label>Title</label>
      <input type="text" name="title" value={post.title} onChange={handleInputChange} />
      <label>Board</label>
      <input type="text" name="board" value={post.board} onChange={handleInputChange} />
      <button>Update Post</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditPostForm
