const initialState = {
    isClosed: true,
    isLogin: true,
}

const myReducers =(state = initialState, action)=>{
    switch(action.type){
        case "TOGGLESIDEBAR":
            return{...state, isClosed : action.payload}
         case "ISLOGIN":
            return{...state, isLogin : action.payload}
        default:
            return state;
    }
};

export default myReducers;