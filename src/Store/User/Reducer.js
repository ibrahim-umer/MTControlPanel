import Cookies from 'universal-cookie';
import * as ActionTypes from "./ActionTypes"

const initState = {
    loggedinUser: {
        email: "",
        displayName: "",
        pictureURL: "",
        loggedinStatus: false
    },
};


const userReducer=(state = initState,action)=>{
    const cookies = new Cookies();
    const storedCookie = cookies.get('user');
    if(storedCookie)
        if(storedCookie.loggedinStatus)
            return {
                ...state,
                loggedinUser: cookies.get('user')
            };
    cookies.set('user', state.loggedinUser , { path: '/' });
    switch(action.type){
        case ActionTypes.SIGNIN_USER:
            console.log(action)
            cookies.set('user', action.payload , { path: '/' });
            return{
                ...state,
                loggedinUser: action.payload
            }
        case ActionTypes.SIGNOUT_USER:
            const SetEmptyUser = {
                loggedinUser: {
                    email: "",
                    displayName: "",
                    pictureURL: "",
                    loggedinStatus: false
                }
            }
            cookies.set('user', SetEmptyUser.loggedinUser  , { path: '/' });
                return{
                    ...state,
                    loggedinUser: SetEmptyUser.loggedinUser
                }
        default: return state
    }
}

export default userReducer;