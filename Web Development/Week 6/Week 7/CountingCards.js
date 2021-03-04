var count = 0;

function cc(card) {
    if(card>=2 && card<=6){
    count = count+1;
  }
    else if(card==10 || card=='J' || card=='Q' ||card=='K' || card=='A'){
  count = count-1;
  }
  else if(card>=7 && card<=9){
    count = count+0;
  }

 

  if(count>0){
    return count+" Bet";
  }
  else{
      return count +" Hold"
  }
  // Only change code above this line
}
  // Only change code above this line


cc(2); cc(3); cc(7); cc('K'); cc('A');
