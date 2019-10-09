import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';

import { CreateTicketDialogComponent } from '../create-ticket-dialog/create-ticket-dialog.component';
import { Ticket } from '../models/ticket.model';

@Injectable()
export class CreateTicketDialogService {

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, public matDialog: MatDialog) { }

    openCreateTicketDialog(): void {
        let ticket: Partial<Ticket> = {
            subject: "TK-" + this.generateTicketNumber(),
        }

        const dialogRef = this.matDialog.open(CreateTicketDialogComponent, {
            width: '300px',
            data: ticket
        });

        dialogRef.afterClosed().subscribe((newTicket: Ticket) => {
            if (newTicket) {
                ticket.description = newTicket.description;
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
}
