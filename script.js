let bookName = document.getElementById("bookName");
let authorName = document.getElementById("authorName");
let pages = document.getElementById("pages");
let language = document.getElementById("language");
let stat = document.getElementById("status");
let add = document.getElementById("sbt");
let librairy = document.getElementById("librairy");

let checkFields = () => {
  if (bookName.value.length > 0 && authorName.value.length > 0 && (pages.value.length > 0) && language.value.length > 0){
    return true;
  }else {
    return false;
  }
};

let addToLibrairy = () => {
  if (!checkFields()){
    alert('Please fill all the required Fields');
    return;
  }
  let infoDiv = document.createElement('div');
      infoDiv.classList.add('card');
  let infoOne = document.createElement("h2");
  let infoOneText = document.createTextNode(bookName.value);
  let infoTwo = document.createElement("h3");
  let infoTwoText = document.createTextNode(authorName.value);
  let infoThree = document.createElement("h4");
  let infoThreeText = document.createTextNode(pages.value + ' Pages');
  let infoFour = document.createElement("h4");
  let infoFourText = document.createTextNode(language.value);
  let infoFive = document.createElement("h4");
  let infoFiveText = document.createTextNode(stat.value);

  if(stat.checked){
    infoFiveText.textContent = 'READ';
  } else {
    infoFiveText.textContent = 'NOT READ YET';
  };

    infoOne.appendChild(infoOneText);
    infoTwo.appendChild(infoTwoText);
    infoThree.appendChild(infoThreeText);
    infoFour.appendChild(infoFourText);
    infoFive.appendChild(infoFiveText);


    infoDiv.appendChild(infoOne);
    infoDiv.appendChild(infoTwo);
    infoDiv.appendChild(infoThree);
    infoDiv.appendChild(infoFour);
    infoDiv.appendChild(infoFive);

    librairy.appendChild(infoDiv);

    

    bookName.value = "";
    authorName.value = "";
    pages.value = "";
    language.value = "";
    stat.checked = false;
 

    console.log(infoFiveText)
};

add.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the form from submitting
  addToLibrairy(); // Call your function to process the form data and log it
});


