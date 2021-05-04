function homePage() {
	var prev = document.getElementById("prev_page")
	var curr = document.getElementById("curr_page")

	document.getElementById(curr.innerHTML).style.display = "none"
	curr.innerHTML = "main"
	prev.innerHTML = "main"
	document.getElementById(curr.innerHTML).style.display = "block"
	checkPrevButton();
}


function prevPage() {
	var prev = document.getElementById("prev_page")
	var curr = document.getElementById("curr_page")

	document.getElementById(curr.innerHTML).style.display = "none"
	document.getElementById(prev.innerHTML).style.display = "block"

	curr.innerHTML = prev.innerHTML

	switch(prev.innerHTML) {
		case "main":
			prev.innerHTML = "main";
			upAndDownEnable("none")
			break;
		case "cookARecipe":
			prev.innerHTML = "main";
			break;
		case "selectARecipe":
			prev.innerHTML = "cookARecipe"
			upAndDownEnable("none")
			break;
		case "favoriteARecipe":
			prev.innerHTML = "selectARecipe"
			upAndDownEnable("flex")
			break;
		case "recipeInstructions":
			upAndDownEnable("flex")
			break;
		default: 
			break;
	}
	checkPrevButton();
}

function checkPrevButton() {
	var curr = document.getElementById("curr_page")

	switch(curr.innerHTML) {
		case "main":
			document.getElementById("prevButton").style.backgroundColor = "#515151";
			upAndDownEnable("none")
			break;
		case "selectARecipe":
			selectARecipeSpecial()
			break;
		default:
			document.getElementById("prevButton").style.backgroundColor = "#f1f1f1";
			break;
	}
}

function badButton(){
	var prev = document.getElementById("prev_page")
	var curr = document.getElementById("curr_page")

	prev.innerHTML = curr.innerHTML
	document.getElementById(curr.innerHTML).style.display = "none"
	
	curr.innerHTML = "badButton"
	document.getElementById(curr.innerHTML). style.display = "block"
	checkPrevButton()	
}

function navButtonPress(next_id){
	var prev = document.getElementById("prev_page")
	var curr = document.getElementById("curr_page")

	prev.innerHTML = curr.innerHTML
	
	document.getElementById(curr.innerHTML).style.display = "none"
	curr.innerHTML = next_id
	document.getElementById(curr.innerHTML).style.display = "block"
	checkPrevButton()
	runPageJava(next_id)
}

function runPageJava(next_id){
	switch(next_id){
		case "selectARecipe":
			selectARecipeSpecial()
			break;
		case "favoriteARecipe":
			favoriteARecipeSpecial()
			break;
		default:
			break;
	}
}


