import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dating App';
  message = 'This is a message form angular component and below are the users form the DB';
  users:any;
  //in order to make HTTP request in angular we need Httpclient which is added first in app.module.ts file
  //then injected into the component typescript file
  constructor(private http: HttpClient){}

  //oninit is a lifecycle event interface in angular which has to be implemented 
  //basically like hooks for react

  
  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/users').subscribe({
      //using httpclient we make a get request, all the HTTP verbs are available in this library
      //when we make a  request we get observables for which we have to subscribe 
      //when we subscribe we get these following methods
      next:response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log("Request has been successfully completed")
    })
  }
}
