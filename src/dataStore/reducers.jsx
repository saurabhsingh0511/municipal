const initialState = {
    isClosed: false,
}

const myReducers =(state = initialState, action)=>{
    switch(action.type){
        case "TOGGLESIDEBAR":
            return{...state, isClosed : action.payload}
        default:
            return state;
    }
};

export default myReducers;