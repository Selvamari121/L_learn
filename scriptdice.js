function rollDice() {
   const numOfDice = document.getElementById("numOfDice").value;
   const diceResult = document.getElementById("diceResult");
   const diceImg = document.getElementById("diceImg");
 
   const values = [];
   const images = [];
 
   for (let i = 0; i < numOfDice; i++) {
     const value = Math.floor(Math.random() * 6) + 1;
     values.push(value);
     images.push(`<img src="diceimg/${value}.jpg" alt="Dice ${value}">`);
   }
 
   diceResult.textContent = `Dice: ${values.join(', ')}`;
   diceImg.innerHTML = images.join('');
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 /*function rollDice(){
  // var dice1 = Math.floor(Math.random() * 6) + 1;
  const numOfDice=document.getElementById("numOfDice").value;
  const diceResult=document.getElementById("diceResult");
  const diceImg=document.getElementById("diceImg");


  
  const values=[];
  const images=[];

 for(let i=0;i<numOfDice;i++){
   const value=Math.floor(Math.random()*6)+1;
   values.push(value);
   images.pudh(`<img src="diceimg/${value}.jpg" alt="Dice ${values}>`);
  }
  //console.log(values);
  diceResult.textContent=`Dice: ${values.join(',')}`;
  diceImg.innerHTML=images.join('');

}*/





/*function rollDice() {
    const numOfDice = document.getElementById('numOfDice').value;
    const diceResult = document.getElementById('diceResult');
    const diceImg = document.getElementById('diceImg');
    
    diceResult.innerHTML = ''; // Clear previous results
    diceImg.innerHTML = ''; // Clear previous images

    let total = 0;

    for (let i = 0; i < numOfDice; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        total += roll;
        
        // Display dice roll result as text
        diceResult.innerHTML += `Dice ${i+1}: ${roll}<br>`;

        // Display dice roll result as image
        const img = document.createElement('img');
        img.src = `dice${roll}.png`; // Assumes you have dice1.png to dice6.png images
        img.alt = `Dice ${roll}`;
        img.style.width = '50px';
        img.style.height = '50px';
        diceImg.appendChild(img);
    }
    
    diceResult.innerHTML += `<br>Total: ${total}`;
}
*/