export const goBack= (props)=>{
    return <button className='btn btn-primary' onClick={()=>props.goBack()} style={{position: 'absolute', top: '80px'}} >
    <i  class={"fa fa-backward mr-1"} aria-hidden="true"></i>Go Back
    </button>
}
