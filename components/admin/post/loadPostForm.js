import React, { useState, Fragment } from 'react'
import AddPostForm from './forms/AddPostForm'
import EditPostForm from './forms/EditPostForm'
import PostTable from './tables/PostTable'
import axios from 'axios'
import { getToken } from '../../store/messageSlice'
import { useSelector } from 'react-redux'
const LoadPostForm = () => {
	// Data
	const postsData = []
	const initialFormState = { id: null, title: '', board: '' }
    const token  = useSelector(getToken)
	// Setting state
	const [ posts, setPosts ] = useState(postsData)
	const [ currentPost, setCurrentPost ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)
    const url = 'https://localhost:8081/posts/post';

	const addPost = post => {
		console.log('Post details:'+JSON.stringify(post));
		setPosts([ ...posts, post ])
		axios.post(url,post,{   headers:{
            'Authorization':token
          }}).then((response)=>console.log('response : '+response)).catch(error=>console.error(error));
	}

	const deletePost = id => {
		setEditing(false)
		setPosts(posts.filter(ur => ur.id !== id))
	}

	const updatePost = (id, updatedPost) => {
		setEditing(false)
		setPosts(posts.map(ur => (ur.id === id ? updatedPost : posts)))
	}

	const editRow = post => {
		setEditing(true)
		setCurrentPost({ id: post.id, title: post.title, board: post.board})
	}

	return (
		<div className="container">
			<div>
				<div>
					{editing ? (
						<Fragment>
							<h2>Edit Job Post</h2>
							<EditPostForm
								editing={editing}
								setEditing={setEditing}
								currentPost={currentPost}
								updatePost={updatePost}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Create Job Post</h2>
							<AddPostForm addPost={addPost} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View Job Posts</h2>
					<PostTable posts={posts} editRow={editRow} deletePost={deletePost} />
				</div>
			</div>
		</div>
	)
}

export default LoadPostForm
