window.onload = function() {

    //In your JavaScript, get 3 separate references to the buttons 
    //using the IDs you made and store them in variables. 
    //You should use either document.querySelector or 
    //document.getElementById, both will work.
    var btnFoo = document.getElementById("btnFoo");
    var btnBar = document.getElementById("btnBar");
    var btnFooBar = document.getElementById("btnFooBar");
    var main = document.getElementsByTagName("main")[0];

    //When the "Foo" button is clicked, an h3 with the text "Foo" 
    //should be created and appended to the main tag.
    btnFoo.addEventListener("click", function(e) {
        var h3 = document.createElement('h3');
        h3.innerHTML = "Foo";
        main.appendChild(h3);
    }, false);

    //When the "Bar" button is clicked, an h3 with the text "Bar" 
    //should be created and appended to the main tag.
    btnBar.addEventListener("click", function(e) {
        var h3 = document.createElement('h3');
        h3.innerHTML = "Bar";
        main.appendChild(h3);
    }, false);

    //When the "Foobar" button is clicked, an h2 with the text "FooBar" 
    //should be created and appended to the main tag
    btnFooBar.addEventListener("click", function(e) {
        var h2 = document.createElement('h2');
        h2.innerHTML = "FooBar";
        main.appendChild(h2);
    }, false);

};