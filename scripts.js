//function to load a file from the URL "fromFile" into the object identified by "whereTo"
function loadFileInto(fromFile, whereTo) {

  // creating a new XMLHttpRequest object
  ajax = new XMLHttpRequest();

  // defines the GET/POST method, source, and async value of the AJAX object
  ajax.open("GET", fromFile, true);

  // provides code to do something in response to the AJAX request
  ajax.onreadystatechange = function() {
    if ((this.readyState == 4) && (this.status == 200)) {
      document.querySelector(whereTo).innerHTML = this.responseText;

    } else if ((this.readyState == 4) && (this.status != 200)) {
      console.log("Error: " + this.responseText);
    }

  } // end ajax.onreadystatechange function

  // initiate request and wait for response
  ajax.send();

}

//new recipe object
function Recipe(recipeName, imageURL, ingredientsURL, directionsURL) {

  this.recipeName = recipeName;
  this.imageURL = imageURL;
  this.ingredients = ingredientsURL;
  this.directions = directionsURL;

  this.displayRecipe = function() {
    remove();
    document.querySelector("#titleBanner h1").innerHTML = this.recipeName;
    document.querySelector("#titleBanner").style.backgroundImage = "url(" + this.imageURL + ")";
    document.querySelector("#titleBanner").style.backgroundSize = "35%";
    loadFileInto(this.ingredients, "#ingredients ul");
    loadFileInto(this.directions, "#directions ol");

  }
}

NoodleBowlFormula = new Recipe(
  "Noodle Bowl Formula",
  "soup1.jpeg",
  "recipe1-ingredients.html",
  "recipe1-directions.html"
);

CreamyChicken = new Recipe(
  "Creamy Chicken Ramen Soup with Dill",
  "soup2.jpeg",
  "ingredients2.html",
  "directions2.html"
);

Potato = new Recipe(
  "Creamy Slow Cooker Potato Cheese Soup",
  "soup3.jpeg",
  "ingredients3.html",
  "directions3.html"
);

Chicken = new Recipe(
  "Homemade Chicken Soup",
  "soup4.jpeg",
  "ingredients4.html",
  "directions4.html"
);

Broccoli = new Recipe(
  "Copycat Panera Broccoli Cheddar Soup",
  "soup5.jpeg",
  "ingredients5.html",
  "directions5.html"
);

Miso = new Recipe(
  "Miso Soup",
  "soup6.jpeg",
  "ingredients6.html",
  "directions6.html"
);

Ultimate = new Recipe(
  "Absolutely Ultimate Potato Soup",
  "soup7.jpeg",
  "ingredients7.html",
  "directions7.html"
);

FrenchOnion = new Recipe(
  "Rich and Simple French Onion Soup",
  "soup8.jpeg",
  "ingredients8.html",
  "directions8.html"
);

Clam = new Recipe(
  "My Best Clam Chowder",
  "soup9.jpeg",
  "ingredients9.html",
  "directions9.html"
);

Tomato = new Recipe(
  "Fresh Tomato Soup",
  "soup10.jpeg",
  "ingredients10.html",
  "directions10.html"
);

Lentil = new Recipe(
  "Lentil Soup",
  "soup11.jpeg",
  "ingredients11.html",
  "directions11.html"
);

Thai = new Recipe(
  "The Best Thai Coconut Soup",
  "soup12.jpeg",
  "ingredients12.html",
  "directions12.html"
);

Tortilla = new Recipe(
  "Chicken Tortilla Soup",
  "soup13.jpeg",
  "ingredients13.html",
  "directions13.html"
);

Cabbage = new Recipe(
  "Healing Cabbage Soup",
  "soup14.jpeg",
  "ingredients14.html",
  "directions14.html"
);

Mulligatawny = new Recipe(
  "Mulligatawny Soup",
  "soup15.jpeg",
  "ingredients15.html",
  "directions15.html"
);

Fazool = new Recipe(
  "Pasta Fazool (Pasta e Fagioli)",
  "soup16.jpeg",
  "ingredients16.html",
  "directions16.html"
);

function remove() {
  var mission = document.getElementById("mission");
  if (mission != null) mission.remove();
}


window.onload = function() {

  document.querySelector("#firstRecipe").onclick = function() {
    NoodleBowlFormula.displayRecipe();
  }

  document.querySelector("#secondRecipe").onclick = function() {
    CreamyChicken.displayRecipe();
  }

  document.querySelector("#thirdRecipe").onclick = function() {
    Potato.displayRecipe();
  }
  
  document.querySelector("#recipe4").onclick = function() {
    Chicken.displayRecipe();
  }
  
  document.querySelector("#recipe5").onclick = function() {
    Broccoli.displayRecipe();
  }
  
  document.querySelector("#recipe6").onclick = function() {
    Miso.displayRecipe();
  }
  
  document.querySelector("#recipe7").onclick = function() {
    Ultimate.displayRecipe();
  }
  
  document.querySelector("#recipe8").onclick = function() {
    FrenchOnion.displayRecipe();
  }
  
  document.querySelector("#recipe9").onclick = function() {
    Clam.displayRecipe();
  }
  
  document.querySelector("#recipe10").onclick = function() {
    Tomato.displayRecipe();
  }
  
  document.querySelector("#recipe11").onclick = function() {
    Lentil.displayRecipe();
  }
  
  document.querySelector("#recipe12").onclick = function() {
    Thai.displayRecipe();
  }
  
   document.querySelector("#recipe13").onclick = function() {
    Tortilla.displayRecipe();
  }
   
   document.querySelector("#recipe14").onclick = function() {
    Cabbage.displayRecipe();
  }
   
   document.querySelector("#recipe15").onclick = function() {
    Mulligatawny.displayRecipe();
  }
   
   document.querySelector("#recipe16").onclick = function() {
    Fazool.displayRecipe();
  }

} // end window.onload