import {EventAggregator} from 'aurelia-event-aggregator';
import {WebAPI} from './web-api';
import {App} from './app';
import {ContactUpdated,ContactViewed} from './messages';

export class ReadingDetail {
  static inject() { return [App,EventAggregator]; }
  constructor(app,api,ea){
    this.app = app;
    this.ea = ea;
  }

  activate(params, qs, config){
    return this.api.getReadingDetails(params.id).then(reading => {
      this.reading = reading;
      config.navModel.title = reading.zip;
      this.originalJSON = JSON.stringify(reading);
     // this.ea.publish(new ContactViewed(contact));
    });
  } 
}