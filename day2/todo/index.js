
$("#btn").on("click", function () {



    console.log(task)
  
    var par = $("<div style='width:100% ;margin:2px;border:2px solid grey ;' class='pa'>  <button type='button' style='width:10%;' id='delbtn'> delete </button> </div>")
  
  
  
    var task = document.createTextNode($("#input").val())
    console.log(task)
    par.append(task)
    console.log(par)
  
  
  
    $("#newtasks").append(par)
    
  
    var delbtn = $("#delbtn")
    console.log(delbtn[0])
  
  
  })
  
  
  $("#newtasks").on("click", "button", "", function (e) {
    console.log(this)
  
    $(this).parent().remove()
  
    console.log("delegation done")
  });
  
  