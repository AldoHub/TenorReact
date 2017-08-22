//mainReducer
//this is just the action that will be called
const searchTagsReducer=(state={
gifsByTags:[]
}, action)=>{
    if(action.type === "FETCH_GIFS_BY_TAGS"){
        
        state= {...state, gifsByTags: action.payload}
    }

    return state;
};

export default searchTagsReducer;