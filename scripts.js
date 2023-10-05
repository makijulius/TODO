function uuslappu(){
    var h2teksti = document.querySelector("#otsikko").value;
    var pteksti = document.querySelector("#teht").value;

    const divtesti = document.createElement("div");

    const h2 = document.createElement("h2");
    const h2lisays = document.createTextNode(h2teksti);

    h2.appendChild(h2lisays);

    divtesti.appendChild(h2);

    const p = document.createElement("p");
    const plisays = document.createTextNode(pteksti);

    p.appendChild(plisays);

    divtesti.appendChild(p);

    const todotesti = document.querySelector("#TODO-ALUE");

    divtesti.classList.add("col-6");

    divtesti.classList.add("lappu");

    divtesti.setAttribute("draggable", "true");

    todotesti.appendChild(divtesti);
}

(function() {
    var dragged, listener;

    console.clear();

    dragged = null;

    listener = document.addEventListener;

    listener("dragstart", (event) => {
      console.log("start !");
      return dragged = event.target;
    });

    listener("dragend", (event) => {
      return console.log("end !");
    });

    listener("dragover", function(event) {
      return event.preventDefault();
    });

    listener("drop", (event) => {
      console.log("drop !");
      event.preventDefault();
      if (event.target.className === "col-4 dropzone") {
        dragged.parentNode.removeChild(dragged);
        return event.target.appendChild(dragged);
      }
    });

  }).call(this);
