class Timer {
    constructor(durationInput, startBtn, pauseBtn) {
        this.durationInput = durationInput
        this.startBtn = startBtn
        this.pauseBtn = pauseBtn

        this.startBtn.addEventListener("click", this.start)
    }

    start = () => {
        console.log(this)
    }
}


const durationInput = document.querySelector("#duration")
const startBtn = document.querySelector("#start")
const pauseBtn = document.querySelector("#pause")

const timer = new Timer(durationInput, startBtn, pauseBtn)

// timer.start()