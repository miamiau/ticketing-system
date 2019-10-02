import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    public users: User[];

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        http.get<User[]>(baseUrl + 'api/users').subscribe(result => {
            this.users = result;
        },
            error => console.error(error));
    }
}

interface User {
    name: string;
    email: string;
    password: string;
}
