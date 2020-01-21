;(function ($) {
    $(document).ready(function () {

       
       /*heading change*/
        var oldH3 = document.querySelector("h3");
        var newH3 = document.createElement("h3");
        newH3.appendChild(document.createTextNode("About Us"));
        newH3.innerText = "About US";   //same as upper line
        oldH3.replaceWith(newH3);
        //console.log(val);



        /*Delete li Element*/
        var list = document.querySelector(".product");    //ul
        //deletedItem = list.lastElementChild.remove(); //last item delete kore felbe


        /*delete er alternative way*/
        var list2 = document.querySelector("ul.product"); //ul
        //list2.removeChild(list2.lastElementChild);


    })
})(jQuery);