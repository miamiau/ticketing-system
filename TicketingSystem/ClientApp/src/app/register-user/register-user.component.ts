import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RegisterUserService } from '../services/register-user.service';

@Component({
    selector: 'app-register-user',
    templateUrl: './register-user.component.html',
    styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder, private registerUserService: RegisterUserService) { }

    ngOnInit() {
        this.form = this.fb.group({
            name: '',
            email: '',
            password: '',
        });
    }

    onRegister() {
        this.registerUserService.registerUser(this.form.value);
    }
}
