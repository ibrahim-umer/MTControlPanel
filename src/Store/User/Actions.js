import * as ActionTypes from "./ActionTypes"

export const  Sign_User = (user) =>{
    console.log("we are in dispatch Action")
    return{
        type: ActionTypes.SIGNIN_USER,
        payload: user
    }
}
export const  Signout_User = () =>{
    return{
        type: ActionTypes.SIGNOUT_USER,
    }
}