var data = {
	"White Chicken Chili": {
		"img": "./img/white_chicken_chili.jpg",
		"prepTime": "10 minutes",
		"cookTime": "40 minutes", 
		"difficulty": "easy",
		"instructions": [
			"<div style='font-size:.7em;'>1 tbsp. extra-virgin olive oil, <br>\
			1 small yellow onion, diced <br>\
			1 jalapeno, seeded and minced <br>\
			2 cloves garlic, minced <br>\
			1/2 tsp. oregano <br>\
			1/2 tsp. ground cumin <br>\
			2 (4.5 oz.) cans green chilies <br>\
			3 boneless skinless chicken breasts, cut into thirds <br>\
			5 c. low-sodium chicken broth <br>\
			Kosher salt <br>\
			Freshly ground black pepper <br>\
			2 (15 oz.) cans white beans, drained and rinsed <br>\
			1 1/2 c. frozen corn <br>\
			1/2 c. sour cream <br>\
			Freshly chopped cilantro, for garnish <br>\
			1/4 c. shredded Monterey Jack<br>\
			1/4 c. crushed tortilla chips <br></div>" ,
			"In a large pot, over medium heat, heat oil. Add onion and jalapeno and cook until soft, about 5 minutes. Add garlic, oregano, and cumin and cook until fragrant, 1 minute. Add green chilis, chicken, and broth and season with salt and pepper. Bring to a boil, then reduce heat and simmer, covered, 10 to 12 minutes, until chicken is tender and cooked through.",
			"Transfer chicken to a plate and shred with two forks. Return to pot and add white beans and corn. Bring to a simmer and let cook, 10 minutes, using a wooden spoon to mash about 1/4 of the beans. Turn off heat and stir in sour cream.",
			"Ladle chili into bowls and garnish with cilantro, cheese, and chips before serving."
		]
	},
	"Taco Soup": {
		"img": "./img/taco_soup.jpg",
		"prepTime": "15 minutes", 
		"cookTime": "2 hours",
		"difficulty": "easy",
		"instructions": [
			"<div style='font-size:.7em;'>2 tsp olive oil<br>\
			1 1/4 lbs lean ground beef<br>\
			1 medium yellow onion chopped (1 1/2 cups)<br>\
			2 cloves garlic, minced (2 tsp)<br>\
			1 jalapeno, seeded and finely chopped<br>\
			2 (14.5 oz) cans diced tomatoes with green chiles<br>\
			1 (14 oz) can low-sodium beef broth<br>\
			1 (8 oz) can tomato sauce<br>\
			1 Tbsp chili powder<br>\
			1 tsp ground cumin<br>\
			3/4 tsp ground paprika<br>\
			1/4 tsp dried oregano<br>\
			1 1/2 Tbsp dry ranch dressing mix, or 1/3 cup chopped cilantro and 1 Tbsp fresh lime juice<br>\
			Salt and freshly ground black pepper<br>\
			1 1/2 cups frozen corn<br>\
			1 (14.5 oz) can black beans<br>\
			1 (14.5 oz) can can pinto beans<br></div>", 
			"Heat a largr pot over medium-high heat drizzle lightly with oil.</div>",
			"Add ground beef in a large along with chopped onion, crumbling and stirring occasionally until browned. Add jalapeno and garlic and saute 1 minute longer. Drain excess fat from beef mixture. ",
			"Stir in tomatoes with chiles, beef broth, tomato sauce, chili powder, cumin, paprika, oregano, ranch dressing mix and season with salt and pepper to tastes. Cover pot with lid and simmer 30 minutes, stirring occasionally.",
			"Add in corn, black beans and pinto beans and cook until heated through. Add 1/2 cup water to thin soup if desired. Stir in cilantro and lime if using.",
			"Serve warm finished with desired toppings."
		]
	},
	"Baked Ziti": {
		"img": "./img/baked_ziti.png",
		"prepTime": "10 minutes", 
		"cookTime": "55 minutes", 
		"difficulty": "medium", 
		"instructions": [
			"<div style='font-size:.7em;'>1 lb. Italian sausage (sweet, mild, or hot) <br>\
			1 yellow onion  <br>\
			3 oz. tomato paste  <br>\
			1 28 oz. can crushed tomatoes  <br>\
			1 Tbsp Italian seasoning blend  <br>\
			1/2 cup water <br>\
			1 lb. ziti <br>\
			1/2 Tbsp salt (for pasta water)  <br>\
			15 oz. ricotta  <br>\
			1 cup Italian cheese blend <br>\
			freshly cracked black pepper  <br>\
			2 cups shredded mozzarella  <br>\
			1 handful chopped parsley (optional, for garnish)  <br></div>",
			"Brown the sausage in a large skillet or pot over medium heat, until it's brown and crispy on the edges (pork sausage contains a lot of fat, so I didn't add any extra to the skillet).",
			"While the sausage is browning, finely dice the onion. Add the onion to the skillet once the sausage has browned, and continue to sauté over medium heat until the onion is soft and translucent.",
			"Add the tomato paste, crushed tomatoes, Italian seasoning, and ½ cup water to the skillet with the sausage and stir to combine. Place a lid on the skillet and allow it to come up to a simmer. Once simmering, turn the heat down and allow it to continue to simmer while you cook the ziti. Stir the sauce occasionally as it simmers.",
			"After getting the sauce started, begin the ziti. Bring a large pot of water with ½ Tbsp salt to a boil over high heat. Once boiling, add the ziti, and let it continue to boil until the ziti is tender (about 7-8 minutes). Drain the ziti in a colander. Shake the colander a bit to shake excess water out of the pasta.",
			"While the pasta and sauce are cooking, prepare the cheese filling. Add the ricotta, Italian cheese blend, and some freshly cracked black pepper (about 10 cranks of a pepper mill) to a bowl and stir to combine. Begin to preheat the oven to 350ºF.",
			"After draining the ziti, return it to the pot and add 1 cup of the red sauce. Stir to coat the cooked pasta in sauce. Pour half of the ziti to a 9x13 baking dish. Add half of the ricotta mixture on top of the ziti in small dollops. Finally, spoon half of the red sauce and sausage over the pasta and ricotta. It's okay if the ingredients don't cover in a solid layer. Repeat these layers with the second half of the pasta, ricotta mixture, and sauce. Finally, top with 2 cups shredded mozzarella.",
			"Cover the baking dish with foil, making sure it's slightly tented so that it doesn't touch or stick to the melted cheese. Transfer the covered casserole to the oven and bake for 20 minutes.",
			"After baking for 20 minutes, remove the foil, and turn the oven on to broil (keep the casserole on the middle rack, about 10-12 inches from the broiler). Broil for 5 minutes, or just until the cheese is slightly browned. Keep a close eye on the baked ziti as it broils, because broilers can vary in intensity. Top with chopped parsley, if desired, then serve."
		]
	},

	"Pancakes": {
		"img": "./img/pancakes.jpg",
		"prepTime": "8 minutes",
		"cookTime": "12 minutes",
		"difficulty": "easy",
		"instructions":[
			"<div style='font-size:.7em;'>2 cups all-purpose flour <br>\
			2 teaspoons baking powder<br>\
			0.25 teaspoon salt<br>\
			1 tablespoon sugar, optional<br>\
			2 eggs<br>\
			1.5 to 2 cups milk<br>\
			2 tablespoons melted and cooled butter (optional), plus unmelted butter for cooking, or use neutral oil<br></div>",
			"Heat a griddle or large skillet over medium-low heat. In a bowl, mix together dry ingredients. Beat eggs into 1 1/2 cups milk, then stir in 2 tablespoons melted cooled butter, if using it. Gently stir this mixture into dry ingredients, mixing only enough to moisten flour; don't worry about a few lumps. If batter seems thick, add a little more milk.",
			"Place a teaspoon or 2 of butter or oil on griddle or skillet. When butter foam subsides or oil shimmers, ladle batter onto griddle or skillet, making pancakes of any size you like. Adjust heat as necessary; usually, first batch will require higher heat than subsequent batches. Flip pancakes after bubbles rise to surface and bottoms brown, after 2 to 4 minutes.",
			"Cook until second side is lightly browned. Serve, or hold on an ovenproof plate in a 200-degree oven for up to 15 minutes."
		]
	},
	"Brownies": {
		"img": "./img/brownies.jpg",
		"prepTime": "15 minutes", 
		"cookTime": "45 minutes", 
		"difficulty": "easy",
		"instructions": [
			"<div style='font-size:.7em;'>1 cup (200g) granulated sugar<br>\
			1/3 cup (40g) unsweetened cocoa powder sifted<br>\
			1/2 cup (64g) all-purpose flour<br>\
			1/4 tsp. salt<br>\
			1/4 tsp. baking powder<br>\
			WET INGREDIENTS<br>\
			1/2 cup (113g) butter melted then cooled<br>\
			2 eggs room temperature<br>\
			1 tsp. McCormick vanilla<br></div>",
			"Sift together all dry ingredients. Place into a jar or airtight container.",
			"Melt butter and set aside to cool slightly. In a medium bowl, beat two eggs with the vanilla. Add in and gently stir dry ingredients. Pour the melted butter into brownie mixture and mix until just incorporated. Spread batter in a prepared 8-inch square pan and bake for 20-22 minutes at 350 degrees."
		]
	}
}


