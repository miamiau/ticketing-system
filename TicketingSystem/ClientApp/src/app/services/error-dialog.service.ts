import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Injectable()
export class ErrorDialogService {

    constructor(public matDialog: MatDialog) { }

    openErrorDialog(errorText: string): void {
        const dialogRef = this.matDialog.open(ErrorDialogComponent, {
            width: '300px',
            data: errorText
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
