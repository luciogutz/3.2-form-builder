// First we add an event listener to listen for the content being loaded
document.addEventListener("DOMContentLoaded", function(){
 // created a var for XMLHttpRequest
  var xhr = new XMLHttpRequest();
  // this "GETS" the information from our server source
  xhr.open("GET", "http://json-data.herokuapp.com/forms");
  // this will listen for the content from the url to be loaded then the following function will run.
  xhr.addEventListener("load", function(e){
      // the following is the function that will create the arrays that we need. "this"is used to refrense up a level. I originally had this in 2 seperate steps. one for the 'this.response' and onlother for the parse.
      var xhrData = JSON.parse(this.response);
      // creating new var called formElement that will connect our html when we need it. data-js='form';
      var formElement = document.querySelector("[data-js='form']");
      // information placeholder for functions that are to proceed.
      var finalDataAll = "";
      // this is a forEach loop that will cycle through the xhrData. function is named arrayData.
      xhrData.forEach(function(arrayData){
        var arrayDataPlaceHolder = "";
        // this is an if statement saying that if the arrayData type os equal to "select" then concatinate that information into arrayDataPlaceHolder, and place it using interpolation into the html as a select element.
        if (arrayData.type === "select"){
          arrayDataPlaceHolder += `<select class="selector">`;
            // this is another forEach loop that will cycle through arraydata but look in the options availale for the select type.
            arrayData.options.forEach(function(optionData){
              // this data from the above loop will be concatinated with arrayDataPlaceHolder and placed in an options element using interpolation.
              arrayDataPlaceHolder += `<option label="${optionData.label}" value="${optionData.id}"></option>`;
            });
        // if the following doesnt have the above type called select, then it needs to follow the bellow comand which concatinates the information into finalDataAll, which is a holder for the information and then placed in am input element seperated by the type of information.
        } else {
          var firstNameString = `<input> ${arrayData.label} </input> `;
          //
          // finalDataAll += `<input class="textInput" placeholder=" ${arrayData.lable}" type="${arrayData.lable}" id="${arrayData.id}" icon="${arrayData.icon}"</input>`;
          formElement.innerHTML += firstNameString;
        }
        // this concatinates information placed in finalDataAll(everything but the select type), and arrayDataPlaceHolder (holding the select type).
        finalDataAll += arrayDataPlaceHolder;

      });
      // this concatinates the combined information and adds it into the HTML.
      formElement.innerHTML += finalDataAll;
  });
// this tells the XMLHttpRequest to call, or go
 xhr.send();
});
