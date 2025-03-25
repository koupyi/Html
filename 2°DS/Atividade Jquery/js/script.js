
$("#alt2").hide();
$("#alt3").hide();
$("#dsc2").hide();
$("#dsc3").hide();


$("#alt1").click(function () {
    $("#link").attr({
        "href" : "https://etecitu.cps.sp.gov.br",
        "title" : "Etec itu"
    });
    $("#link").text("Etec itu");
    $("#alt1").hide();
    $("#alt2").show();
    $("#dsc1").hide();
    $("#dsc2").show();
});

$("#alt2").click(function () {
    $("#link").attr({
        "href" : "https://fatecitu.cps.sp.gov.br/",
        "title" : "Fatec itu"
    });
    $("#link").text("Fatec Itu");
    $("#alt2").hide();
    $("#alt3").show();
    $("#dsc2").hide();
    $("#dsc3").show();
});

$("#alt3").click(function () {
    $("#link").attr({
        "href" : "https://www.cps.sp.gov.br/",
        "title" : "cps"
    });
    $("#link").text("Centro paula souza");
    $("#alt3").hide();
    $("#alt1").show();
    $("#dsc3").hide();
    $("#dsc1").show();
});