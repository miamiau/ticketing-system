import { Component, Inject, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

import { Ticket } from '../models/ticket.model';
import { EditTicketDialogService } from '../services/edit-ticket-dialog.service';
import { WarningDialogService } from '../services/warning-dialog.service';

@Component({
    selector: 'app-ticket-details',
    templateUrl: './ticket-details.component.html',
    styleUrls: ['./ticket-details.component.scss'],
})
export class TicketDetailsComponent {
    @Input() ticket: Ticket;

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private matDialog: MatDialog,
        private editTicketDialogService: EditTicketDialogService,
        private warningDialogService: WarningDialogService) {

    }

    editTicket() {
        this.editTicketDialogService.openEditTicketDialog(this.ticket);
    }

    closeTicket(ticket: Ticket) {
        this.warningDialogService.openCloseTicketDialog(ticket);
    }

    deleteTicket(ticket: Ticket) {
        this.warningDialogService.openDeleteTicketDialog(ticket);
    }
}
