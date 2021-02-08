const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=58f3ede8a932ca945faf8e7bf4d71898';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    //pass values to local var
    var t=parseFloat(jsObject.main.temp);
    var humidity=parseFloat(jsObject.main.humidity);
    const desc = jsObject.weather[0].description;
    var s=parseFloat(jsObject.wind.speed);
    //calculate chillFactor
    if (t<=50 && s>3){
      f=35.74+(0.6215*t)-(35.75*Math.pow(s,0.16))+(0.4275*t*Math.pow(s,0.16));
    }
    else{
      f="N/A";
    }
    document.getElementById('txtdescripcion').innerHTML = desc; 
    document.getElementById('txttemperatura').innerHTML = t;
    document.getElementById('txthumidity').textContent = humidity;
    document.getElementById('txtspeed').textContent = s;
    document.getElementById('txtfactor').textContent = f;

    //const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
      // note how we reference the weather array
    //document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    //document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    //document.getElementById('icon').setAttribute('alt', desc);
  });

  const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=58f3ede8a932ca945faf8e7bf4d71898';
  fetch(apiURL2)
  .then((response) => response.json())
  .then((forecastObject) => {
      var forecast = forecastObject.list.filter(x => x.dt_txt.includes('18:00:00'));
      console.table(forecast)
      for (let day = 0; day < forecast.length; day++) {
        if (day==0){
          document.getElementById('temp0').innerHTML = forecast[day].main.temp; 
          const imagesrc0 = 'https://openweathermap.org/img/w/' + forecast[day].weather[0].icon + '.png';
          const desc0 = forecast[day].weather[0].description;  // note how we reference the weather array
          document.getElementById('icon0').setAttribute('src', imagesrc0);  // focus on the setAttribute() method
          document.getElementById('icon0').setAttribute('alt', desc0);
        }
        if (day==1){
          document.getElementById('temp1').innerHTML = forecast[day].main.temp;
          const imagesrc1 = 'https://openweathermap.org/img/w/' + forecast[day].weather[0].icon + '.png';
          const desc1 = forecast[day].weather[0].description;  // note how we reference the weather array
          document.getElementById('icon1').setAttribute('src', imagesrc1);  // focus on the setAttribute() method
          document.getElementById('icon1').setAttribute('alt', desc1); 
        }
        if (day==2){
          document.getElementById('temp2').innerHTML = forecast[day].main.temp;
          const imagesrc2 = 'https://openweathermap.org/img/w/' + forecast[day].weather[0].icon + '.png';
          const desc2 = forecast[day].weather[0].description;  // note how we reference the weather array
          document.getElementById('icon2').setAttribute('src', imagesrc2);  // focus on the setAttribute() method
          document.getElementById('icon2').setAttribute('alt', desc2); 
        }
        if (day==3){
          document.getElementById('temp3').innerHTML = forecast[day].main.temp; 
          const imagesrc3 = 'https://openweathermap.org/img/w/' + forecast[day].weather[0].icon + '.png';
          const desc3 = forecast[day].weather[0].description;  // note how we reference the weather array
          document.getElementById('icon3').setAttribute('src', imagesrc3);  // focus on the setAttribute() method
          document.getElementById('icon3').setAttribute('alt', desc3);
        }
        if (day==4){
          document.getElementById('temp4').innerHTML = forecast[day].main.temp;
          const imagesrc4 = 'https://openweathermap.org/img/w/' + forecast[day].weather[0].icon + '.png';
          const desc4 = forecast[day].weather[0].description;  // note how we reference the weather array
          document.getElementById('icon4').setAttribute('src', imagesrc4);  // focus on the setAttribute() method
          document.getElementById('icon4').setAttribute('alt', desc4); 
        }
    }

});

