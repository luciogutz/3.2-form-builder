document.addEventListener("DOMContentLoaded", function(){

  var formElement = document.querySelector("[data-js='form']");

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "http://json-data.herokuapp.com/forms");

  xhr.addEventListener("load", function(e){

      var xhrData = this.response;
      var JSONData = JSON.parse(xhrData);

      var searchArray = xhrData
      // var finalForm = "";
      JSONData.forEach(function(xhrData){

        var inputHTML = `<input type ="${xhrData.text}"`;
            id = `"${xhrData.id}"`
        


        console.log(xhrData);

      });


  });


 xhr.send();
});
