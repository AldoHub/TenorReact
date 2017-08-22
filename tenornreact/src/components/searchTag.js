import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {fetchGifsByTags} from "../actions/searchTagsAction";


class SearchTag extends Component{
  
    render(){
        return(
            <div className="search">
                <p id="searchSection" className="title">Get suggesstions </p>
                <div className="searchBox">
                   <input onKeyUp={()=>this.props.fetchGifsByTags()} type="search" id="searchTags" placeholder="get suggesstions" />
                </div>  
            
            </div>


        );

    }
}

// this function maps the action 
function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchGifsByTags:fetchGifsByTags}, dispatch);
}

//if there are no properties to bind
// just add an empty string
//because connect expects the first param to be "mapStateToProps"
//then expects the "matchDispatchToProps"
export default connect( "" , matchDispatchToProps)(SearchTag);