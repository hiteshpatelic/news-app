export const setAuth = (user)=>{
    return{
        type : 'ADD_AUTH_TOKEN',
        payload :user.data
    }
};