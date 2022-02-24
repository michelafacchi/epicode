import { FileDoc } from "./FileDoc.js";
import { UserInterface } from "./UserInterface.js";
/*importa le due classi definite negli altri files*/
export class App{

    /* costruttore: i dati sono presi dal file editor.js che contengono gli id dell'html, che istanzia una nuova app e tramite il costruttore assegna i valori all'istanza di UserInterface  */
    constructor(_ui){ 
        this.ui = _ui;

    /*inizializza tinymce, passando il riferimento all html tramite la proprietà dell'oggetto*/
    tinymce.init({
        selector: `#${this.ui.editor}`
        });

    // quando nei metodi dovrò usare tinymce.get(this.ui.editor) avrò due metodi .setContent() e .getContent()
    /*assegnare le proprietà dell'oggetto riferendosi al DOM e passando la proprietà dell'oggetto UserInterface come sopra*/
        /* chiamare il metodo che fa il bind dell'evento click */
    /* chiamare il metodo che recupera i dati dal localStorage*/
    /* metodo che fa il bind sul click, attenzione all'uso di this*/
    /* metodo che recupera i dati nel localStorage*/
    /* metodo che carica l'oggetto file */
    /* metodo che ripulisce */
    /* altro metodo: se non ci sono file caricati crea un oggetto file e fa il push nell'array */
    /* altrimenti modifica il file assegnando i valori letti dal form*/
    /* salva l'array nel localStorage e chiama la funzione che stampa a video*/
    /* metodo che stampa a video */
    /* metodo che svuota il form */



    //NIENTE DA FARE, A PRESCINDERE DAI METODI, DEVO CMQ RIGUARDARMI TUTTO DA CAPO  ç___ç



    var posts = [];         //array vuoto per la lista
    
    class App {                              //classe
        constructor(titolo, contenuto) {            
            this.titolo = titolo;
            this.contenuto = contenuto;
        };
    };

    var btnSalva = document.querySelector('#save');     //collego bottone con id salva
        btnSalva.addEventListener('click', () => {    //arrow function
            const titolo = document.querySelector('#title').value;
            const contenuto = document.querySelector('#editor_txt').value;

            var mioPost = new App(titolo, contenuto);   //new App per inserimento Titolo e Contenuto

            posts.push(mioPost);  //local storage set Item per salvarlo in locale
            localStorage.setItem('post', JSON.stringify(posts));
            Elenco(); //chiamo la funzione qui sotto
        });

        function Elenco() {             // creo la funzione per col-dx
            var wrapper = document.querySelector('ul');
            wrapper.innerHTML = '';         //wrapper per le liste
            posts.forEach((post, index) => {
                Item(post, wrapper, index);                 
            });
        }
        function Item(post, wrapper, index) {                   
            console.log(post, wrapper, index);
            let elemento = document.createElement("li");
            console.log("ok");
            elemento.innerHTML = `<li onclick="postcontent(${index})" class="list-group-item">${post.titolo} </li>`;
            wrapper.appendChild(elemento);
        }

        function postcontent(index) {                                   // ora devo far apparire li lato il contenuto che scrivo
            let endlit = document.querySelector('ul');
            var contenitore = document.querySelector('.closeDiv');
            posts.forEach((testo, index) => {
                contenitore.innerHTML = `${testo.contenuto} <div><span onclick="closeDiv(${index})" class="btn btn-outline-warning"> Chiudi </span></div>`;
            });
            endlit.appendChild(contenitore);
        }
            const newb = document.querySelector('#new');                //ora devo fare in modo di creare il nuovo post
            newb.addEventListener('click', function () {
                console.log("va");
                document.querySelector('#title').value = " ";
                document.querySelector('#editor_txt').value = " ";
            });
            
            const search = document.querySelector('#search');         // cercare i post
        search.addEventListener('click', (e) => {
            e.preventDefault();
            const found = document.querySelector('#found').value;
            console.log(found);

            let results = []; // array vuoto che li accogliera'. serve un ciclo foreach

            posts.forEach((post) => {
                if (post.titolo.indexOf(found) > -1) {      // array parte da 0, quindi devo indicare -1 
                    results.push(post);
                }
            });
            const wrapper = document.querySelector('ul');
            wrapper.innerHTML = '';
            results.forEach((post) => {
                creaSpazioSingleItem(post, wrapper);
            });
        });  
        