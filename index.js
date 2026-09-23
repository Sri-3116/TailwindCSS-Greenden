//selecting side navbar

var sidebar = document.getElementById("sidebar")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")
menuicon.addEventListener("click",function(){
 sidebar.style.right=0   

})
closenav.addEventListener("click", function(){
    sidebar.style.right="-50%"
})