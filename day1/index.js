var n=0;

function countup() {
    console.log(`n=${n}`)
    if (n < 2) { n = n + 1 }
    else { n = 0 }

    return n;

}

$("#slidecont").css("border","5px solid blue");


$("h2").css("text-align","center");


 var imgs =$(".img")


 console.log(imgs)
 console.log(imgs.get(n))
var setint;

$(function(){ 

setint=setInterval(swap,1000)

function swap (){
    $("#album").empty()

$("#album").append(imgs.get(n))

$(imgs.get(n)).css("display","") 

 
 countup()

}

});


function stop(){
    clearInterval(setint)
}



 
$("#btn").on("click",stop)


$("#photo1").on("click",function(){

    console.log(photo1)


$("#img1").slideToggle(500)
console.log($("this").next())


})

$("#photo2").on("click",function(){

    console.log(photo2)


$("#img2").slideToggle(500)
console.log($("this").next())


})

$("#photo3").on("click",function(){

    console.log(photo3)


$("#img3").slideToggle(500)
console.log($("this").next())


})

