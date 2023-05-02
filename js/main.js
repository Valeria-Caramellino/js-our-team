//console.log("ciao");

//creo arrey con oggetti

let gruppo =[

    {   nome:"WayneBarnett",
        ruolo : "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome:"Angela Caroll",
        ruolo:"Chief Editor",
        foto:"angela-caroll-chief-editor.jpg"
    },
    {
        nome:"Walter Gordon",
        ruolo:"Office Manager",
        foto:"walter-gordon-office-manager.jpg"
    },
    {
        nome:"Angela Lopez",
        ruolo:"Social Media Manager",
        foto:"angela-lopez-social-media-manager.jpg"
    },
    {
        nome:"Scott Estrada",
        ruolo:"Developer",
        foto:"scott-estrada-developer.jpg"
    },
    {
        nome:"Barbara Ramos",
        ruolo:"Graphic Designer",
        foto:"barbara-ramos-graphic-designer.jpg"
    },

];
//creo variabile per dove voglio mettere poi il contenuto
let x = document.getElementById("box");
//avvio un contatore quanto la lunghezza dell array
for(let i=0; i<gruppo.length; i++){
    //prendo tutti i.valore che mi serve controllare
    console.log(gruppo[i].nome, gruppo[i].ruolo, gruppo[i].foto);
    //inserisco html e contenuto nel box creando sotto elementi 
    x.innerHTML += `<div class="element"><h2>${gruppo[i].nome}</h2><p>${gruppo[i].ruolo}</p><img src="img/${gruppo[i].foto}" alt=""></div>`
}