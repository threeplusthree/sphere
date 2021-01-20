var calculate=function(mode,val){
  var r,s,v;
  if(mode==='반지름'){
    r=val;
    s=4*3.14159*r*r;
    v=4/3*3.14159*r*r*r;
    document.getElementById('res').innerHTML="겉넓이: "+s+"<br/>부피: "+v;
  }
  if(mode=='겉넓이'){
    s=val;
    r=(s/4/3.14159)**(1/2);
    v=4/3*3.14159*r*r*r;
    document.getElementById('res').innerHTML="반지름: "+r+"<br/>부피: "+v;
  }
  if(mode=='부피'){
    v=val;
    r=(v*3/4/3.14159)**(1/3);
    s=4*3.14159*r*r;
    document.getElementById('res').innerHTML="반지름: "+r+"<br/>겉넓이: "+s;
  }
}
var t=0;
var changetheme=function(){
  var o=document.getElementsByClassName('change')
  var i=0;
  if(t===0){
    while(i<o.length){
      o[i].style.color='white';
      o[i].style.backgroundColor='black';
      i=i+1;
    }
    t=1;
  }
  else{
    while(i<o.length){
      o[i].style.color='black';
      o[i].style.backgroundColor='white';
      i=i+1;
    }
    t=0;
  }
}
