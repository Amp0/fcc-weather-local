$(document).ready(function () {
  // API KEY : &APPID=5975571933f7250f571be61da5667d3f
  navigator.geolocation.getCurrentPosition(function(position) {
    /* $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
  }); */

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&appid=5975571933f7250f571be61da5667d3f", function(data) {
      $(".city").text(data.name);
      var icon = "";
      switch(data.weather[0].main) {
        case "Clouds":
          icon = "fa-cloud";
          break;
        default:
          break;
      }
      $(".logoWeather").html("<i class='fa "+icon+"' aria-hidden='true'>");
      $(".weatherDescription").text(data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1));
    });
  });
});
