import React from 'react'


const PostTable = props => (
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Board</th>
        <th>Posted Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.posts.length > 0 ? (
        props.posts.map(post => (
          <tr key={post.id}>
            <td>{post.title}</td>
            <td>{post.board}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(post)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deletePost(post.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No post</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default PostTable
