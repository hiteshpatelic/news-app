import initialState from "../store/initialState";

const userReducer = ( state = initialState.user, action) =>{
  
    switch (action.type) {
      case 'ADD_AUTH_TOKEN':
        return state = {authToken : action.payload};
      default:
        return state;
    }
  }

  export default userReducer;

