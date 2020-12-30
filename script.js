function showTime(){
   let sat = document.getElementById('sat');
   if(sat.textContent.includes('23:59')){
       let sekundeFejk = sat.textContent.substring((sat.textContent.lastIndexOf(':')+1), sat.textContent.length);
       sat.textContent = sat.textContent.substring(0,sat.textContent.lastIndexOf(':')+1)+(parseInt(sekundeFejk)+1);
   }
   else
  {
    let vreme = new Date();
    let sati = vreme.getHours();
    let minuti = vreme.getMinutes();
    let sekunde = vreme.getSeconds();
    if(sati < 10){
        sati = '0'+sati;
    }
    if(sekunde<10){
        sekunde = '0'+sekunde;
    }
    if(minuti<10){
        minuti = '0'+minuti;
    }
    sat.textContent = `${sati}:${minuti}:${sekunde}`;
  }
  setTimeout(showTime,1000);
}
showTime();