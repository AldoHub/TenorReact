import {combineReducers} from "redux";
import MainReducer from "../reducers/main";
import searchReducer from "../reducers/searchReducer";
import searchTagsReducer from "../reducers/searchTagsReducer";

//combine reducers
//remember you need to export the reducers to use them
const reducers= combineReducers({
    //add reducers here
    main:MainReducer,
    search:searchReducer,
    searchTags:searchTagsReducer
});

export default reducers;