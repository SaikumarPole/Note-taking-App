// your function
var my_func = function(event) {
    var title = document.getElementById("title");

    if(!title.value){
        alert("Please enter the title");
    }
    var note = document.getElementById("note");
    if(!note.value){
        note.value = " ";
    }
    const today = new Date();
    const todays_date = moment(today).format('D MMMM YYYY');

    var divToAdd = `<div class="col-md-3 mb-2 noteDiv">
                        <div class="card bg-dark text-white">
                        <div class="card-body">
                            <h5 class="card-title">`+title.value+`</h5>
                            <p class="card-text">`+note.value+`</p>
                            <button class="btn btn-danger" onclick="deleteNote(this)"><i class="fas fa-trash"></i> Delete Note</button>
                            <button class="btn btn-success" onclick="editNote(this)"><i class="fas fa-edit"></i> Edit Note</button>
                            <p class="text-right">`+todays_date +`</p>
                        </div>
                        </div>
                    </div>`;

    var d = document.getElementById("notes");
    d.innerHTML += divToAdd;
    
    document.getElementById("title").value = "";
    document.getElementById("note").value = "";

    checkEmptyNotes();
    event.preventDefault();
};

var form = document.getElementById("noteForm");

form.addEventListener("submit", my_func, true);

function deleteNote(obj){
    console.log("deleting the note");

    var closest_div = obj.closest(".noteDiv");
    closest_div.remove();
    
    checkEmptyNotes();
}

function editNote(obj){
    console.log("editing the note");
    console.log(obj);

    var title = obj.parentElement.querySelector(".card-title").innerHTML;
    var text = obj.parentElement.querySelector(".card-text").innerHTML;


    document.getElementById("title").value = title;
    document.getElementById("note").value = text;

    var closest_div = obj.closest(".noteDiv");
    closest_div.remove();

    checkEmptyNotes();


}

function checkEmptyNotes() {
    const myDiv = document.getElementById('notes');
    const emptyNotes = document.getElementById('emptyNotes');
  
    console.log("children:",myDiv.childNodes);
    if (myDiv.childNodes.length === 1) {
        console.log("nodes len 0");
      emptyNotes.style.display = 'block';
    } else {
        console.log("nodes len not 0");
      emptyNotes.style.display = 'none';
    }
  }
  
  checkEmptyNotes();