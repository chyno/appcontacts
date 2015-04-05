import {EventAggregator} from 'aurelia-event-aggregator';
import {ContactUpdated, ContactViewed} from './messages';
import {HttpClient} from 'aurelia-http-client';

export class ReadingList {
  static inject() { return [EventAggregator,HttpClient]; }
  constructor(ea, http){
    this.api = api;
    this.http = http;
    this.readings = [];


/*
    ea.subscribe(ContactViewed, msg => this.select(msg.contact));
    ea.subscribe(ContactUpdated, msg => {
      let id = msg.contact.id;
      let found = this.contacts.filter(x => x.id == id)[0];
      Object.assign(found, msg.contact);
    });
*/
  }

  created(){
     this.http.get('http:localhost:9000/api/readings').then(response => {
      this.readings = response.content;
    });

    this.api.getReadingsList().then(readings => {
      this.readings = readings;
    });
  }

  select(reading){
    this.selectedId = reading.id;
    return true;
  }
}
