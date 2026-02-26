class Clock {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
    
    display() {
        let h = this.hours < 10 ? '0' + this.hours : this.hours;
        let m = this.minutes < 10 ? '0' + this.minutes : this.minutes;
        let s = this.seconds < 10 ? '0' + this.seconds : this.seconds;
        
        console.log(`${h}:${m}:${s}`);
    }
}

let clock1 = new Clock(10, 30, 45);
clock1.display();

let clock2 = new Clock(5, 7, 9);
clock2.display();