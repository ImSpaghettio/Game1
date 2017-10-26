var date = new Date();


class Clock {

  constructor() {
    this.isDone = false;
    this.currentTime;
    this.startTime;
    this.targetTime;
  }

  startTimer(time) {
    this.startTime = date.getTime();
    this.targetTime = date.getTime() + (1000*time);
    this.isDone = false;
  }

  getTime() {
    return (this.currentTime - this.startTime) / 1000;
  }

  updateTime() {
    this.currentTime = date.getTime();

    if (this.currentTime >= this.targetTime){
      this.isDone = true;
    }
  }

}
