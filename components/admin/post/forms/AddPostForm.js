import React, { useState } from 'react'
import './AddPostForm.css'
import { useNavigate } from 'react-router-dom';

const AddPostForm = props => {
    const navigate =  useNavigate();
	const initialFormState = {
		advtNo: '',
		board: '',
		title: '',
		totalSeats: 0,
		startDate: '',
		qualifications: [],
		minAge: 0,
		maxAge: 0,
		description: '',
		minPay: 0,
		maxPay: 0,
	};
	const allQualifications = ['8th', '9th', '10th', '11th', '12th', 'Diploma', 'B.Sc', 'B.A', 'B.Com', 'Graduation', 'M.Sc', 'M.A', 'M.Com', 'B.Tech', 'M.Tech', 'B.E.', 'MBBS', 'BMS', 'BBA', 'BBS', 'MBA'];

	const [post, setPost] = useState(initialFormState)
    const [qualifications, setQualifications] = useState([]);
	const handleInputChange = event => {
		const { name, value } = event.target;
		setPost({ ...post, [name]: value })
	}

	const qualifHandler = (event) => {
		const { value } = event.target;
		var isExist = false;
		for (var i in qualifications) {
			if (qualifications[i] === value) {
				isExist = true;
				qualifications.splice(i, 1)
				break;
			}
		}
		if (!isExist)
			setQualifications([...qualifications, value])
	}

	const onSubmitHandler = () => {
		props.addPost(post)
		setPost(initialFormState)
	}

	const onSaveHandler = () => {
		//	var postKeyWords = keywords.map(k => ({ examKeyword: { id: k } }));
		var qlfs = qualifications.map(q => ({ degree: q }));
		setPost({ ...post, qualifications: [...qlfs]})
	}
	return (
		<div className='form_container'>
			<form
				onSubmit={event => {
					event.preventDefault()
				}}
			>
				<div className="form-group">
					<label htmlFor='postTitle'>Post Title : </label>
					<input type="text" size='80' name="title" id='postTitle' className='form-control' placeholder='e.g. ONLINE APPLICATION FOR JHARKHAND DIPLOMA COMBINED LEVEL COMPETITIVE EXAMINATION' value={post.title} onChange={handleInputChange} />
				</div>
				<div className='form-group'>
					<label htmlFor='advertiseNo'>Advertise No. : </label>
					<input type="text" size='30' name="advtNo" id='advertiseNo' className='form-control' placeholder='01/2022' value={post.advtNo} onChange={handleInputChange} />
				</div>
				<div className='form-group'>
					<label htmlFor='jobBoard'>Job Board : </label>
					<input type="text" size='40' name="board" id='jobBoard' className='form-control' placeholder='e.g.SSC' value={post.board} onChange={handleInputChange} />
				</div>
				<div className='form-group'>
					<label htmlFor='totalSeats'>Total Seats : </label>
					<input type="text" size='20' name="totalSeats" id='totalSeats' className='form-control' placeholder='20' value={post.totalSeats} onChange={handleInputChange} />
				</div>
				<div className='form-group'>
					<label htmlFor='startDate'>Start Date : </label>
					<input type="text" size='20' name="startDate" id='startDate' className='form-control' placeholder='dd/MM/yyyy' value={post.startDate} onChange={handleInputChange} />
				</div>
				<div className='form-group'>
					<label htmlFor='minAge'>Min Age : </label>
					<input type="number" size='50' name="minAge" id='minAge' className='form-control' placeholder='20' value={post.minAge} onChange={handleInputChange} />
				</div>
				<div className='form-group'>
					<label htmlFor='maxAge'>Max Age : </label>
					<input type="number" size='50' name="maxAge" id='maxAge' className='form-control' placeholder='35' value={post.maxAge} onChange={handleInputChange} />
				</div>
				<div className='form-group'>
					<label htmlFor='minPay'>Min Pay : </label>
					<input type="number" size='50' name="minPay" className='form-control' placeholder='25000' value={post.minPay} onChange={handleInputChange} />
				</div>
				<div className='form-group'>
					<label htmlFor='maxPay'>Max Pay : </label>
					<input type="number" size='50' name="maxPay" className='form-control' placeholder='115000' value={post.maxPay} onChange={handleInputChange} />
				</div>
				<div className='form-group'>
					<label htmlFor='description'>Description : </label>
					<textarea rows="4" cols="50" name="description" className='form-control' value={post.description} onChange={handleInputChange} />
				</div>
				<div>
					<label>Qualifications : </label>
					<div>
						{allQualifications.map(q => <>
							<input type="checkbox" value={q} onClick={qualifHandler}></input>
							<label>&nbsp;{q}</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						</>
						)}
					</div>
				</div>
				<div className='form_buttons'>
					<button type='submit' className='btn btn-primary' onClick={onSaveHandler}>Save Post</button>
					<button type='submit' className='btn btn-primary' onClick={onSubmitHandler}>Submit Post</button>
					<button type='submit' className='btn btn-primary' onClick={()=>navigate(`/posts`)}>View Posts</button>
				</div>
			</form>
		</div>
	)
}

export default AddPostForm
