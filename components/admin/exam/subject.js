import { useState } from "react"

const Subject = (props) => {
    const [id, setId] = useState('');
    const [subject, setSubject] = useState('');
    const [maxMark, setMaxMark] = useState('');
    const [passMark, setPassMark] = useState('');

    const addSubjectValue = (param) => {
        setId(param.target.id);
        switch (param.target.name) {
            case 'subject': setSubject(param.target.value); break;
            case 'maxMark': setMaxMark(param.target.value); break;
            case 'passMark': setPassMark(param.target.value); break;
        }
    }

    const onClickHandler = () => {
        if (subject || maxMark || passMark) {
            const subjct = {
                id:'',
                subject:'',
                maxMark:'',
                passMark:''
            };
            subjct.id = id;
            subjct.subject = subject;
            subjct.maxMark = maxMark;
            subjct.passMark = passMark;
            console.log(subjct);
            props.submit(subjct)
        }
    }
    const loadValue = (id, index) => {
        console.log(id);
        console.log(props.values);
        var val;
        if(!props.values)
        return "";
        props.values.forEach(s => {
            if (s.id == id) {
                switch (index) {
                    case 0: val = s.subject; break;
                    case 1: val = s.maxMark; break;
                    case 2: val = s.passMark; break;
                }
            }
        });
        return val;
    }



    return (<>
        <tr>
            {props.fields.map((element, index) =>
                <td><input type="text" autoComplete="off" className="form-control" defaultValue={loadValue(props.id, index)} id={props.id} name={element} placeholder={element} onChange={(e) => addSubjectValue(e)} /></td>
            )}
            <td>
                <button onClick={onClickHandler} className="btn">Add Subject</button>
                <button onClick={props.click} className="btn">Add More Subject</button>
            </td>
        </tr>
    </>)
}

export default Subject