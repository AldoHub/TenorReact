import logger from "redux-logger";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux"; //------------ redux
import Reducers from "../reducers/reducers"; //---------- add the reducers



//--- MIDDLEWARE
// add middleware inside this function
const middleware= applyMiddleware(logger, thunk);


//--- STORE
const store= createStore(Reducers, middleware);

export default store;


/*
*   All redux functionallity lives here
    just need to import this file to the main component
*/