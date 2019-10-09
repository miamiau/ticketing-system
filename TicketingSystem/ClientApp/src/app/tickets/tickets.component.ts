import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../models/ticket.model';

@Component({
    selector: 'app-tickets',
    templateUrl: './tickets.component.html',
    styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent {
    public tickets: Ticket[];

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
        http.get<Ticket[]>(baseUrl + 'api/tickets').subscribe(result => {
            this.tickets = result;
        },
            error => console.error(error));
    }

    createTicket(ticket: Ticket) {
        let newTicket = {
            subject: "TK-0007",
            priority: 2,
            assignee: "Teo",
        }
        this.http.post<Ticket>(this.baseUrl + 'api/tickets', newTicket).subscribe(result => {
        },
            error => console.error(error));
    }

    deleteTicket(ticket: Ticket) {
        this.http.delete<Ticket>(this.baseUrl + 'api/tickets').subscribe(result => {
        },
            error => console.error(error));
    }
}
