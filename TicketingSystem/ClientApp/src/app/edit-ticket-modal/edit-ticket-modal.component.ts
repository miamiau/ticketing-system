import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ticket } from '../models/ticket.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-edit-ticket-modal',
    templateUrl: 'edit-ticket-modal.component.html',
    styleUrls: ['edit-ticket-modal.component.scss']
})
export class EditTicketModalComponent implements OnInit {
    form: FormGroup;
    constructor(private fb: FormBuilder,
        public dialogRef: MatDialogRef<EditTicketModalComponent>,
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
