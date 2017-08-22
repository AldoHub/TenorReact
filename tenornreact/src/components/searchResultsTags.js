import React, { Component } from 'react';
import { connect } from "react-redux";
import $ from "jquery";

class SearchResultsTags extends Component{
    componentDidMount=()=>{
        $("body").on("click", ".resultTags", (e)=>{
           let $this = $(e.target);
           let $value= $this.text();
           
           $("#search").focus();
           $("#search").val($value);

        });
                
    }
        
   
    render(){
        return(
               <div ref="img" className="searchResults toggle">
                <div className="results">
                    {this.props.searchTagsResults.map((s)=>{
                    return( 
                       
                              <div className="resultTags" key={s}>
                                {s}
                              </div>
                         
                    );          
                })}
                </div>
            </div>


        );

    }
}
function mapStateToProps(state){
    return{
       searchTagsResults: state.searchTags.gifsByTags
    }
}

export default connect(mapStateToProps)(SearchResultsTags);

