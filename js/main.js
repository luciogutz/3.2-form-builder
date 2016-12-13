document.addEventListener("DOMContentLoaded", function(){

  var formElement = document.querySelector("[data-js='form']");

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "http://json-data.herokuapp.com/forms");

  xhr.addEventListener("load", function(e){

      var xhrData = this.response;
      var JSONData = JSON.parse(xhrData);
      var searchArray = JSONData;

      // console.log(searchArray);

      var finalForm = "";
      searchArray.forEach(function(xhrData){

        var labelHTML = "<section>";
            labelHTML += xhrData.label;
            labelHTML += "</section>";
            formElement.innerHTML += labelHTML;

      });


  });


 xhr.send();
});
