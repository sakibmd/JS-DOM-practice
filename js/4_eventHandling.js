;(function ($) {
    $(document).ready(function () {

       
       /*h3 access & internal features find out*/
        var accessH3 = document.querySelector("h3");
        accessH3.addEventListener("click", function(evt){
            console.log("Target: ",evt.target);
            console.log("Type: ",evt.type);
            console.log("offsetX: ",evt.offsetX);
            console.log("offsetY: ",evt.offsetY);
            console.log("Clicked H3");
        });
        


        /*implement click effect in all the li item*/
        var allLi = document.querySelectorAll("li");
        function eventForList(evt){
            console.log("Type: ",evt.type);
            console.log("Value: ",evt.target.textContent);
            console.log("Clicked Li");
        }
        for(var i=0; i<allLi.length;i++){
            //console.log(allLi[i]);  //sob gulo li print dibe
            //allLi[i].addEventListener("click", eventForList);  
        }



        var myForm = document.forms[0];
        function myFormFunc(evt){
            evt.preventDefault();
            console.log("Function is submitted");
        }
        //myForm.addEventListener("submit", myFormFunc);




        /*form er input value show kore*/
        var myForm2 = document.forms[0];
        var inputValue = document.querySelector("#inputVal")
        function myForm2Func(evt){
            evt.preventDefault();
            console.log(inputValue.value);
            console.log("Form is submitted");
        }
        myForm2.addEventListener("submit", myForm2Func);


       /*event bubbling & deligation*/

       /*event bubbling*/
        var li = document.querySelector("li"); //li er 1st element access pabe
        var ul = document.querySelector("ul");
        const container = document.querySelector(".container");
        li.addEventListener("click", ()=>{
            //console.log("You Clicked li")
        });
        ul.addEventListener("click", ()=>{
            //console.log("You Clicked ul")
        });
        container.addEventListener("click", ()=>{
            //console.log("You Clicked container")
        });



        /*event deligation*/

        
        
        /*
        var cont = document.querySelector(".container");
        cont.addEventListener("click", evt=>{
            if(evt.target.id === 'sample'){    //li er modde li id use korechi
                evt.target.classList.add("myClass");  // new class adding
                console.log(evt.target);
                console.log("Value: ",evt.target.textContent);
                console.log("Class-Name: ",evt.target.className);
                console.log("Id: ",evt.target.id);

            }
        });
        */
        
        



        /*another example of deligation*/
        /*
        var cont = document.querySelector(".container");
        cont.addEventListener("click", evt=>{
            if(evt.target.id === 'sample'){
                evt.target.classList.add("random");
            }
        });
        */


        

        /*List er moddhe new element add kora*/
        var ul = document.querySelector("ul");
        var input = document.getElementById("inputVal");
        var form = document.forms[0];
        function eventInfo(evt){
            evt.preventDefault;
            var li = document.createElement("li");
            li.textContent = input.value;
            li.className = 'product-list';
            ul.appendChild(li)
        }
        form.addEventListener("submit", eventInfo);




    })
})(jQuery);