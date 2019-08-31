var index = 0;
var pic1 = "https://res.cloudinary.com/dqzqcuqf9/image/fetch/https://d2u3kfwd92fzu7.cloudfront.net/catalog/artwork/gallery/1805/Schiele_Nude_Boy__Self_Portrait_.jpg";
var pic2 = "https://upload.wikimedia.org/wikipedia/commons/3/3f/Egon_Schiele_079.jpg";
var pic3 = "https://4.bp.blogspot.com/-S9-AH8V-Hyc/VjPCWdemU7I/AAAAAAAABuY/kC1MMG2XIv0/s1600/egon_schiele_mutter_mit_2_kindern_iii_4473.jpg";
var pictures = [pic1, pic2, pic3];

document.addEventListener("keydown",keyBoardControl);

function rotate(value){
  if(index==0 && value<0){
    index = 2;
    
  }
  else if(index==2 && value>0){
    index=0;
    
  }
  else{
    index +=value;
  }
  document.getElementById("rotate").src = pictures[index];
}

function keyBoardControl(event){
  var x = event.keyCode;
  if(x==39){
    //move right
   
   rotate(1);
    console.log("Right: " + index);
    //document.getElementsByTagName("body").style.backgroundColor = red;
  }
  
  if(x==37){
    //move left

    rotate(-1);
    console.log("Left: " + index);

  }
  else{
    return;
  }
}
