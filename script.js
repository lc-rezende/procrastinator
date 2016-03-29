$(document).ready(function(){
  $("button").click(function(){
    var imgAddress = $("#logo-address").val();
    var sec = $("#seconds").val();
    var percentPerSecond = Number((100/sec).toFixed(2));
    var elem = document.getElementById("progress-bar");
    var etc = sec;

    $(".header-setup .container .jumbotron").slideToggle("slow");
    $(".process-run").fadeTo("slow", 1);
    $(".process-run .jumbotron .logo").append('<img src="' + imgAddress + '">');

    var width = 0;
    var var1 = 4;
    var var2 = 2;
    var var3 = 0;
    var var4 = 5;
    var var5 = 0;
    var var6 = 3;
    var var7 = 0;
    var var8 = 0;

    var inter = setInterval(increment, 1000);

    function increment(){
        if (width <= 100) {
          elem.style.width = width + "%";
          $("#perc").html(width.toFixed(2));

          $("#var1").html(var1);
          $("#var2").html(var2);
          $("#var4").html(var4);
          $("#var6").html(var6);
          $("#etc").html(etc--);

          var1 += 17;
          var2 += 13;
          var4 += 19;
          var6 += 15;

          width += percentPerSecond;
        }
        else {
          width = 100;
          elem.style.width = width + "%";
          $("#perc").html(width.toFixed(2));
          $("#etc").html(0);
          clearInterval(inter);
        }
    };

  });
});
