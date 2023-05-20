let api = 'https://www.omdbapi.com/?i=tt3896198&apikey=c997e31e&t='
let loadingstatus = false;
loder=()=>{
  let intro = document.getElementById('intro');
  intro.style.display = 'none';
  let loder = document.getElementById('l');
  if (loadingstatus == true) {
    loder.classList.add('loader');
  }
  else {
    loder.classList.remove('loader');
  }
}
gen=()=> {
  loadingstatus = true;
  loder()
  let moviename = document.getElementById('moviename').value;
  let apiquery = api + moviename;
  console.log(apiquery);
  fetch(apiquery).then((response) => {
    return response.json()
  }).then((data) => {
    console.log(data);
    loadingstatus = false;
    loder()
    let img = document.getElementById('img');
    let h1 = document.getElementById('h1');
    let p = document.getElementById('p')
    h1.innerText = data.Title;
    p.innerText = data.Plot;
   
    img.src = data.Poster;
  })
}
// let api = 'https://www.omdbapi.com/?i=tt3896198&apikey=c997e31e&t='
// let loadingstatus = false;
// loader=()=>{

//     let getintro = document.getElementById('intro');
//     getintro.style.display = 'none';
//     let getloader = document.getElementById('l');
//  if(loadingstatus==true)
// {
//  getloader.classList.add('loader')
// }
// else{
//     getloader.classList.remove('loader')
// }
//   }
 
// gen=()=>{
//     loadingstatus = true;
//     loader()

//     let getmoviename = document.getElementById('moviename').value;
//     let apiwithmovie = api + getmoviename;
//     console.log(apiwithmovie);
//     fetch(apiwithmovie).then((response)=>{
//         return response.json()
//       }).then((data)=>{
//         console.log(data)
//         loadingstatus = false;
//     loader()
//     let img=document.getElementById('img');
//     let h1= document.getElementById('h1');
//     let p= document.getElementById('p')
//     h1.innerText=data.Title;
//     p.innerText=data.Plot;
//     console.log(data);
//     img.src=data.Poster;
//       })
// }
