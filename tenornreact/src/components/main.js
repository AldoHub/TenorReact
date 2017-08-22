import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {fetchTrending} from "../actions/getTrending";

class Main extends Component{
componentDidMount=()=>{
     this.props.fetchTrending();
}

    render(){
        return(
          
              <div className="main">
               
                <div id="trending">
                  <p className="title">Trending</p>
                    <div className="results">{this.props.gifs.map((d)=>{
                      
                        return(
                                <div className="result" key={d.id}>
                                    <p className="shares">{d.shares}</p>
                                    <a target="_blank" href={d.itemurl}>
                                        <img className="imgs" src={d.itemurl + ".gif"} title={d.title} alt={d.title} />
                                    </a>
                                    <div className="content">
                                       <p id={d.id} className="share">share</p>
                                    </div>
                                </div>
                            );
                      })}
                    </div>    
                </div>     
              </div>  

        );

    }
}

function mapStateToProps(state){
    return{
       gifs: state.main.gifs
    }
}


function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchTrending:fetchTrending}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Main);