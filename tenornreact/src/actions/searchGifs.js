import $ from "jquery";

//export the function 
export function fetchGifs(){
     //return the actual action to do
     return function(dispatch){
      
        
        let $value= $("#search").val();
    
        $.ajax({
        url: "https://api.tenor.com/v1/search?q="+ $value +"&key=LIVDSRZULELA",  
        method: "GET", 
        
        }).then((response)=>{
        dispatch({type:"SEARCH_GIFS", payload:response.results});
        });
        }
  
    }