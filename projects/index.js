let container = document.getElementById('add');
result = [{"Title":"Palm Angle Model", "Author":"Prashant Mishra","link":"https://prashant9316.github.io/"},
			{"Title":"Project 2", "Author":"Sourav Mishra","link":"https://www.google.com"}]
var len = 1;
while(result.Title != null){
	len += 1;
}
for (let i = 0; i < 10; i++) {
    let myDiv = document.createElement("div");
    myDiv.className = 'column';
    console.log("Adding Project Card " + String(i));
    if (result.title!=null){
    	myDiv.innerHTML = "<div class=\"card\"><h3>"+ result[i].Title +"</h3><p><a href="+result[i].link+">Author: "+result[i].Author+"</a></p><p>some text</p></div>" 
 	}
 	else {
 		myDiv.innerHTML = "<div class=\"card\"><h3>Not Known</h3><p><a href=>Author: Undefined</a></p><p>some text</p></div>" 
 	}
    container.appendChild(myDiv);
}