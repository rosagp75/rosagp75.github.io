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

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
      // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
  });

  const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=58f3ede8a932ca945faf8e7bf4d71898';
  fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);   
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
      // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
  });
