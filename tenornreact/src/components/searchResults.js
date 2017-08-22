import React, { Component } from 'react';
import {connect} from "react-redux";
import LazyLoad from 'react-lazyload';
import $ from "jquery";



class SearchResults extends Component {
  componentDidMount=()=>{
    $("body").on("click", ".share", (e)=>{
        let $this = $(e.target);   
        let $gifId= $this.attr("id");
        
        $.ajax({
            url: "https://api.tenor.com/v1/registershare?id="+ $gifId +"&key=LIVDSRZULELA",  
            method: "POST", 
            
          }).then((response)=>{
              alert("Your share has been registered, server responded with status: " + response.status);
          });

        
    });

  }

    render(){
        return(
            <div ref="img" className="searchResults toggle">
                <p className="toggleMessage">Show/Hide results</p>
                <div className="results">
                {this.props.searchResults.map((s)=>{
                    return( 
                        <LazyLoad key={s.id} height={300}>
                              <div className="result" key={s.id}>
                                    <p className="shares">{s.shares}</p>
                                    <a target="_blank" href={s.itemurl} ><img className="imgs" src={s.itemurl + ".gif"} title={s.title} alt={s.title} /></a>
                                   <div className="content" >
                                       <p id={s.id} className="share">share</p>
                                   </div>
                                </div>
                        </LazyLoad>        
                    );          
                })}
                </div>
            </div>

        );
    }

}

function mapStateToProps(state){
    return{
       searchResults: state.search.searchResults
    }
}


export default connect(mapStateToProps)(SearchResults);