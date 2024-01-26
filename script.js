console.log("Welcome");
//initalize the variables
let songIndex=0;
let audioElement=new Audio('music1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let Namee=document.getElementById('Namee')
let songs=[
    {songName:"Without me",filePath:"music.mp3",coverPath:"cover2.jpg"},
    {songName:"Dandelions",filePath:"music2.mp3",coverPath:"cover1.jpg"},
    {songName:"The Box",filePath:"music3.mp3",coverPath:"background6.jpg"},
    {songName:"Circles",filePath:"music4.mp3",coverPath:"background2.jpg"},
    {songName:"Rockstar",filePath:"music5.mp3",coverPath:"background3.jpg"},
    {songName:"Starboy",filePath:"music6.mp3",coverPath:"background4.jpg"},
    {songName:"Reminder",filePath:"music7.mp3",coverPath:"background5.jpg"},
    {songName:"Praise The Lord",filePath:"music8.mp3",coverPath:"background6.jpg"},
    {songName:"Mockingbird",filePath:"music9.mp3",coverPath:"background7.jpg"},
    {songName:"Blinding Lights",filePath:"music10.mp3",coverPath:"background8.jpg"},
]
songItem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songName;
    

})

// handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity=0

    }
})

//listen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-circle-play')
        element.classList.remove('fa-circle-pause')
    })

}
//to make music play by clicking
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        
        songIndex=parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        audioElement.src=`music${songIndex+1}.mp3`
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        Namee.innerText=songs[songIndex].songName
        

    })
    
})
//for next button
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex=songIndex+1
    }
    audioElement.src=`music${songIndex+1}.mp3`
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        Namee.innerText=songs[songIndex].songName
})

//for previous button
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex=songIndex-1
    }
    audioElement.src=`music${songIndex+1}.mp3`
        audioElement.currentTime=0;
        audioElement.play();
        
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        Namee.innerText=songs[songIndex].songName
})






