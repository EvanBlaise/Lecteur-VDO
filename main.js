var canvas = document.getElementById("video")
var context = canvas.getContext("2d")
var video = document.createElement("video")
video.src = "src/video.mp4"
var pauseb = document.getElementById("pause")
var playb = document.getElementById("play")

video.width = 960
video.height = 540
canvas.width = video.width;
canvas.height = video.height;

video.play()  
draw()

document.getElementById('speed').onchange = function() 
{
  video.playbackRate = this.value;
}

pauseb.addEventListener("click", function()
{
  if (!video.paused)
  {
    video.pause();
    this.innerHTML = "play"
    
  } 
  else if (video.paused)
  {
    video.play();
    this.innerHTML = "pause"
  } 
})

function draw(){
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.drawImage(video, 0, 0, 960, 540)
  context.fillStyle = "#f00"
  context.fillRect(0, 510, 2000, 30)
  requestAnimationFrame(draw)
}
video.addEventListener("timeupdate", function()
{
  var time = Math.floor(video.currentTime)
  console.log(time) 
})



canvas.onmousemove = function(e)
{
  if (e.layerY > 510)
   {
    canvas.style.cursor = "pointer";
   }
  if (e.layerY < 510)
  {
    canvas.style.cursor = "default"
  }
}

