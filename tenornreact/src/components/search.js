import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import $ from "jquery";
import {fetchGifs} from "../actions/searchGifs";



class Search extends Component {

    componentDidMount=()=>{
        
        //----------- manages the behavior of the navbar
        //---- RESIZE
            $(window).on("resize", ()=>{
                if(window.innerWidth < 480) {
                    $("#menu").next("UL").slideUp();    
                
                }
                
                if(window.innerWidth > 480) {
                    $("#menu").next("UL").slideDown();    
                }
            });
        //---- LOAD    
            $(window).on("load", ()=>{
                if(window.innerWidth < 480) {
                    $("#menu").next("UL").slideUp();  
                      
                }
                
                if(window.innerWidth > 480) {
                    $("#menu").next("UL").slideDown();    
                }
            });

            
            $("body").on("click", "#menu", ()=>{
                $("#menu").next("UL").slideToggle();    
            }); 
      
            
          

      
        //----------- manages the behavior of the navbar
        


        $("body").on("keyup", "#search", (e)=>{
               if(e.keyCode=== 13){
                this.props.fetchGifs();
               }
            });   
            
            
        
        
        }
        
    render(){
        return(
            <div className="search">
                <p id="searchSection" className="title">Search gifs: </p>
                <div className="searchBox">
                   <input type="search" id="search" placeholder="search gifs..." />
                </div>  
            
            </div>

        );
    }

}

function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchGifs:fetchGifs}, dispatch);
}
  

export default connect( "" , matchDispatchToProps)(Search);