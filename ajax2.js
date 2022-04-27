document.getElementById('button1').addEventListener('click',loadUser);
document.getElementById('button2').addEventListener('click',loadUsers);

//user
function loadUser(){
      const xhr = new XMLHttpRequest();

      xhr.open('GET','user.json',true);

      xhr.onload = function(){
            if(this.status==200){
                  
                   let user =  JSON.parse(this.responseText);
                  
                   let output = "";
                   output+=`<ul>
                               <li>ID: ${user.id}</li>
                               <li>Name: ${user.name}</li>
                               <li>Email: ${user.email}</li>
                           </ul>`

                  document.getElementById('user').innerHTML=output;
            }
      }
      xhr.send();
}


//users

function loadUsers(){
      const xhr = new XMLHttpRequest();

      xhr.open('GET','users.json',true);

      xhr.onload = function(){
            if(this.status==200){
                  
                   let users =  JSON.parse(this.responseText);
                  
                   let output = "";
                   for(let i in users){
                        output+=`<ul>
                             <li>ID: ${users[i].id}</li>
                              <li>Name: ${users[i].name}</li>
                              <li>Email: ${users[i].email}</li>
                        </ul>`
                   }
                   

                  document.getElementById('users').innerHTML=output;
            }
      }
      xhr.send();
}