const container = document.getElementsByClassName('container')[0]
const heading = document.getElementById('Heading')
const display = document.getElementById('Display')
const button = document.getElementById('Button')
var initial_time = 90
var time = initial_time
var running = false
var start_timer
if((time < 60)) {
             display.innerHTML = `${0}: ${time}`
}
if(time >= 60) {
             display.innerHTML = `${1}: ${time - 60}`
}

function timer() {
    if ((time > 0) && running == true ) {
          display.style.background = "white"
          time =  (time -1)
         if(time < 60 && time >= 0)  {
             display.innerHTML = `${0}: ${time}`
}
if(time >= 60) {
             display.innerHTML = `${1}: ${time - 60}`
}
    }
    if(time <= 0){
            heading.innerHTML = "Time's up!"
            display.style.background = "red"
            button.innerHTML = 'reset timer'
            clearInterval(start_timer)
            running = false
            time = initial_time
            if(time < 60 && time >= 0)  {
             display.innerHTML = `${0}: ${time}`
}
if(time >= 60) {
             display.innerHTML = `${1}: ${time - 60}` }
            
        }
}

function stop_timer() {
    clearInterval(start_timer)
}

function toggle() {
    running = ! running
    if(running == true) {
    start_timer = setInterval(() => {
    timer()
    console.log(time)
}, 1000);
    heading.innerHTML = "Time Remaining"
    button.innerHTML = "Pause Timer"
    button.style.background = "#326626"
    
    }
    else if (running == false && time > 0){
        stop_timer() 
        button.innerHTML = 'Unpause Timer'
        button.style.background = 'darkgreen'
    }
    
    
    }
button.addEventListener('click', function(e){
        toggle();   
})
