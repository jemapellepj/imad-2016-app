console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='New Value';
 var img=document.getElementById('madi');
 var marginLeft=0;
 var moveRight=function(){
     marginLeft=marginLeft +10;
     img.style.maginLeft=marginLeft +'px';
 };
 img.onclick=function(){
  var interval=setInterval(moveRight,100)   
 };