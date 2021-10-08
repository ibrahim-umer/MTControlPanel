const TbInputControl = props=>{
    return(
        <div class="form-group ">
            <label for={props.ctrlName}>{props.Name}:</label>
            <input  type={props.inutType} class="form-control" onChange={props.DataInputHandler} name={props.ctrlName}/>
        </div>
    );
}

export default TbInputControl;