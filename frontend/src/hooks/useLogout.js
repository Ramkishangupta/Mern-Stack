import { useAuthContext } from "./useAuthContext";
export const useLogout=()=>{
    const {dispatch} = useAuthContext();
    const logout=()=>{
        //rermove user from local storage
        localStorage.removeItem('user');

        //dispatch logout method 
        dispatch({type:'LOGOUT'});
    }
    return {logout}
}