var favorites = ["White Chicken Chili", "Taco Soup", "Baked Ziti", "Pancakes", "Brownies"];

function selectARecipeSpecial(){
 	var e = document.getElementById("favoritesContainer")
	if (favorites.length == 0){
		e.innerHTML = "Please Favorite New Recipes"
		return
	}

	new_favorite = ""
	for (var i=0; i < favorites.length; i++){
		new_favorite += "<div class='parent parent--fade-children' onclick='goToRecipeInstructions(" + '"' + favorites[i] + '"' + ")'>"
		new_favorite += "<div class='child child--featured30'><img src='" + data[favorites[i]]["img"] + "' style='max-width:100%;'></div>"
		new_favorite += "<div class='child child--featured50'>"
			new_favorite += "<div class='parent--vertical' style='align-items:flex-start'>"
				new_favorite += "<div class='child child--featured30' style='font-size: 2em; padding:10px 0px 0px 5px'>" + favorites[i] + "</div>"
				new_favorite += "<div class='child child--featured70'><p style='text-align:left; padding:0px 10px; margin: 0px 0px 5px 0px'>"
				new_favorite += "Prep Time: " + data[favorites[i]]["prepTime"] + "</br>"
				new_favorite += "Cook Time: " + data[favorites[i]]["cookTime"] + "</br>"
				new_favorite += "Difficulty: " + data[favorites[i]]["difficulty"] + "</br>"
				new_favorite += "</p></div></div>"
			new_favorite += "</div>"
			new_favorite += "<div class='child child--featured20'><img src='./img/delete.png' style='max-width:100%;' onclick='deleteFromFavorites(" + '"' + favorites[i] + '"' + ", " + '"' + "selectARecipeSpecial()" + '"' + ")'></div>"

		new_favorite += "</div>"
	}
	e.innerHTML = new_favorite
}

