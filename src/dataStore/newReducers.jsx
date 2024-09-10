const initialState = {
    gender:"",
}

const newReducers =(state = initialState, action)=>{
    switch(action.type){
        case "TEST":
            return{...state, test : action.payload}
        default:
            return state;
    }
};

export default newReducers;