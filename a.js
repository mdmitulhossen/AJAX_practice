document.getElementById('button').addEventListener('click',loadText);

function loadText(){
      
      var xhr = new XMLHttpRequest();
      //Open(type,url/file,async)

      xhr.open('GET','sample.txt',true);

      xhr.onload = function(){
            if(this.status==200){
                 // console.log(this.responseText);
                 document.getElementById('text').innerHTML=this.responseText;
            }
      }

      // xhr.onreadystatechange = function(){
      //       if(this.readyState==4 && this.status==200){
      //             console.log(this.responseText);
      //       }
      // };

      //Send request

      xhr.send();

}

//readystate Values

// 0: request not initialized
// 1: server connection establish
// 2: request recieved
// 3: proccessing request
// 4: request finished and response ios ready

// status
// 200: oK 
// 403: forbidden
// 404: Not Found