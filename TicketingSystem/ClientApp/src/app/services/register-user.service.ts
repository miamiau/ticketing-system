import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable()
export class RegisterUserService {

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private router: Router) {
    }

    registerUser(user: User) {
        return this.http.post<User>(this.baseUrl + 'api/users', user)
            .subscribe(result => {
                console.log(result);
                this.router.navigate(['/']);
            },
                error => console.error(error));
    }
}
