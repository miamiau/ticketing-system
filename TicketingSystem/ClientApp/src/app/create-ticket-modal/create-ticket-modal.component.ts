import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ticket } from '../models/ticket.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-create-ticket-modal',
    templateUrl: 'create-ticket-modal.component.html',
    styleUrls: ['create-ticket-modal.component.scss']
})
export class CreateTicketModalComponent implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder,
        public dialogRef: MatDialogRef<CreateTicketModalComponent>,
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
