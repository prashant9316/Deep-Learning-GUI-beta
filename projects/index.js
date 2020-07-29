let container = document.getElementById('add');

for (let i = 1; i <= 8; i++) {
    let myDiv = document.createElement("div");
    myDiv.className = 'column';

    myDiv.innerHTML = "<div class=\"card\"><h3> Card"+ i +"</h3><p>some text</p><p>some text</p></div>" 
 
    container.appendChild(myDiv);
}