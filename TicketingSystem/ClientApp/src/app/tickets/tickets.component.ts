import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

import { Ticket } from '../models/ticket.model';
import { CreateTicketDialogService } from '../services/create-ticket-dialog.service';

@Component({
    selector: 'app-tickets',
    templateUrl: './tickets.component.html',
    styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent {
    public tickets: Ticket[];

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private matDialog: MatDialog,
        private createTicketDialogService: CreateTicketDialogService) {
        http.get<Ticket[]>(baseUrl + 'api/tickets').subscribe(result => {
            this.tickets = result;
        },
            error => console.error(error));
    }

    createTicket() {
        this.createTicketDialogService.openCreateTicketDialog();
    }
}
