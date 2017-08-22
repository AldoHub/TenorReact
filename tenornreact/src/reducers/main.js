//mainReducer
//this is just the action that will be called
const mainReducer=(state={
gifs:[]
}, action)=>{
    if(action.type === "FETCH_TRENDING_GIFS"){
        
        state= {...state, gifs: action.payload}
    }

    return state;
};
export default mainReducer;