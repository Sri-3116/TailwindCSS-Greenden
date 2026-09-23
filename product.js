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
//product search functionality
//SEARCH THE NAME IN NO.OF NAMES

var productcontainer = document.getElementById("product-container")
var search = document.getElementById("search")
var  productlist = productcontainer.querySelectorAll("div")
//ssee below code-yapppalam search la oru value ha type panrano happalam search la eruthu oru value ha yaduthu enteredvalue la store pannikiran see below 24th line 
    search.addEventListener("keyup",function(){
    //every time press the button we have 1 value that is below
    var enteredvalue = event.target.value.toUpperCase()
    for(count=0; count<productlist.length; count++ )
    {
        var productname = productlist[count].querySelector("h1").textContent
        // using indexOf or includes
        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
          productlist[count].style.display="none"
        }

    else{
    productlist[count].style.display="block"
    }
}
    })
