import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

    token: string;

    constructor(private route: Router) {}

    signUpUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                error => console.error(error)
            );
    }

    signInUser(email: string, password: string) {
        let token ='';

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
               (response) => {
                   this.route.navigate(['/']);
                   firebase.auth().currentUser.getIdToken()
                    .then(
                        (token) => this.token = token
                    )
               }
            )
            .catch(
                error => console.error(error)
            );
    }

    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then(
                (token: string) => this.token = token
            );
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
    }
}