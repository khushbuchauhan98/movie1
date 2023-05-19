let api=' http://www.omdbapi.com/?i=tt3896198&apikey=61e576a4&t=';
let loadingstatus=false;
loder=()=>{
  let intro=document.getElementById('intro');
  intro.style.display='none'
  let loder=document.getElementById('l');
  if(loadingstatus==true){
    loder.classList.add('loader');
  }
  else{
    loder.classList.remove('loader');
  }
}
gen=()=>{
  loadingstatus=true;
loder()
let img=document.getElementById('img');
    let moviename=document.getElementById('moviename').value;
    let h1= document.getElementById('h1');
    let p= document.getElementById('p')
    let apiquery=api + moviename;
    // console.log(apiq)
    fetch(apiquery)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        loadingstatus=false;
        loder();
        h1.innerText=data.Title;
        p.innerText=data.Plot;
        console.log(data);
        img.src=data.Poster;
      });
}
