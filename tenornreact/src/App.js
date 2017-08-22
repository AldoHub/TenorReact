import React, { Component } from 'react';
import Main from "./components/main";
import Search from "./components/search";
import SearchTag from "./components/searchTag";
import SearchResultsTags from "./components/searchResultsTags";
import SeachResults from "./components/searchResults";
import {Provider} from "react-redux";// install react-redux
import store from "./store/store";// store
import $ from "jquery";

import './App.css';


class App extends Component {
 
   
    componentDidMount=()=>{
  
      $("body").on("click", ".toggleMessage", function(e){
        let $this = $(e.target);
        $this.next(".results").toggle();
      });
  
    }
    
 
  render() {
    return (
      <Provider store={ store }>
      <div className="App">

       <SearchTag />
       <SearchResultsTags />     

       <Search/> 
       <SeachResults />

       <Main /> 
      </div>
      </Provider>
    );
  }
}


export default App;
