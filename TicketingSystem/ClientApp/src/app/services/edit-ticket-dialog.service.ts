import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';

import { EditTicketDialogComponent } from '../edit-ticket-dialog/edit-ticket-dialog.component';
import { Ticket } from '../models/ticket.model';

@Injectable()
export class EditTicketDialogService {

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, public matDialog: MatDialog) { }

    openEditTicketDialog(ticket: Ticket): void {
        const dialogRef = this.matDialog.open(EditTicketDialogComponent, {
            width: '300px',
            data: ticket
        });

        dialogRef.afterClosed().subscribe((updatedTicket: Partial<Ticket>) => {
            if (updatedTicket) {
                ticket.customer = updatedTicket.customer;
                ticket.description = updatedTicket.description;
                console.log(ticket);
                this.http.put<Ticket>(this.baseUrl + 'api/tickets/' + ticket.id, ticket).subscribe(result => {
                },
                    error => console.error(error));
            }
        });
    }
}
