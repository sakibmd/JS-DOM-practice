;(function ($) {
    $(document).ready(function () {
 
        //nodeList findout
        var nodeList = document.querySelectorAll('.product-item');
        for(let i=0; i<nodeList.length; i++){
            //console.log(nodeList[i]);
        }


        var colorItemGreen = document.getElementsByClassName("product-item")[1]; //1st item color hobe
        var colorItemRed = document.getElementsByClassName("product-item")[3]; //3rd
        colorItemRed.style.color = 'red';
        colorItemGreen.style.color = 'green';
        //console.log(colorItemRed);
        //console.log(colorItemRed.textContent);  //class er bhitorer text show kore
        colorItemRed.innerText = 'Bangladesh';  //class er innerText change hoye jabe
        //console.log(colorItem);




        /* Tag access with querySelector */
        var aTagAccess = document.querySelector("a");
        //console.log(aTagAccess);
        //console.log(aTagAccess.textContent);
        aTagAccess.setAttribute("href", "#");
        aTagAccess.setAttribute("id", "linkId");
        var updated = document.querySelector("a").getAttribute("href");
        var updated = document.querySelector("a").getAttribute("class");
        //console.log(updated);
        //console.log(aTagAccess);




        /* query selector er maddome tag er class showing & add new class */ 
        var classNameShow = document.querySelector("a");
        classNameShow.className;
        //console.log(classNameShow);
        classNameShow.classList.add("newClass");
        //console.log(classNameShow);


        /*children find out*/
        var childrenFindout = document.querySelector(".product"); //ul er class add
        childrenFindout = childrenFindout.children; //sob gulo li show korbe
        childrenLength = childrenFindout.length; //length
        //console.log(childrenFindout);
        //console.log("Length: ",childrenLength);


        var childrenNextFindout = document.querySelector(".product"); //ul er class add
        childrenNextFindout = childrenNextFindout.children[1].nextElementSibling; //sob gulo li show korbe
        //console.log(childrenNextFindout);
        //console.log(childrenNextFindout.textContent);
        //console.log(childrenNextFindout.parentElement);




        /*new li add*/
        var ul = document.querySelector("ul");
        var newLi = document.createElement("li");
        newLi.className = "product-item";
        newLi.innerText = "New Item";
        //li.appendChild(document.createTextNode("New Item"));  //alternative way
        ul.appendChild(newLi);
        newLi.style.color= "blue";
        //console.log(ul);

    })
})(jQuery);