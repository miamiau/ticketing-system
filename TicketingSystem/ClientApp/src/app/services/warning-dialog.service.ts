import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';

import { WarningDialogComponent } from '../warning-dialog/warning-dialog.component';
import { Ticket } from '../models/ticket.model';

@Injectable()
export class WarningDialogService {

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, public matDialog: MatDialog) { }

    openCloseTicketDialog(ticket: Ticket) {
        const dialogRef = this.matDialog.open(WarningDialogComponent, {
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

    openDeleteTicketDialog(ticket: Ticket) {
        const dialogRef = this.matDialog.open(WarningDialogComponent, {
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
