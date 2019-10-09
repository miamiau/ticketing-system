import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-error-dialog',
    templateUrl: './error-dialog.component.html',
})
export class ErrorDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<ErrorDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public errorText: string) { }

    onOk() {
        this.dialogRef.close();
    }
}
