import {EventAggregator} from 'aurelia-event-aggregator';
import {WebAPI} from './web-api';
import {HttpClient} from 'aurelia-http-client';


export class ReadingList {
  static inject() { return [EventAggregator,WebAPI, HttpClient]; }
  constructor(ea, api, http){
     this.api  = api;
     this.api.isRequesting = false;
     this.zips = [];
     this.http = http;
  }
  
  created(){

  	return this.http.get('/api/zips').then(response => {
      this.zips = response.content;
    });

     
  }
}
