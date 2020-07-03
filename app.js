const durationInput = document.querySelector("#duration")
const startBtn = document.querySelector("#start")
const pauseBtn = document.querySelector("#pause")

const timer = new Timer(durationInput, startBtn, pauseBtn, {
    onStart() {
        console.log("timer started!!")
    }, 
    onTick() {
        console.log("timer just ticked!")
    },
    onComplete(){
        console.log("timer completed!")
    }
})
