
let fullName = prompt("Lütfen isminizi giriniz")

let showName = document.querySelector('#myName')
showName.innerHTML = fullName;

let clock = document.querySelector(".clock")
let clock2 = document.querySelector("#myClock2")


digitalsaat()

function digitalsaat()

            {
               let gunler = [
                  "Pazar",
                  "Pazartesi",
                  "Salı",
                  "Çarşamba",
                  "Perşembe",
                  "Cuma",
                  "Cumartesi",
               ]

               let suan = new Date();

               let gun = suan.getDay();

               let dsaat = suan.getHours();

               let ddak = suan.getMinutes();

               let sny = suan.getSeconds();

               let saaat = dsaat + ':' + ((ddak<10) ? '0' : '') + ddak + ':' + ((sny<10) ? '0' : '') + sny +" "+ gunler[gun] ;

               var endDate = new Date("May 14, 2023 08:00:00").getTime();
              
               setInterval(function(){
                  let now = new Date().getTime()
                  let t = endDate - now
   
                  if (t >= 0) {
                     let gunler = Math.floor(t / (1000 * 60 * 60 * 24))
                     let saatler = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                     let dakikalar = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
                     let saniyeler = Math.floor((t % (1000 * 60)) / 1000);
   
                     document.getElementById("timer-gunler").innerHTML = gunler + 
                     "<span class='label'> gün</span>";
          
                     document.getElementById("timer-saatler").innerHTML= ("0" + saatler).slice(-2) +
                     "<span class='label'> sa</span>";
          
                     document.getElementById("timer-dakikalar").innerHTML= ("0" + dakikalar).slice(-2) +
                     "<span class='label'> dk</span>";
          
                     document.getElementById("timer-saniyeler").innerHTML= ("0" + saniyeler).slice(-2) +
                     "<span class='label'> sn</span>";
                  }else {
   
                     document.getElementById("timer").innerHTML = "O Gün Bugün Arkadaşlar Saldırın!";
                  
                 }
   
                 
               },1000)
              let electionDay = 49
              
              let electionMinute = 60

              let asd = electionMinute - ddak
              let electionTime =  electionDay - (gun + 1) 

               clock.innerHTML = saaat 
               clock2.innerHTML = electionTime

               setTimeout("digitalsaat()", 1000); 

            }
     