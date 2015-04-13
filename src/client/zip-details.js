
import {App} from './app';


export class ZipDetail {
  static inject() { return [App]; }
  constructor(app,api,ea){
    this.app = app;
    
  }

 created(){
   return this.http.get('/api/zips').then(response => {
      this.zips = response.content;
    });
  } 
}
