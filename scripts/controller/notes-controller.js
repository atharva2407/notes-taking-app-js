//Controller (I/O)+Event + Talk to server


import{noteOperation} from '../services/note-services.js'
window.addEventListener('load',init);
function init(){

    showCounts();
    bindEvents();
    disableButton();
}
 //never write  
    //<i class="fa-solid fa-trash"></i>
    //<i class="fa-solid fa-trash"></i> 
    //this line in a code just generate these lines in a code
const enableButton=()=>
    document.querySelector('#delete').disabled=false;

const disableButton=()=>
    document.querySelector('#delete').disabled=true;

//const disabledButton=()=>
    //document.querySelector('#search').disabled=true;

//const enabledButton=()=>
  //  document.querySelector('#search').disabled=false;

function printIcon(myClassName='trash',fn,id){
    const iTag = document.createElement(`i`);
    //setAttribute is used to create their own attribute

    iTag.setAttribute('note-id',id);
    iTag.className = `fa-solid fa-${myClassName} me-5 hand`;
    iTag.addEventListener(`click`,fn);

    return iTag;
}


function toggleMark(){
    //console.log('Toggle Mark...',this);
    const icon = this;
    const id = this.getAttribute('note-id');
    noteOperation.toggleMark(id);
    const tr = icon.parentNode.parentNode;
    tr.classList.toggle('table-danger');
    showCounts();
}



function edit(){
   console.log('Edit...');
}


function deleteMarked(){
    noteOperation.remove();
    printNotes(noteOperation.getNote());
}


function bindEvents(){
    document.querySelector(`#add`).addEventListener(`click`,addNote);
    document.querySelector(`#delete`).addEventListener(`click`,deleteMarked);
}


function showCounts(){
    noteOperation.marktotal()>0?enableButton():disableButton();
   // noteOperation.marktotal()>0?enabledButton():disabledButton();
    document.querySelector(`#total`).innerText=noteOperation.total();
    document.querySelector(`#marktotal`).innerText=noteOperation.marktotal();
    document.querySelector(`#unmarktotal`).innerText=noteOperation.unmarktotal();

}


function addNote(){
    //read id, title , desc , date of completion
    //DOM


   const fields =['id' , 'title' , 'desc' , 'complete' , 'importance'];
   const noteObject = {};  //object literal
   for(let field of fields){
    noteObject[field] = document.querySelector(`#${field}`).value;
   }


   // const id = document.querySelector('#id').value;
   // const id = document.querySelector('#title').value;

   noteOperation.add(noteObject);
   printNote(noteObject);
   showCounts();
}


function printNotes(notes){
    const tbody = document.querySelector(`#notes`);
    tbody.innerHTML = '';
    notes.forEach(note =>printNote(note));

    showCounts();
}


function printNote(noteObject){
    const tbody = document.querySelector('#notes');
    const row = tbody.insertRow();  //<tr>
    for(let key in noteObject) {
        if(key =='isMarked'){
            continue;
        }
        const td = row.insertCell(); //<td>
        td.innerText = noteObject[key];
    }
    const td = row.insertCell(); //Const is used to create new block
    td.appendChild(printIcon('trash', toggleMark , noteObject.id));
    td.appendChild(printIcon(`user-pen`, edit , noteObject.id ));
}