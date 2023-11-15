// let API = "http://www.omdbapi.com/?apikey=61e576a4&t=dangal";

let api = "http://www.omdbapi.com/?apikey=70d40039&t=";
let loadingStatus=false;
let title=document.getElementById('title');
let desc=document.getElementById('desc');
let actors=document.getElementById('actors')
let awards=document.getElementById('awards')
let boxOffice=document.getElementById('boxOffice')
let director=document.getElementById('director')
let img=document.getElementById('img')
let author=document.getElementById('author')
let rating=document.getElementById('rating')
let genre=document.getElementById('genre')
let errorContainer=document.getElementById('errorContainer')
let movieContainer=document.getElementById('movieContainer')
movieContainer.classList.add('d-none')
errorContainer.classList.add('d-none')




function CheckLoaderStatus(){
    let intro = document.getElementById('intro');
    intro.style.display ='none';
    let loader = document.getElementById('loader');
    if(loadingStatus==true){
        loader.classList.add('loader');
    }
    else{
        loader.classList.remove('loader');
    }
}

function fetchMovieDetails(){
    loadingStatus=true;
    CheckLoaderStatus();
    let movieName = document.getElementById('movieName');
    let apiQuery = api + movieName.value;
    console.log(apiQuery);
    fetch(apiQuery).then((response)=>{
        return response.json();
        }).then((data)=>{
         console.log(data);
         if(data.Error != 'Movie not found!'){
         loadingStatus=false;
         CheckLoaderStatus();
         img.src=data.Poster;
         title.innerText=data.Title;
         desc.innerText=data.Plot;  
         actors.innerText=data.Actors;  
         awards.innerText=data.Awards;  
         boxOffice.innerText=data.BoxOffice;  
         director.innerText=data.Director;  
         author.innerText=data.Writer;  
         rating.innerText=data.imdbRating;  
         genre.innerText=data.Genre;  

         movieContainer.classList.remove('d-none');
         errorContainer.classList.add('d-none');
         }
         else{
            movieContainer.classList.add('d-none')
            errorContainer.classList.remove('d-none')
            loadingStatus=false;
            CheckLoaderStatus();
         }

        }) 

}




