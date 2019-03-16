// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    amount={};

  if ( ((currency <10000)&&(currency >= 50))||(currency%50)<0||((currency%50)%25)<0||(((currency%50)%25)%10)<0||((((currency%50)%25)%10)%5)<0  ){
    if(((Math.floor(currency/50)))!=0){
        amount.H=( (Math.floor(currency/50)) );
    }
  }
  if ( ((currency <10000)&&(currency >= 50))||(currency%50)>0||((currency%50)%25)<0||(((currency%50)%25)%10)<0||((((currency%50)%25)%10)%5)<0  ){
    if((Math.floor( (currency%50)/25))!=0 ){ 
        amount.Q=( (Math.floor( (currency%50)/25)) ); 
    }  
  }  
 if ( ((currency <10000)&&(currency >= 50))||(currency%50)>0||((currency%50)%25)>0||(((currency%50)%25)%10)<0||((((currency%50)%25)%10)%5)<0  ){
    if((Math.floor(( ((currency%50)%25))/10 ) )!=0){
        amount.D=( (Math.floor(( ((currency%50)%25))/10)) );
    }    
 }
  if ( ((currency <10000)&&(currency >= 50))||(currency%50)>0||((currency%50)%25)>0||(((currency%50)%25)%10)>0||((((currency%50)%25)%10)%5)<0  ){
    if((Math.floor((((currency%50)%25)%10)/5))!=0){
        amount.N=( (Math.floor((((currency%50)%25)%10)/5)) );
    }
  }
  if ( ((currency <10000)&&(currency >= 50))||(currency%50)>0||((currency%50)%25)>0||(((currency%50)%25)%10)>0||((((currency%50)%25)%10)%5)>0  ){
    if((Math.floor(((((currency%50)%25)%10)%5)/1))!=0&&(currency <10000)){
        amount.P=( (Math.floor(((((currency%50)%25)%10)%5)/1)) );
    }
  }
 if(currency>10000){
    amount.error='You are rich, my friend! We don\'t have so much coins for exchange'
  }
 return amount;
}