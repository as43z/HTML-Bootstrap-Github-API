$(document).ready(function(){
    $("input:text").val("Input a valid name...");
    $("#user-inp").click(function(){
        $("input:text").val("");
    });
    $("#btn").click(function(){
        $("input:text").val("ASD");
    });
});

//function Clicked(){
//    $("#alert-info").toggle();
//}

//function onSelect(){
//    $("input:text").val("");
//}