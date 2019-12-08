$(document).ready(function(e) {
    $('#dataToSubmit').on( 'click',  function(e) {
       var tar =  $(e.target).text()
        console.log(tar);
        console.log(e.target);

        ids = e.target.id;
        classname = e.target.className
console.log(e.target.className);
if(classname === 'one'){
    // $("#secondservice").fadeOut(500, function(){
    //     $("#service").fadeIn(500);
    // });

   
    // $(`span:contains('${ids}')`).remove();
    // $(".checked").prop("checked", false);

    const myNode = document.getElementById("dataToSubmit");
    myNode.innerHTML = '';
    $("#service").fadeIn(500);
    $("#thirdService").fadeOut(500);
    $("#secondservice").fadeOut(500);
    $("#commentBox").fadeOut(500);
    $(".checked").prop("checked", false);

}

if(classname === 'two'){
    // $("#thirdService").fadeOut(500, function(){
    //     $("#secondservice").fadeIn(500);
    // });

   
    // $(`span:contains('${ids}')`).remove();
    // $(".checked").prop("checked", false);

    const myNode = document.getElementById("dataToSubmit");
    myNode.innerHTML = '';
    $("#service").fadeIn(500);
    $("#thirdService").fadeOut(500);
    $("#secondservice").fadeOut(500);
    $("#commentBox").fadeOut(500);    $(".checked").prop("checked", false);
}

else if(classname === 'high'){
    // $("#commentBox").fadeOut(500, function(){
    //     $("#thirdService").fadeIn(500);
    // });
    // $(`span:contains('${ids}')`).remove();

    
    // $(".checked").prop("checked", false);
    // e.parentNode.style.backgroundColor = 'white';

    // $(`span:contains('${ids}')`).remove();
    const myNode = document.getElementById("dataToSubmit");
    myNode.innerHTML = '';
    $("#service").fadeIn(500);
    $("#thirdService").fadeOut(500);
    $("#secondservice").fadeOut(500);
    $("#commentBox").fadeOut(500);    $(".checked").prop("checked", false);
}

else if(classname === 'timepass'){
    // $("#commentBox").fadeIn(500);
    // document.getElementById(`${ids}`).remove();

    const myNode = document.getElementById("dataToSubmit");
    myNode.innerHTML = '';
    $("#service").fadeIn(500);
    $("#thirdService").fadeOut(500);
    $("#secondservice").fadeOut(500);
    $("#commentBox").fadeOut(500);    $(".checked").prop("checked", false);
    // $(`span:contains('${ids}')`).remove();
}

        // $( "p:contains( 'Issue with Bed' )" ).remove();
        // $(`span:contains('${a}')`).remove();
    });
 });

function myFunction(furniture,b) {
    console.log(furniture.checked,furniture.getAttribute('data-furniture'),b);
    count = 0
    if (furniture.checked) {
        furniture.parentNode.style.backgroundColor = 'blue';
        setInterval(function(){  furniture.parentNode.style.backgroundColor = 'white';}, 1000);
        var furniture_value = (furniture.getAttribute('data-furniture'));
        $("#dataToSubmit").append(`<span id='${furniture_value}' class='${b}' style="  background-color:blue;
        border: 2px solid beige;
        border-radius: 30px;
        width:100%;
        color: black;
        height: 45px; 
        padding: 15px;
        cursor:pointer;
        text-align: center;  " >
        `+ furniture_value +"&#10005;</span>");
       if(b === 'one'){
        $("#service").fadeOut(500, function(){
            $("#secondservice").fadeIn(500);
        });}
        else if(b === "two"){
            $("#secondservice").fadeOut(500, function(){
                $("#thirdService").fadeIn(500);
            });
        }
        else if(b === 'high'){
            $("#thirdService").fadeOut(500, function(){
                $("#commentBox").fadeIn(500);
            });
        }
        
    } else  {
        furniture.parentNode.style.backgroundColor = 'white';
        var a = (furniture.getAttribute('data-furniture'));
        // var c = ($(`div:contains(${a[3].childNodes})`));
         console.log(a,'name');

        // $( "p:contains( 'Issue with Bed' )" ).remove();
        $(`span:contains('${a}')`).remove();

       

    }
    count++;
}

function submitfunction(){
    var vale = document.getElementById("submitvalue").value;
    var nam = document.getElementById("submitvalue").name;
    $("#dataToSubmit").append(`<span id='${nam}' class='timepass' style="  background-color:blue;
    border: 2px solid beige;
    border-radius: 30px;
    width:100%;
    color: black;
    height: 45px; 
    padding: 15px;
    cursor:pointer;
    text-align: center;  " >
    `+ vale +"&#10005;</span>");
    $("#commentBox").fadeOut(500);
}

// $( window ).on( "click", function() {
//     console.log( "window loaded" );
// });


// var furniture_value = (furniture.getAttribute('data-furniture'));
// var x = document.getElementsByClassName(`${furniture_value}`);
//   x[0].onclick = function() {
//    alert(hello)
//   }


