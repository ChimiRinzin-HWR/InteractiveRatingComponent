const submit = document.getElementById("button");
const rating = document.querySelectorAll(".rating");
const darkblue = getComputedStyle(document.documentElement).getPropertyValue('--Dark-Blue1');
const lightgrey = getComputedStyle(document.documentElement).getPropertyValue('--Light-Grey');
var selectedRating = "";

rating.forEach((item) => {
    item.addEventListener('click', ratingfunction);
    item.addEventListener('touchend', ratingfunction);
    item.addEventListener('keydown', function(event){
        if(event.code === 'Enter' || event.keyCode == 13){
            ratingfunction.call(item);
        }
    });
    
})

function ratingfunction(){
    rating.forEach((item) => {
        if(item.classList.contains("selected")){
            item.classList.remove("selected");
            document.getElementById(item.textContent).style.backgroundColor = darkblue;
            document.getElementById(item.textContent).style.color = lightgrey;
        }
    });
    this.classList.add("selected");
    selectedRating = this.textContent;
    document.getElementById(selectedRating).style.backgroundColor = "white";
    document.getElementById(selectedRating).style.color = "black";
}
submit.addEventListener('click', myfunction); 
submit.addEventListener('touchend', myfunction);
submit.addEventListener('keydown', function(event){
    if(event.code === 'Enter'){
        myfunction();
    }
});
function myfunction(){
    if(selectedRating !==""){
        document.getElementById("ratinggiven").textContent = selectedRating;
        document.getElementById("rating-start").style.display = "none";
        document.getElementById("thanks-start").style.display = "flex";
    }
    else alert("Make sure to select a rating!")
}