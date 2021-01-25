class Events {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [callback];
    } else {
      this.events[eventName].push(callback);
    }
  }

  trigger(eventName) {
    if (this.events[eventName]) {
      const arr = this.events[eventName];
      arr.forEach((fn) => fn());
    }
  }

  off(eventName) {
    if (this.events[eventName]) {
      this.events[eventList] = [];
    }
  }
}
