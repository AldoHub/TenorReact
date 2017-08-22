import $ from "jquery";

//export the function 
export function fetchTrending(){
     //return the actual action to do
     return function(dispatch){
      
      $.ajax({
      url: "https://api.tenor.com/v1/trending?key=LIVDSRZULELA",  
      method: "GET", 
      
    }).then((response)=>{
       dispatch({type:"FETCH_TRENDING_GIFS", payload:response.results});
    });
                      
  
    }
}