import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAkrRUceynPEnLGu3xj8vqUkYp8FqHWdys",
      authDomain: "recipe-app-5bd36.firebaseapp.com"
    });
  }

}
