import { useState } from "react"
const UpdateQuestion = (props) =>{
 
    return(<>
       <>
       <div className="row">
            <div className="col-12">
       <div className="form-group">
                    <label htmlFor="passage">Passage</label>

       </div>
       <div className="form-group">
            <label htmlFor="question">Question</label>
            <input type="text" name="question" defaultValue={props.question} className="form-control" id="question"/>
        </div>
        <div className="form-group">
            <label htmlFor="optionA">Option A</label>
            <input type="text" name="optionA" defaultValue={props.optionA} className="form-control" id="optionA"/>
        </div>
        <div className="form-group">
            <label htmlFor="optionB">Option B</label>
            <input type="text" name="optionB" defaultValue={props.optionB} className="form-control" id="optionB"/>
        </div>
        <div className="form-group">
            <label htmlFor="optionC">Option C</label>
            <input type="text" name="optionC" defaultValue={props.optionC} className="form-control" id="optionC"/>
        </div>
        <div className="form-group">
            <label htmlFor="optionD">Option D</label>
            <input type="text" name="optionD" defaultValue={props.optionD} className="form-control" id="optionD"/>
        </div>
        <div className="form-group">
            <label htmlFor="optionE">Option E</label>
            <input type="text" name="optionE" defaultValue={props.optionE} className="form-control" id="optionE"/>
        </div>
        <button className="btn btn-primary"> Update</button>
        </div>
        </div>
        </>
    </>)
}

export default UpdateQuestion