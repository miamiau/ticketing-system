import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-login-dialog',
    templateUrl: './login-dialog.component.html',
})
export class LoginDialogComponent implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder,
        public dialogRef: MatDialogRef<LoginDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: string) { }

    ngOnInit() {
        this.form = this.fb.group({
            email: '',
            password: '',
        });
    }

    onLogin() {
        this.dialogRef.close(this.form.value);
    }

    onCancel(): void {
        this.dialogRef.close();
    }
}