function upAndDownEnable(onOrOff){
	document.getElementById("upButton").style.display = onOrOff
	document.getElementById("downButton").style.display = onOrOff
}

var recipe_index = 0;

function favoriteARecipeSpecial(){
	upAndDownEnable("flex")

	var i = 0;
	for (const [key, value] of Object.entries(data)) {
		if (i == recipe_index){
			document.getElementById("recipeName").innerHTML = '<navButton class="centerButton" onclick="goToRecipeInstructions(' + "'" + key + "'" + ')" style="font-size: 1.2em;width:75%; height:50%;flex-direction: column;" >' + key + '<div style="font-size:.6em">Cook Now!</div>' +'</navButton>'

			document.getElementById("recipeImage").innerHTML = "<img src='" + value["img"] + "' style='max-width:100%; max-height:100%'>"
			document.getElementById("recipeInfo").innerHTML = "<h2> Prep Time: " + value["prepTime"] + "</h2><h2> Cook Time: " + value["cookTime"] + "</h2><h2> Difficulty: " + value["difficulty"] + "</h2>"

			if (favorites.includes(key)){
				document.getElementById("favorite").innerHTML = "<div onclick='deleteFromFavorites(" + '"' + key + '", ' + '"' + 'favoriteARecipeSpecial()' + '"' + ")' style='display:flex; justify-content: center; align-items: center;'><img src='./img/blue_heart.png' style='max-width:75%; max-height:75%'></div>"
			}
			else{
				document.getElementById("favorite").innerHTML = "<div onclick='favoriteItem(" + '"' + key + '"' + ")' style='display:flex; justify-content: center; align-items: center;'><img src='./img/blank_heart.png' style='max-width:75%; max-height:75%'></div>"
			}
			break;
		}
		i += 1
	}
	checkUpDownButtons()
}

var delete_from_favorites = false;

function goToRecipeInstructions(recipe) {
	if (delete_from_favorites) {
		delete_from_favorites = false
		return
	}
	navButtonPress("recipeInstructions")
	instruction_number = 0;
	upAndDownEnable("flex")
	fillInstructions(recipe)
	hideMenu()
}

function favoriteItem(recipe) {
	favorites.push(recipe)
	favoriteARecipeSpecial()
}

function deleteFromFavorites(recipe, f){
	delete_from_favorites = true

	var delete_index = 0;
	for (var i=0; i < favorites.length; i++){
		if (favorites[i] == recipe){
			delete_index = i;
			break;
		}
	}
	favorites.splice(delete_index, 1)
	eval(f)
}

function up(){
	switch(document.getElementById("curr_page").innerHTML){
		case "favoriteARecipe":
			if (recipe_index > 0){
				recipe_index -= 1;
			}
			favoriteARecipeSpecial()
			break;
		case "recipeInstructions": 
			recipe = document.getElementById("recipeNameInstructions").innerHTML
			if (instruction_number > 0){
				instruction_number -= 1;
			}
			fillInstructions(recipe)
			break;
		default: 
			break
	}	
}

function down(){
	switch(document.getElementById("curr_page").innerHTML){
		case "favoriteARecipe":
			if (recipe_index+1 < Object.entries(data).length){
				recipe_index += 1
			}
			favoriteARecipeSpecial()
			break;
		case "recipeInstructions": 
			recipe = document.getElementById("recipeNameInstructions").innerHTML
			if (instruction_number + 1 < data[recipe]["instructions"].length){
				instruction_number += 1;
			}
			fillInstructions(recipe)
			break;
		default: 
			break;
	}
	checkUpDownButtons()
}

function jumpInstruction(recipe, new_number){
	instruction_number = new_number
	fillInstructions(recipe)
}

