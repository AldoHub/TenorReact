const searchReducer=(state={
searchResults:[]
}, action)=>{
    if(action.type === "SEARCH_GIFS"){
        
        state= {...state, searchResults: action.payload}
    }

    return state;
};
export default searchReducer;