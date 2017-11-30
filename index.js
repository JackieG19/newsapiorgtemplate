/* global $ APIKEY*/

$(document).ready(function(){
        $.ajax({
          method: "GET",
          url: "https://newsapi.org/v2/sources",
          data: {category: "business", country: "us", language: "en", apiKey: APIKEY},
          success: function(data){
              if (data.status === "ok"){
                  console.log(data);
                  for (var i = 0; i < data.sources.length; i++){
                      var source = document.createElement("OPTION");
                      source.setAttribute("value", data.sources[i].id);
                      source.innerHTML = data.sources[i].name;
                      console.log(source);
                      document.getElementById('selection').appendChild(source);
                  }//for
                }//if 
            }//success
        });//.ajax
        
        $('#source').submit(function(event){
                event.preventDefault();
                //alert(document.getElementById('selection').value);
                var grabID = document.getElementById('selection').value;
                $.ajax({
                  method: "GET",
                  url: "https://newsapi.org/v2/top-headlines",
                  data: {sources: grabID, apiKey: APIKEY},
                  success: function(data){
                      for (var i = 0; i < data.articles.length; i++){
                          if (data.articles[i].title) {
                            var display = document.createElement("P");
                            display.innerHTML = data.articles[i].title;
                            document.getElementById("headlines").appendChild(display);
                          }
                        }
                      } 
                });//.ajax
            });//#source
 });//docuument