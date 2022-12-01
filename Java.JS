 var dealerSum=0;
 var yourSum = 0;

 var dealerAceCount=0;
 var yourAceCount=0;

 var hidden;
 var deck;

 var canHit=true; //ger spelaren ett kort

 window.onload=function(){
    buildDeck();
 }

 function buildDeck(){
    let values = ["A", "2","3","4","5","6","7","8","8","9","10","KT","D","K"]
    let types = ["k","R","H","S"]
    deck=[];

    for(let i =0; i< types.length; i++){
        for(let j =0; j< values.length; j++){
            deck.push(values[J] +"-" + types[i])
        }
    }
}
