// my javascript logic for ROCK PAPER SCISSORS

// alert("I am an alert");


function myFunction() {
    document.getElementById("lets-play-btn").style.color = "red";
    //alert("did something");
    // create the element for image
    let img = document.createElement("img");
    // fetch the image source
    img.src = "images/lets-get-ready-to-rumble.jpg";
    // set image size parameters
    img.height = 400;
    img.width = 500;

    //optionally set a css class on the image
    /*var class_name = "foo";
    img.setAttribute("class", class_name);*/

    // append to the body
    document.body.appendChild(img);

}