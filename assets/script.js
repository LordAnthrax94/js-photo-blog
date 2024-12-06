const endpoint = 'https://jsonplaceholder.typicode.com/photos?_limit=6';

// [
//   {
//     "albumId": 1,
//     "id": 1,
//     "title": "accusamus beatae ad facilis cum similique qui sunt",
//     "url": "https://via.placeholder.com/600/92c952",
//     "thumbnailUrl": "https://via.placeholder.com/150/92c952"
//   },
//   {
//     "albumId": 1,
//     "id": 2,
//     "title": "reprehenderit est deserunt velit ipsam",
//     "url": "https://via.placeholder.com/600/771796",
//     "thumbnailUrl": "https://via.placeholder.com/150/771796"
//   },
//   {
//     "albumId": 1,
//     "id": 3,
//     "title": "officia porro iure quia iusto qui ipsa ut modi",
//     "url": "https://via.placeholder.com/600/24f355",
//     "thumbnailUrl": "https://via.placeholder.com/150/24f355"
//   },
//   {
//     "albumId": 1,
//     "id": 4,
//     "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
//     "url": "https://via.placeholder.com/600/d32776",
//     "thumbnailUrl": "https://via.placeholder.com/150/d32776"
//   },
//   {
//     "albumId": 1,
//     "id": 5,
//     "title": "natus nisi omnis corporis facere molestiae rerum in",
//     "url": "https://via.placeholder.com/600/f66b97",
//     "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
//   },
//   {
//     "albumId": 1,
//     "id": 6,
//     "title": "accusamus ea aliquid et amet sequi nemo",
//     "url": "https://via.placeholder.com/600/56a8c2",
//     "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
//   }
// ]


const album = document.querySelector('.album')

const overlay = document.getElementById('overlay');
const btn = document.querySelector('.btn')
const selpic = document.querySelector('.selpic')

btn.addEventListener('click', function(){
  overlay.classList.add('d-none')
})

// richiamiamo i 6 oggetti attraverso axios richiamando l'Api
axios.get(endpoint)
  .then(response =>{
    album.innerHTML = ''
    // iteriamo l'array dei dati ricevuti da axios e inviamo i dati alla funzione
    response.data.forEach(picture => albumPic(picture))   
  })

 

//Creiamo la funzione che riceve l'oggetto 
function albumPic(picture){
  //destrutturiamo l'oggetto e salviamo i dati che servono
  const {title, url} = picture;
  //Creiamo un elemento in HTML 
  const mycard = document.createElement("div")
  //Assegniamo le classi all'elemento
  mycard.className = 'mycard d-flex'
  //Popoliamo il contenuto dell'elemento e utilizziamo il template literal per richiamare
  //le proprietà dell'oggetto
  mycard.innerHTML = `
    <div class="mypic">
    <img src="${url}" alt="${title}">    
      <span class="pin"><img src="./assets/img/pin.svg" alt="pin"></span>
    </div>
    <div class="mytext">${title}</div>  
  `;  
  //Stampiamo in pagina l'elemento completo
  album.appendChild(mycard)
  //Aggiungiamo un evento al click della card per attivare l'overlay
  mycard.addEventListener('click', function(){    
    overlay.classList.remove('d-none');
    //Popolo l'elemento nell'overlay utilizzando sempre il template literal
    selpic.innerHTML = `<img src="${url}" alt="${title}">`;    
  })    
}