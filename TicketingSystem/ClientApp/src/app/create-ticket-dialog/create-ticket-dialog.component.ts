import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Ticket } from '../models/ticket.model';

@Component({
    selector: 'app-create-ticket-dialog',
    templateUrl: 'create-ticket-dialog.component.html',
    styleUrls: ['create-ticket-dialog.component.scss']
})
export class CreateTicketDialogComponent implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder,
        public dialogRef: MatDialogRef<CreateTicketDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public ticket: Ticket) { }


    ngOnInit() {
        this.form = this.fb.group({
            description: this.ticket.description,
            type: this.ticket.type,
            customer: this.ticket.customer,
            serviceType: this.ticket.serviceType,
            priority: this.ticket.priority,
        });
    }

    onSave(ticket: Ticket) {
        this.dialogRef.close(this.form.value);
    }

    onCancel(): void {
        this.dialogRef.close();
    }
}
