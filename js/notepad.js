//window.localStorage.clear()
//password generator
  //var val = Math.floor(1000 + Math.random() * 9000);
  //document.getElementById("password").value = Math.floor((Math.random() * 9000) + 1000);
  //function tokengen(){
    let token = [7621, 5726, 7702, 3845, 8146, 6188, 1713, 4279, 2647, 8619, 9668, 9310, 4160, 9365, 4192, 2828, 7156, 9416, 8428, 2938, 5033, 5183, 1335, 9753, 6758, 6519, 1965, 6761, 2730, 2703, 2829, 4971, 3227, 9431, 6245, 3725, 1292, 9069, 4831, 7783, 7556, 1684, 7813, 7200, 7072, 2336, 4403, 1337, 4321, 7837, 1191, 8846, 5933, 1648, 7235, 6587, 4489, 5024, 9190, 2493, 6482, 9868, 2449, 5688, 4013, 1719, 4054, 2244, 5752, 4415, 1832, 3601, 6219, 9780, 4706, 1303, 3603, 7710, 3271, 5684, 8834, 8732, 1013, 3036, 3195, 5468, 7136, 2940, 1442, 6889, 1839, 8258, 5205, 8280, 8988, 8122, 5251, 1103, 7571, 2656, 5272, 3568, 4739, 1932, 8457, 9721, 1117, 4905, 9849, 7187, 8341, 3071, 9291, 3286, 3168, 5739, 5933, 2663, 1581, 2422, 4117, 3323, 1250, 6613, 1546, 9280, 5081, 4990, 2742, 3327, 7693, 2753, 3881, 7118, 5138, 3802, 7302, 7957, 8347, 2153, 6161, 9428, 9060, 8139, 5194, 9602, 2888, 4448, 4352, 4545, 1195, 7380, 7322, 7960, 5007, 2520, 2794, 5688, 5876, 6653, 4682, 5574, 7676, 8806, 9891, 5016, 3177, 4977, 1807, 4080, 7275, 6997, 2101, 5612, 7739, 2269, 4140, 3651, 3524, 1539, 2891, 1874, 9046, 6835, 3453, 7187, 4862, 8732, 8761, 5777, 1503, 6979, 7069, 3654, 9994, 1975, 1232, 9573, 3337, 5539, 7237, 8991, 4140, 6505, 6661, 4265]
    var n = document.getElementById("yellow"); 
    let poll = document.getElementById("votecount")
    function confirmToken(){     
     if (yolo=token.includes(parseInt(n.value))){
        /*removing the used token from pool
       var index = token.indexOf(n.value);
        if (index >= 0) {
        token.splice( index, 1 );
      }*/
       document.getElementById("ct").innerHTML= "<p style='margin: 5%; text-align:center; font-size: 36px'> Token confirmed </p>"  
       setTimeout(hideShow, 2000)
     } else{
      document.getElementById("ct").innerHTML= "<p style='color: red; text-align:center; margin: 5%; border: 1px solid white; font-size: 21px'> Contact the admin for a valid voting token </p>"
     }
      
    }
    /*console.log(token.length)
    let elements = "";
    for (i=0; i<206; i++){
      var tkn = Math.floor((Math.random() * 9000) + 1000);
      //document.getElementById('token').value = tkn
      token.push(tkn)
    }   
    for (x in token){
    elements +=token[x] + "," + "";
    }
    document.getElementById("getget").innerHTML =elements;           
  //}*/
 
  //Time display 
  var timeDisplay = document.getElementById("timer");
  function refreshTime() {
    var dateString = new Date().toLocaleString();
    var formattedString = dateString.replace(", ", " - ");
    timeDisplay.innerHTML = formattedString;
    }
    setInterval(refreshTime, 1000);
  //display vote area
  function hideShow() {
    var T = document.getElementById("mainvote");
    T.style.display = "block";  // <-- Set it to block
  }

  //hide and show token generated
  function hideShow1() {
    var x = document.getElementById("mainvote");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
   
  function vote(){
    var A = getALStorage(); 
    var B = getBLStorage(); 
    //var C = getCLStorage(); 
    //var D = getDLStorage(); 
    var selection = document.getElementById('Chairman').value;
    
    //var selection = chairman.options[chairman.selectedIndex].value;  

    if (selection=='candidateA'){
      A.push(n.value)
      localStorage.setItem("a1", JSON.stringify(A) );
    }else if (selection=='candidateB'){
      B.push(n.value)
      localStorage.setItem("b1", JSON.stringify(B) );    
    }
    /*else if (selection=='candidateC'){
      C.push(n.value)
      localStorage.setItem("c1", JSON.stringify(C) );
    }else if (selection=='candidateD'){
      D.push(n.value)
    localStorage.setItem("d1", JSON.stringify(D) );
    }*/
    document.getElementById("farewell").innerHTML= "<p style='margin: 5%; text-align:center; font-size: 36px'> Thanks for voting </p>"  
       setTimeout(hideShow1, 2000)
  }
 //get A vote from local storage
 function getALStorage(){
    const getA = JSON.parse(localStorage.getItem('a1'));
    //check if vote
    if(!getA || getA.length <1){
      return [];
    }else{
      return getA
    }

 }

 function getBLStorage(){
  const getB = JSON.parse(localStorage.getItem('b1'));
  //check if vote
  if(!getB || getB.length <1){
    return [];
  }else{
    return getB
  }
}

/*function getCLStorage(){
  const getC = JSON.parse(localStorage.getItem('c1'));
  //check if vote
  if(!getC || getC.length <1){
    return [];
  }else{
    return getC
  }

}
function getDLStorage(){
  const getD = JSON.parse(localStorage.getItem('d1'));
  //check if vote
  if(!getD || getD.length <1){
    return [];
  }else{
    return getD
  }

}*/

poll.innerHTML = "Adekunle Ogunjimi: "+ getALStorage().length +" votes" +"</br>" + "Agoro Moshood: "+ getBLStorage().length +" votes" +"</br>"

/*
 (function (){
    poll.innerHTML = "Adekunle Ogunjimi: "+ getALStorage().length +"votes" +"</br>" + "Umar Kabo Idis: "+ getBLStorage().length +"votes" + "</br>" + "Razak Owolabi: "+ getCLStorage().length +"votes" +"</br>"+ "Agoro Moshood: "+ getDLStorage().length +"votes" +"</br>"
 })*/