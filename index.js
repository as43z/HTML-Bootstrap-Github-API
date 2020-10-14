$(document).ready(function(){
    $("#profile-pic").hide();
    $("#user-inp").val("Input a valid name...");
    $("#user-inp").click(function(){
        $("#user-inp").val("");
    });
    $("#btn").click(function(){
        if($("#user-inp").val()=="Input a valid name..."){
            $("#alert-info-bad").show();
        } else if ($("#user-inp").val()==""){
            $("#alert-info-bad").fadeIn();
        } else {
            $("#help").hide();
            //remove any prevoius entry
            $("#table tbody tr").remove();
            $("#table").show();
            $("#profile-pic").show();
            $("#uname").show();
            $("#name").show();
            $("#follw").show();
            $("#follwing").show();
            $.get("https://api.github.com/users/" + $("#user-inp").val(), function(g){
                //PROFILE PIC
                $("#profile-pic").attr("src", g.avatar_url);
                $("#profile-pic").attr("height", "200px");
                $("#profile-pic").attr("width", "200px");

                //DATA FROM USER
                $("#uname").text("Username: " + g.login);
                $("#name").text("Name: " + g.name);
                $("#follw").text("Followers: " + g.followers);
                $("#follwing").text("Following: " + g.following);

                //TABLE
                $.get("https://api.github.com/users/" + $("#user-inp").val() + "/repos", function(g){
                    $.each(g,function(i, g){
                        repo=g.name;
                        des=g.description;
                        lang=g.language;

                        if(des == null){
                            des = "no description"
                        }

                        prep = '<tr> <td> <a href="'+ g.html_url + '"</a>' + repo + "</td> <td>" + des + "</td> <td>" + lang + "</td> </tr>";
                        $("#table").append(prep);
                    })
                })

                //SUCCESS
                $("#alert-info-ok").fadeIn();
            })
        }
    });
});

//dead functions might be useful later on
//function Clicked(){
//    $("#alert-info").toggle();
//}

//function onSelect(){
//    $("input:text").val("");
//}