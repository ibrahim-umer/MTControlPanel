const TbInput = props=>{
    return(
        <div class="form-group ">
            <label for={props.name}>{props.Name}:</label>
            <input  type={props.type} class="form-control" onChange={props.DataInputHandler} name={props.Name}/>
        </div>
    );
}

export default TbInput;