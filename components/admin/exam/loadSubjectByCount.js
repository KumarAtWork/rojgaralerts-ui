import Subject from "./subject"

const LoadSubjectByCount = (props)=>{
console.log('In LoadSubjectByCount:'+props.count)
    return(<>
    {
        [...Array(parseInt(props.count))].map((s,index)=><Subject values={props.values} id={index} fields={props.fields} click={props.addMoreClick} submit={(s)=>props.submitHandler(s)}/>)
    }
    </>)
}

export default LoadSubjectByCount