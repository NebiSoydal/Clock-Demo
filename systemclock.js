let kullaniciadi = prompt("Kullanıcı Adınızı Giriniz");
let myName = document.querySelector("#myName");
myName.innerHTML = kullaniciadi;

//function Zaman ()
////{
   // let anlık = new Date () ;
      //  let saat = anlık.getHours();
    //    let dakika = anlık.getMinutes();
    //    let sanıye = anlık.getSeconds();

   // var day = new date () ;
       // var day = ("Pazartesi", "Salı","Çarşamba", "Perşembe","Cuma","Cumartesi","Pazar");

   // let yazdırma = document.querySelector("#myClock")
   // yazdırma.innerHTML = saat + dakika + sanıye + ""+ gunler[d.getDay()];


 //}
 //let simdi = setInterval(zaman,100); 
 
 let name;
 name = document.querySelector("#myName");
 name.innerHTML = prompt("Name?","Nebı Soydal");
 
 function showTime(){
     let clock = new Date();
     clock = clock.toLocaleTimeString();
     document.querySelector("#myClock").innerHTML = clock;
     setTimeout(showTime , 1000);
    }
