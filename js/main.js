document.addEventListener("DOMContentLoaded", function(){

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "http://json-data.herokuapp.com/forms");

  xhr.addEventListener("load", function(e){

      var xhrData = JSON.parse(this.response);

      var formElement = document.querySelector("[data-js='form']");

      var finalDataAll = "";
      // console.log(xhrData);
      xhrData.forEach(function(arrayData){

        var arrayDataPlaceHolder = "";

        if (arrayData.type === "select"){
          arrayDataPlaceHolder += `<select class="selector">`;

            arrayData.options.forEach(function(optionData){

              arrayDataPlaceHolder += `<option label="${optionData.label}" value="${optionData.id}"></option>`;
              console.log(optionData);
            });
        }else {
          finalDataAll += `<input class="textInput" placeholder=" ${xhrData.lable}" type="${xhrData.type}" id="${xhrData.id}" icon="${xhrData.icon}"></input>`;
        }

        finalDataAll += arrayDataPlaceHolder;

      });
      formElement.innerHTML += finalDataAll;

  });

 xhr.send();
});
