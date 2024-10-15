
const  ul= document.querySelector('ul')
const novaTarefa = document.getElementById('novaTrf');

function adicionarTarefa(){
  //valida a tarefa 


   if(novaTarefa.value == ''){
    return
   };
    
   const barraTrf= document.createElement('div');
   barraTrf.classList.add('trfs')


 //check
   const check = document.createElement('input');
     check.type= 'checkbox';
     check.classList.add('check')
     
// li 
     const li= document.createElement('li');
     li.textContent = novaTarefa.value  
//edit
     
    const btnEdit= document.createElement('button');
    btnEdit.classList.add('btnEdit')
    btnEdit.addEventListener('click', ()=>{ 
       
    const trfEdit= document.createElement('input');
    li.textContent = prompt('Edite a Tarefa') ;

   });
   
//remove 
   const btnRemove= document.createElement('button');
   btnRemove.classList.add('remover')
   btnRemove.addEventListener('click',()=>{
    barraTrf.remove()
   } );
novaTarefa.value = '';

  
     barraTrf.appendChild(btnRemove)
     barraTrf.appendChild(btnEdit)
     barraTrf.appendChild(li)
     barraTrf.prepend(check)
     ul.appendChild(barraTrf)

};
