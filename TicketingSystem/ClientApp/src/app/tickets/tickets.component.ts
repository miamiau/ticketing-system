import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

import { Ticket } from '../models/ticket.model';
import { CreateTicketModalComponent } from '../create-ticket-modal/create-ticket-modal.component';

@Component({
    selector: 'app-tickets',
    templateUrl: './tickets.component.html',
    styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent {
    public tickets: Ticket[];

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private matDialog: MatDialog) {
        http.get<Ticket[]>(baseUrl + 'api/tickets').subscribe(result => {
            this.tickets = result;
        },
            error => console.error(error));
    }

    createTicket() {
        let ticket: Partial<Ticket> = {
            subject: "TK-" + this.generateTicketNumber(),
        }



        const dialogRef = this.matDialog.open(CreateTicketModalComponent, {
            width: '300px',
            data: ticket
        });

        dialogRef.afterClosed().subscribe((newTicket: Ticket) => {
            if (newTicket) {
                ticket.type = newTicket.type;
                ticket.customer = newTicket.customer;
                ticket.serviceType = newTicket.serviceType;
                ticket.priority = newTicket.priority;
                ticket.status = true;
                ticket.openDateTime = new Date();
                console.log(ticket);
                this.http.post<Ticket>(this.baseUrl + 'api/tickets', ticket).subscribe(result => {
                },
                    error => console.error(error));
            }
        });
    }


    generateTicketNumber() {
        return Math.floor(Math.random() * 10000 + 1000);
    }

    deleteTicket(ticket: Ticket) {
        this.http.delete<Ticket>(this.baseUrl + 'api/tickets').subscribe(result => {
        },
            error => console.error(error));
    }
}
