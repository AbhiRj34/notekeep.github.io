const addButton = document.querySelector('#add');

const  updateLSData = () => {
    const textAreaData = document.querySelectorAll('textarea');
    const notes = [];
   console.log(textAreaData);
    textAreaData.forEach((note) => {
        return notes.push(note.value);
    })
    console.log(notes);

    localStorage.setItem('notes',JSON.stringify(notes));
}

const addNewNote = (text = '') => {
 
    const note = document.createElement('div');
    note.classList.add('note');

    const htmlData = `
    <div class="opration">
       <button class="edit"><i class="fas fa-edit"></i></button>
       <button class="delete"><i class="fas fa-trash"></i></button>
    </div>

   <div class="main ${text ? "" : "hidden" } "> </div>
   <textarea class="${text ? "hidden" : "" }"></textarea> `;

   note.insertAdjacentHTML('afterbegin',htmlData);
//    console.log(note);
    
    const editeButton = note.querySelector('.edit');
    const delButton = note.querySelector('.delete');
    const maindiv = note.querySelector('.main');
    const textarea = note.querySelector('textarea');

   // delete
   delButton.addEventListener('click', () => {
       note.remove();
       updateLSData();
   })

   // toggle
 textarea.value = text;
 maindiv.innerHTML = text;

   editeButton.addEventListener('click', () => {
       maindiv.classList.toggle('hidden');
       textarea.classList.toggle('hidden');
   })

   textarea.addEventListener('change',(event) =>{
       const value = event.target.value;
       maindiv.innerHTML = value;

       updateLSData();
   })

   document.body.appendChild(note);

};

// getting data back form l0calstorage.

const notes = JSON.parse(localStorage.getItem('notes'));

if(notes){ notes.forEach((note) => addNewNote(note))};

addButton.addEventListener('click',() => addNewNote() );