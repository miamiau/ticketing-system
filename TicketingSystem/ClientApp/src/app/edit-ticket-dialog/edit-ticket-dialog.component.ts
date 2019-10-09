import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Ticket } from '../models/ticket.model';

@Component({
    selector: 'app-edit-ticket-dialog',
    templateUrl: 'edit-ticket-dialog.component.html',
    styleUrls: ['edit-ticket-dialog.component.scss']
})
export class EditTicketDialogComponent implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder,
        public dialogRef: MatDialogRef<EditTicketDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public ticket: Ticket) { }

    ngOnInit() {
        this.form = this.fb.group({
            description: this.ticket.description,
            customer: this.ticket.customer,
        });
    }

    onSave(ticket: Ticket) {
        this.dialogRef.close(this.form.value);
    }

    onCancel(): void {
        this.dialogRef.close();
    }
}
