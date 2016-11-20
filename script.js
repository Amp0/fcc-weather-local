$(document).ready(function () {
  // API KEY : &APPID=5975571933f7250f571be61da5667d3f
  var temp_F = 0;
  var temp_C = 0;
  navigator.geolocation.getCurrentPosition(function(position) {
    /* $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
  }); */

    $.getJSON("https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&appid=5975571933f7250f571be61da5667d3f&units=metric", function(data) {
      $(".city").text(data.name);
      $(".logoWeather").html("<i class='owf owf-"+data.weather[0].id+"'>");
      $(".weatherDescription").text(data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1));
      $(".weatherTemp").text(data.main.temp+"°C");
      temp_C = data.main.temp;
      temp_F = data.main.temp*9/5+32;
      $(".btn-change").css("display", "block");
    });



  });
  $('.btn-change').click(function () {
    if($(".btn-change").text() == "Swap to Fahrenheit"){
      $(".weatherTemp").text(temp_F+"°F");
      $(".btn-change").text("Swap to Celcius");
    } else {
      $(".weatherTemp").text(temp_C+"°C");
      $(".btn-change").text("Swap to Fahrenheit");
    }
  });
});