var instruction_number = 0;
function fillInstructions(recipe){
	var instrs = data[recipe]["instructions"][instruction_number]
	document.getElementById("recipeNameInstructions").innerHTML = recipe
	document.getElementById("instructionNumber").innerHTML = "Instruction " + (instruction_number + 1)
	document.getElementById("recipeInstructionsText").innerHTML = instrs

	document.getElementById("instructionsMenuJump").innerHTML = ""
	for (var i=0; i < data[recipe]["instructions"].length; i++){
		document.getElementById("instructionsMenuJump").innerHTML += "<div class='instructionsLink' onclick='jumpInstruction(" + '"' + recipe  +'", ' + i + ")'>Instruction " + (i + 1) + "</div>"
	}
	checkUpDownButtons()
}

function checkUpDownButtons(){
	switch(document.getElementById("curr_page").innerHTML){
		case "favoriteARecipe":
			if (recipe_index + 1 == Object.entries(data).length){
				document.getElementById("downButton").style.backgroundColor = "#515151";
			}
			else {
				document.getElementById("downButton").style.backgroundColor = "#f1f1f1";
			}
			if (recipe_index == 0){
				document.getElementById("upButton").style.backgroundColor = "#515151";
			}
			else {
				document.getElementById("upButton").style.backgroundColor = "#f1f1f1";
			}
			break;
		case "recipeInstructions": 
			recipe = document.getElementById("recipeNameInstructions").innerHTML
			if (instruction_number + 1 == data[recipe]["instructions"].length){
				document.getElementById("downButton").style.backgroundColor = "#515151";
			}
			else {
				document.getElementById("downButton").style.backgroundColor = "#f1f1f1";
			}
			if (instruction_number == 0){
				document.getElementById("upButton").style.backgroundColor = "#515151";
			}
			else {
				document.getElementById("upButton").style.backgroundColor = "#f1f1f1";
			}
			break;
		default: 
			break
	}
}

function showMenu(){
	menuBarsPressed = true;
	document.getElementById("verticalMenu").style.display = "flex";
	document.getElementById("menuBars").style.display = "none";
	document.getElementById("intrsVertical").style.flexBasis = "65%";
}

var menuBarsPressed = false;

function hideMenu(){
	if (menuBarsPressed == false){
		document.getElementById("verticalMenu").style.display = "none";
		document.getElementById("menuBars").style.display = "flex";
		document.getElementById("intrsVertical").style.flexBasis = "100%";
	}
	else{
		menuBarsPressed = false
	}
}

var start_x;
var start_y;
var end_x;
var end_y;

function touchstart(e){
	start_x = e.touches[0].clientX;
	start_y = e.touches[0].clientY;
}

function touchend(e){
	end_x = e.changedTouches[0].clientX;
	end_y = e.changedTouches[0].clientY;
	var diff_x = (end_x - start_x)
	var diff_y = (end_y - start_y)

	var page = document.getElementById(document.getElementById("curr_page").innerHTML)
	page.style.WebkitTransform  = "translate(0px, 0px)"

	if (Math.abs(Math.abs(diff_x) - Math.abs(diff_y)) > 100){
		if (Math.abs(diff_x) > Math.abs(diff_y)){ // change X
			if (diff_x > 0){
				prevPage()
			}
		}
		else { // change Y
			if (diff_y > 0){
				up()
			}
			else{
				down()
			}
		}
	}
}

function touchmove(e){
	var page = document.getElementById(document.getElementById("curr_page").innerHTML)

	end_x = e.changedTouches[0].clientX;
	end_y = e.changedTouches[0].clientY;
	var diff_x = (end_x - start_x)
	var diff_y = (end_y - start_y)

	if (Math.abs(diff_x) < Math.abs(diff_y) && ((document.getElementById("curr_page").innerHTML == "favoriteARecipe") || (document.getElementById("curr_page").innerHTML == "recipeInstructions"))) { 
		page.style.WebkitTransform  = "translateY(" + diff_y + "px)"
	}
	else {
		if(diff_x > 0){
			page.style.WebkitTransform  = "translateX(" + diff_x + "px)"
		}
	}
}

function mainScript(){
	b = document.getElementById("body")
	b.addEventListener("touchstart", e=> {
		touchstart(e);
	});
	b.addEventListener("touchend", e=>{
		touchend(e);
	});
	b.addEventListener("touchmove", e=>{
		touchmove(e);
	})
}