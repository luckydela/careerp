import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  
   //live_Url: any= "https://vanguard-api.herokuapp.com";
   //live_Url:any="https://e4b01848.ngrok.io";
   //notifyBucket: any = "/topics/com.ecl.smartcoveragent";
   //notifyUrl: any = 'https://fcm.googleapis.com/fcm/send';
   //live_Url: any = "https://ecl-web-api.herokuapp.com";
   live_Url:any="https://ecl-web-api.herokuapp.com";
  




  isLoggedInStatus:any;


   private httpHeaders = new HttpHeaders()
   .set('Content-Type', 'application/json')
   .set('Access-Control-Allow-Origin', '*')

   .set("Acces-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS")
   .set("Acces-Control-Allow-Headers", "Origin, Content-Type, Cookies");

   private smshttpHeaders = new HttpHeaders()
   .set('Content-Type', 'application/json')
   //.set('Access-Control-Allow-Origin', '*')
   .set('Authorization', 'key=AIzaSyBlTd4JoSMbrs8W5eeRESJ5_TMFIHrgnBw')

   //.set("Acces-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS")
   //.set("Acces-Control-Allow-Headers", "Origin, Content-Type, Cookies");

   private options = {
    headers: this.httpHeaders
   };

  //  private smsoptions = {
  //   headers: this.smshttpHeaders
  //  };



  constructor( private http: HttpClient) {

    
   }

   get isLoggedIn(){
    this.isLoggedInStatus = localStorage.isLoggedInStatus
    if(!this.isLoggedInStatus){
      return false
    } else {
      return true
    }
  }




  getLogin(test){
    return this.http.post(this.live_Url+'/api/admin_login', test, this.options);
  }

  submitApplication(formData){
return this.http.post(this.live_Url+'/api/submit_applications',formData, this.options)
  }

  getApplicants(email){
    return this.http.post(this.live_Url+'/api/get_applicants',({email:email}), this.options)
  }

  getDepartment(email){
    return this.http.post(this.live_Url+'/api/get_positions',({email:email}),this.options)
  }
//filePath:any;
  showFileName(email){
    return this.http.post(this.live_Url+'/api/load-image/',({email:email}),this.options)
  }

   addHire(email){
      return this.http.post(this.live_Url+'/api/input_positions',({email:email}), this.options)
   }

  
}






