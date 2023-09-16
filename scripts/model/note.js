//this feature came from ES6
//here class is a keyword
//export make it public so that other file can access it

class Note{                                      //this is sugar code where we create class and js will consider it as a function
    constructor(noteObject){
        for(let key in noteObject){
            this[key] = noteObject[key];
        }
        this.isMarked = false;
    }  
    toggleMark(){
        this.isMarked = !this.isMarked;
    }
}

export default Note;