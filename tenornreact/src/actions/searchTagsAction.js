import $ from "jquery";

//export the function 
export function fetchGifsByTags(){
     //return the actual action to do
     return function(dispatch){
        
        
        let $value= $("#searchTags").val(); 
        $.ajax({url: "https://api.tenor.com/v1/search_suggestions?tag="+ $value +"&key=LIVDSRZULELA",  
           method: "GET", 
          }).then((response)=>{
            console.log("ACTION FILE");
            dispatch({type:"FETCH_GIFS_BY_TAGS", payload:response.results});
        });
        
     
  
    }
}