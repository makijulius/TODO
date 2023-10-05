function uuslappu(){

const uusdiv = document.createElement("div");

const teksti = document.createTextNode("dsaiufsdaufsofduiadsfsndpfoasofodsifpdasfapodsfaspf");

uusdiv.appendChild(teksti);

const vanhadiv = document.querySelector("#TODO-ALUE");

vanhadiv.appendChild(uusdiv);
}

function testi(){
    var h1teksti = document.querySelector("#otsikko").value;
    var pteksti = document.querySelector("#teht").value;

    const divtesti = document.createElement("div");

    const h1 = document.createElement("h1");
    const h1lisays = document.createTextNode(h1teksti);

    h1.appendChild(h1lisays);

    divtesti.appendChild(h1);

    const p = document.createElement("p");
    const plisays = document.createTextNode(pteksti);

    p.appendChild(plisays);

    divtesti.appendChild(p);

    const todotesti = document.querySelector("#TODO-ALUE");

    divtesti.classList.add("col-6");

    todotesti.appendChild(divtesti);
}
