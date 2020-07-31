let container = document.getElementById('add');
result = [{"Title":"Palm Angle", "Author":"Prashant","link":"https://prashant9316.github.io/"},
			{"Title":"Project 2", "Author":"Sourav","link":"https://www.google.com"}]
var len = 1;
while(result.Title != null){
	len += 1;
}
for (let i = 0; i < 12; i++) {
    let myDiv = document.createElement("div");
    myDiv.className = 'column';
    console.log("Adding Project Card " + String(i));
    if (i<2){
    	myDiv.innerHTML = "<div class=\"card\"><h3>"+ result[i].Title +"</h3><span class=\"dot\"><img src=\"images/author.jpg\" class=\"img\"/></span><p><a href="+result[i].link+">by "+result[i].Author+"</a></p><p>some text</p></div>" 
 	}
 	else {
 		myDiv.innerHTML = "<div class=\"card\"><h3>Not Known</h3><span class=\"dot\"><img src=\"images/author.jpg\" class=\"img\"/></span><p><a href=>by: Undefined</a></p><p>some text</p></div>" 
 	}
    container.appendChild(myDiv);
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}