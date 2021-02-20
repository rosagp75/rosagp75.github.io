const requestURL = 'https://rosagp75.github.io/scootsSite/data/pricesrentals.json';
fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        console.table(jsonObject); 
        const renta = jsonObject['rentals']; 

      for (let i = 0; i < renta.length; i++ ){
        if (i==0){
        document.getElementById('max0').innerHTML = renta[i].max; 
        document.getElementById('pre0-1').innerHTML = renta[i].ReservationHalfDay; 
        document.getElementById('pre0-2').innerHTML = renta[i].ReservationFullDay; 
        document.getElementById('pre0-3').innerHTML = renta[i].WalkHalfDay; 
        document.getElementById('pre0-4').innerHTML = renta[i].WalkFullDay;
        }
        if (i==1){
          document.getElementById('max1').innerHTML = renta[i].max; 
          document.getElementById('pre1-1').innerHTML = renta[i].Reservation-Half-Day; 
          document.getElementById('pre1-2').innerHTML = renta[i].Reservation-Full-Day; 
          document.getElementById('pre1-3').innerHTML = renta[i].Walk-Half-Day; 
          document.getElementById('pre1-4').innerHTML = renta[i].Walk-Full-Day;
          }

        if (i==2){
            document.getElementById('max2').innerHTML = renta[i].max; 
            document.getElementById('pre2-1').innerHTML = renta[i].Reservation-Half-Day; 
            document.getElementById('pre2-2').innerHTML = renta[i].Reservation-Full-Day; 
            document.getElementById('pre2-3').innerHTML = renta[i].Walk-Half-Day; 
            document.getElementById('pre2-4').innerHTML = renta[i].Walk-Full-Day;
            }
        if (i==3){
            document.getElementById('max3').innerHTML = renta[i].max; 
            document.getElementById('pre3-1').innerHTML = renta[i].Reservation-Half-Day; 
            document.getElementById('pre3-2').innerHTML = renta[i].Reservation-Full-Day; 
            document.getElementById('pre3-3').innerHTML = renta[i].Walk-Half-Day; 
            document.getElementById('pre3-4').innerHTML = renta[i].Walk-Full-Day;
            }
        if (i==4){
              document.getElementById('max4').innerHTML = renta[i].max; 
              document.getElementById('pre4-1').innerHTML = renta[i].Reservation-Half-Day; 
              document.getElementById('pre4-2').innerHTML = renta[i].Reservation-Full-Day; 
              document.getElementById('pre4-3').innerHTML = renta[i].Walk-Half-Day; 
              document.getElementById('pre4-4').innerHTML = renta[i].Walk-Full-Day;
            }
        if (i==5){
              document.getElementById('max5').innerHTML = renta[i].max; 
              document.getElementById('pre5-1').innerHTML = renta[i].Reservation-Half-Day; 
              document.getElementById('pre5-2').innerHTML = renta[i].Reservation-Full-Day; 
              document.getElementById('pre5-3').innerHTML = renta[i].Walk-Half-Day; 
              document.getElementById('pre5-4').innerHTML = renta[i].Walk-Full-Day;
            }
      }
});
