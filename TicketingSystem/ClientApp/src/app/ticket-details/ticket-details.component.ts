import { Component, Inject, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EditTicketModalComponent } from '../modals/edit-ticket-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Ticket } from '../models/ticket.model';

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
            width: '250px',
            data: ticket
        });

        dialogRef.afterClosed().subscribe(response => {
            if (response) {
                ticket.customer = response.customer;
                ticket.description = response.description;
                console.log(ticket);
                this.http.put<Ticket>(this.baseUrl + 'api/tickets/' + ticket.id, ticket).subscribe(result => {
                },
                    error => console.error(error));
            }
        });
    }

    closeTicket(ticket: Ticket) {
        this.http.put<Ticket>(this.baseUrl + 'api/tickets', ticket).subscribe(result => {
        },
            error => console.error(error));
    }

    deleteTicket(ticket: Ticket) {
        this.http.delete<Ticket>(this.baseUrl + 'api/tickets').subscribe(result => {
        },
            error => console.error(error));
    }
}
