import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { User } from '../models/user.model';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private matDialog: MatDialog, private router: Router) {
    }

    openLoginDialog(userData) {
        userData = { email: '', password: '' };


        const dialogRef = this.matDialog.open(LoginDialogComponent, {
            width: '300px',
            data: userData
        });

        dialogRef.afterClosed().subscribe((user: User) => {
            if (user) {
                console.log(JSON.stringify({ email: user.email, password: user.password }));
                return this.http.post<any>(this.baseUrl + 'api/login', JSON.stringify({ email: user.email, password: user.password }))
                    .subscribe(result => {
                        console.log(result);
                        this.router.navigate(['/tickets']);
                    },
                        error => console.error(error));
            }
        });
    }
}
