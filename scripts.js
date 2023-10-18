function uuslappu(){
    //Haetaan otsikon ja tehtävä syöttöalueiden sisällöt
    let h2teksti = document.querySelector("#otsikko").value;
    let pteksti = document.querySelector("#teht").value;
    //
    const lappunen = document.createElement("div");

    //Määritetään ja lisätään h2-alue, otsikkoteksti h2-alueelle, ja h2-alue lapulle
    const h2 = document.createElement("h2");
    const h2lisays = document.createTextNode(h2teksti);

    h2.appendChild(h2lisays);
    lappunen.appendChild(h2);

    //Määritetään ja lisätään p-alue, tehtäväteksti p-alueelle, ja p-alue lapulle
    const p = document.createElement("p");
    const plisays = document.createTextNode(pteksti);

    p.appendChild(plisays);
    lappunen.appendChild(p);

    //Määritellään ja lisätään lappuun delete-nappula
    const deleteButton = document.createElement('button');

    deleteButton.textContent = "Poista";
    lappunen.appendChild(deleteButton);

    //Delete-nappulan toimivuus
    deleteButton.addEventListener('click', function() {
    lappunen.remove();
    })
    
    const todoalue = document.querySelector("#TODO-ALUE");

    //Annetaan lappuselle class ja drag-toimivuus
    lappunen.classList.add("col-6");
    lappunen.classList.add("lappu");
    lappunen.setAttribute("draggable", "true");

    //Lisätään lappunen ToDo-alueelle
    todoalue.appendChild(lappunen);

    //Tyhjennetään formin kentät
    document.querySelector("#lomake").reset();
}

(function() {
    let dragged, listener;

    console.clear();

    dragged = null;

    listener = document.addEventListener;

    listener("dragstart", (event) => {

      //Raahatessa consoleen tulee viesti "start"
      console.log("start !"); 
      return dragged = event.target;
    });
    
    listener("dragover", function(event) {
      return event.preventDefault();
    });
    

    listener("drop", (event) => {

      //Elementin pudottaessa consoleen tulee viesti "stop"
      console.log("drop !");
      
      event.preventDefault();
      
      //If-lause varmistaa, että raahattu elementti on määritellyn pudotusalueen kohdalla
      if (event.target.className === "col-4 dropzone") {

        //Poistetaan raahattu elementti alkuperäisestä sijainnista
        dragged.parentNode.removeChild(dragged);

        //Lisätään elementti haluttuun pudotusalueeseen
        return event.target.appendChild(dragged);
      }
    });

  }).call(this);