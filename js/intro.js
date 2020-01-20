;(function ($) {
    $(document).ready(function () {
        
        //console.dir(document);  //all objects gula show korbe
    
        let val = document;
        val = document.head;  //head er sob info shoe korbe
        val = document.title;
        val = document.forms[0];
        //console.log(val);


        var classAccess = document.getElementsByClassName('product-item'); //same class er sob gulake pabe
        var classAccess = document.getElementsByClassName('product-item'); //same class index based show korbe
        //console.log(classAccess);

        var idAccess = document.getElementById('main-content'); //ei naam er first id shoe korbe
        //console.log(idAccess);

        var tagAccess = document.getElementsByTagName('title'); //tag access korbe
        var tagAccess = document.getElementsByTagName('h3'); 
        var tagAccess = document.getElementsByTagName('body'); 
        //console.log(tagAccess);

        var classAccessByQuerySelector = document.querySelector('.product-item'); //same class er 1st item show korbe
        var classAccessByQuerySelector = document.querySelector('.product-item'); 
        var idAccessByQuerySelector = document.querySelector('#main-content'); 
        //console.log(classAccessByQuerySelector);
        //console.log(idAccessByQuerySelector);


        var classAccessByQuerySelectorAll = document.querySelectorAll('.product-item'); //eki class er sob 
        //console.log(classAccessByQuerySelectorAll);
    })
})(jQuery);
