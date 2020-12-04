import { makeObservable, action, observable } from "mobx";

class CalendarStore {
  calendarEvents = [];

  setCalendarEvents(calendarEvents) {
    this.calendarEvents = calendarEvents;
  }

  CalendarStore(calendarEvents) {
  makeObservable(this, {
    calendarEvents: observable,
    setCalendarEvents: action
  })
  this.calendarEvents = calendarEvents;
}
}



export { CalendarStore };


