import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { CounterComponent } from './counter/counter.component';
import { LoginComponent } from './login/login.component';
import { CreateTicketModalComponent } from './create-ticket-modal/create-ticket-modal.component';
import { EditTicketModalComponent } from './edit-ticket-modal/edit-ticket-modal.component';
import { WarningModalComponent } from './warning-modal/warning-modal.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        TicketsComponent,
        TicketDetailsComponent,
        LoginComponent,
        CounterComponent,
        CreateTicketModalComponent,
        EditTicketModalComponent,
        WarningModalComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'tickets', component: TicketsComponent },
        ]),
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        BrowserAnimationsModule,
    ],
    exports: [
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
    ],
    entryComponents: [
        CreateTicketModalComponent,
        EditTicketModalComponent,
        WarningModalComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
