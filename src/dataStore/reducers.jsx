const initialState = {
    myVariable : 0,
    test: false,
}

const myReducers =(state = initialState, action)=>{
    switch(action.type){
        case "INCREMENT":
            return {...state, myVariable: action.payload};
        case "DECREMENT":
            return{...state, myVariable:state.myVariable - 1};
        case "TEST":
            return{...state, test : action.payload}
        default:
            return state;
    }
};

export default myReducers;