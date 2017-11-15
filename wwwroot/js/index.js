$(document).ready(function() {


    $(function() {
    $("#login").dialog({
    autoOpen: false
    });
    $("#login-button").on("click", function() {
        $.ajax({url: "home/login/", success: function(result){
            $("#login").html(result);
        }});
    $("#login").dialog("open");
    });
    });

    $(function() {
        $("#register").dialog({
        autoOpen: false
        });
        $("#register-button").on("click", function() {
            $.ajax({url: "home/register/", success: function(result){
                $("#register").html(result);
            }});
        $("#register").dialog("open");
        });
        });


    });
