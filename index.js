$(document).ready(function(){
    $("#btn-hid").hide();
    $("#btn").click(function(){
        $("#btn-hid").show();
    });
});

function Clicked(){
    $("#alert-info").toggle();
}