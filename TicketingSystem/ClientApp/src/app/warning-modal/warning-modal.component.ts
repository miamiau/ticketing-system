import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-warning-modal',
    templateUrl: 'warning-modal.component.html',
    styleUrls: ['warning-modal.component.scss']
})
export class WarningModalComponent {

    constructor(
        public dialogRef: MatDialogRef<WarningModalComponent>,
        @Inject(MAT_DIALOG_DATA) public warningText: string) { }


    onOk() {
        this.dialogRef.close(true);
    }

    onCancel(): void {
        this.dialogRef.close();
    }
}
