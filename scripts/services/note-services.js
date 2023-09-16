//CRUD operation perform here
import Note from '../model/note.js';
export const noteOperation={
    notes:[],
    add(noteObject){
        const note = new Note(noteObject);
        this.notes.push(note);

    },

    searchById(id){
        return this.notes.find(note=>note.id==id);
    },

    toggleMark(id){
        this.searchById(id).toggleMark();

        //const noteObject = this.searchById(id);
        //toggling is the work of object(toggling node ho ra hai na ki array)
       // noteObject.isMarked = !noteObject.isMarked;

    },

    total(){
        return this.notes.length;
    },

    marktotal(){
        return this.notes.filter(note=>note.isMarked).length;
    },

    unmarktotal(){
        return this.total() - this.marktotal();
    },
    
    remove(){
        this.notes = this.notes.filter(note=>!note.isMarked);
    },

    getNote(){
        return this.notes;
    },

    search(){
    },

    sort(){
    },

    update(){
        
    },

    save(){
    },
}
