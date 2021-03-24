var canvas = document.getElementById("myCanvas")    
var ctx = canvas.getContext("2d")
var colour = "blue"
var lineWidth = 5

var lastx,lasty,currentx,currenty








canvas.addEventListener("touchstart", ts)

function ts (e) {
    console.log("The canvas has been touch")
    colour = document.getElementById("color").value 
    lineWidth = document.getElementById("number").value 
}
 
canvas.addEventListener("touchmove", tm)

function tm (e) {
    currentx = e.touches[0].clientX-canvas.offsetLeft
    currenty = e.touches[0].clientY-canvas.offsetTop
      ctx.beginPath()
      ctx.strokeStyle=colour
      ctx.lineWidth=lineWidth  
      ctx.moveTo(lastx, lasty)
      ctx.lineTo(currentx, currenty)
      ctx.stroke()
lastx = currentx
lastx = currenty
}
