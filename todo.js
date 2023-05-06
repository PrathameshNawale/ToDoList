const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Task Toh Type Karo NAHHHHH...!") //if we r not adding anything or tuped anything then it will this msg
    }
    else{
        let li = document.createElement("li"); //creating html tag li with variable Name li
        li.innerHTML = inputBox.value;//in li there will data to store so li take value from inputbox
        listContainer.appendChild(li);//to display that entered this method used

        let span = document.createElement("span");//created the html tag span with var name span 
        span.innerHTML = "\u00d7";//adding unicoode X
        li.appendChild(span);// for displaying
    }
    inputBox.value = ""; //for vanishing the input value after adding the task
    saveData();//calling A Function


}


/* Adding A event Click on li &  span*/ 
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});



/* For Data storing in Local Storage(Browser) */

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
