// Program waktu
const waktu = document.querySelector('.waktu')

const ulangJam = setInterval(function () {
   jam = new Date().getHours()
   menit = new Date().getMinutes()
   detik = new Date().getSeconds()

   waktu.innerHTML = `${jam}:${menit}:${detik}`
}, 1000)

// program timer
const start = document.querySelector('.start');

start.addEventListener('click', () => {

   const jamInput = document.querySelector('#jam');
   const menitInput = document.querySelector('#menit');
   const detikInput = document.querySelector('#detik');
   const timer = document.querySelector('.timer');
   // const detikInput = document.querySelector('#detik')

   const stop = document.querySelector('.stop');
   stop.addEventListener('click', () => {
      clearInterval(hitungMundur);
   });
   const reset = document.querySelector('.reset');
   reset.addEventListener('click', () => {
      totalWaktu -= totalWaktu;
   });

   const jam = jamInput.value;
   const menit = menitInput.value;
   const detik = detikInput.value;

   let totalWaktu = (jam * 3600) + (menit * 60) + detik;

   const hitungMundur = setInterval(function () {
      const jamm = Math.floor(totalWaktu / 3600);
      const menitt = Math.floor((totalWaktu % 3600) / 60);
      const detikk = totalWaktu % 60;

      timer.innerHTML = `${jamm}:${menitt}:${detikk}`;

      if (totalWaktu <= 0) {
         clearInterval(hitungMundur);
         timer.innerHTML = `00:00:00`;
      }
      else {
         totalWaktu--;
      }

   }, 1000);
});

// stopwatch
const stw = document.querySelector('.stw');
const startStw = document.querySelector('.startStw');
const stopStw = document.querySelector('.stopStw');
const resetStw = document.querySelector('.resetStw');

startStw.addEventListener('click', () => {
   let totalWaktu = 0
   stopStw.addEventListener('click', () => {
      clearInterval(mulai)
   })
   resetStw.addEventListener('click', () => {
      stw.innerHTML = `00:00:00`
   })
   const mulai = setInterval(function () {
      totalWaktu++

      const milDet = Math.floor(totalWaktu % 10);
      const detik = Math.floor(totalWaktu / 10) % 60;
      const menit = Math.floor((totalWaktu / 600) % 60);
      const jam = Math.floor(totalWaktu / 36000);
      // const detik = Math.floor(totalWaktu % 600);
      // const milDet = Math.floor(totalWaktu / 10);

      stw.innerHTML = `${jam}:${menit}:${detik}:${milDet}`
   }, 100)
});


// tombol ganti
let currentContainer = 'waktu'; // Container awal yang ditampilkan

function gantiContainer(direction) {
   // Sembunyikan container saat ini
   document.querySelector('.container-' + currentContainer).classList.add('none');

   // Tentukan container berikutnya berdasarkan arah tombol
   if (direction === 'kanan') {
      if (currentContainer === 'waktu') {
         currentContainer = 'timer';
      } else if (currentContainer === 'timer') {
         currentContainer = 'stopwatch';
      } else if (currentContainer === 'stopwatch') {
         currentContainer = 'waktu';
      }
   } else if (direction === 'kiri') {
      if (currentContainer === 'waktu') {
         currentContainer = 'stopwatch';
      } else if (currentContainer === 'stopwatch') {
         currentContainer = 'timer';
      } else if (currentContainer === 'timer') {
         currentContainer = 'waktu';
      }
   }

   // Tampilkan container yang baru
   document.querySelector('.container-' + currentContainer).classList.remove('none');
}
