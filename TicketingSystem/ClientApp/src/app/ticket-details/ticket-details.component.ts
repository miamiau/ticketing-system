import { Component, Inject, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

import { Ticket } from '../models/ticket.model';
import { EditTicketModalComponent } from '../edit-ticket-modal/edit-ticket-modal.component';
import { WarningModalComponent } from '../warning-modal/warning-modal.component';

@Component({
    selector: 'app-ticket-details',
    templateUrl: './ticket-details.component.html',
    styleUrls: ['./ticket-details.component.scss'],
})
export class TicketDetailsComponent {
    @Input() ticket: Ticket;

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private matDialog: MatDialog) {

    }

    editTicket(ticket: Ticket) {
        const dialogRef = this.matDialog.open(EditTicketModalComponent, {
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

    closeTicket(ticket: Ticket) {
        const dialogRef = this.matDialog.open(WarningModalComponent, {
            width: '300px',
            data: 'Are you sure you want to close ticket ' + ticket.subject + '?'
        });

        dialogRef.afterClosed().subscribe((isOk: boolean) => {
            if (isOk) {
                ticket.status = false;
                this.http.put<Ticket>(this.baseUrl + 'api/tickets/' + ticket.id, ticket).subscribe(result => {
                },
                    error => console.error(error));
            }
        });
    }

    deleteTicket(ticket: Ticket) {
        const dialogRef = this.matDialog.open(WarningModalComponent, {
            width: '300px',
            data: 'Are you sure you want to delete ticket ' + ticket.subject + '?'
        });

        dialogRef.afterClosed().subscribe((isOk: boolean) => {
            if (isOk) {
                this.http.delete<Ticket>(this.baseUrl + 'api/tickets/' + ticket.id).subscribe(result => {
                },
                    error => console.error(error));
            }
        });
    }
}
