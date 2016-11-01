var xhr = new XMLHttpRequest();
xhr.open('POST','/ajax/driver_recommend.php',true);
xhr.onreadystatechange=function(){
  if(xhr.readyState==4 && xhr.status==200){
    var data = JSON.parse(xhr.responseText);
    if(data.ret_code==200 && data.is_new==true){
      document.getElementById('remove').style.display='none';
      document.getElementById('new').style.display='block';
      //document.getElementById('number').innerHTML=cellphone;
    }else if(data.ret_code==200 && data.is_new==false){
      document.getElementById('remove').style.display='none';
      document.getElementById('old').style.display='block';
    }else{
      alert(data.ret_msg);
    }
  }
}
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');  
xhr.send("cellphone="+ cellphone + "&driver_id="+ driver_id + "&sc="+ sc);