const TrensectionTypeCheckBoxs = (props)=>{
    return <>
            <form >
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input  type="radio" class="form-check-input" name='T-Type' id="receive" onClick={props.t_State} />On Amount Receive
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio"  class="form-check-input" name='T-Type' id="pay" onClick={props.t_State} />On Amount Paid
                    </label>
                </div>
            </form>
        </>
}

export default TrensectionTypeCheckBoxs