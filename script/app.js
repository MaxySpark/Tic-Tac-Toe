//default values
var counter = 0;
var repeatFlag = true;
var firstCount = 0;
var seconCount = 0;
var fName = "First Player";
var sName = "Second Player";
console.log(fName);

function clickCell1(){
    counter = 1;
}

function clickCell2(){
    counter = 2;
}

function clickCell3(){
    counter = 3;
    
}

function clickCell4(){
    counter = 4;
}

function clickCell5(){
    counter = 5;
}

function clickCell6(){
    counter = 6;
}

function clickCell7(){
    counter = 7;
}

function clickCell8(){
    counter = 8;
}

function clickCell9(){
    counter = 9;
}

function disabledClick() {
    $("#stadium").css({"pointerEvents":"none"});
}

disabledClick();

$(".box").click(function() {
//for circle
    if(repeatFlag){
        
    $(this).children(".circle").css({"display":"block"});
    
//    firstCount += counter;
//    console.log("score first player "+firstCount);
    
    $(this).css({"pointerEvents":"none"});
	
    
    repeatFlag = false;
    }
//for cross    
    else {
    $(this).children(".cross").css({"display":"block"});
    
//    seconCount += counter;
//    console.log("score second player "+seconCount);
    
    $(this).css({"pointerEvents":"none"});

    
    repeatFlag = true;
    }
    
    //console.log(repeatFlag);
//    if(firstCount === 12 || firstCount === 13 || firstCount === 15 || firstCount === 22 || firstCount === 24 || firstCount === 25) {
//        
//        console.log("First Player Wins");
//    } else if(seconCount === 12 || seconCount === 13 || seconCount === 15 || seconCount === 22 || seconCount === 24 || seconCount === 25) {
//        console.log("second Player Wins");
//    }
    
});

$("#nameset").click(function() {
    fName = $("#fpname").val();
    sName = $("#spname").val();
    if(fName==='' || sName===''){
        fName="First Player";
        sName="Second Player";
    }
    $("#ffield").html(fName+" - Circle");
    $("#sfield").html(sName+" - Cross");
    $("#resetBtn").css({"display":"inline-block"});
    $(".box").css({"pointerEvents":"auto"});
    repeatFlag = true;
});

$("#startGame").click(function() {
     $(".box > .circle").css({"display":"none"});
     $(".box > .cross").css({"display":"none"});
     
    console.log("new game click");
});

$("#resetBtn").click(function() {
    $(".box > .circle").css({"display":"none"});
     $(".box > .cross").css({"display":"none"});
    $(".box").css({"pointerEvents":"auto"});
    repeatFlag = true;
    console.log("reset click");
});