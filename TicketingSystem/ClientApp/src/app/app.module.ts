import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { CounterComponent } from './counter/counter.component';
import { CreateTicketDialogComponent } from './create-ticket-dialog/create-ticket-dialog.component';
import { EditTicketDialogComponent } from './edit-ticket-dialog/edit-ticket-dialog.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { WarningDialogComponent } from './warning-dialog/warning-dialog.component';
import { HttpConfigInterceptor } from './interceptor/http-config.interceptor';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { LoginService } from './services/login.service';
import { CreateTicketDialogService } from './services/create-ticket-dialog.service';
import { EditTicketDialogService } from './services/edit-ticket-dialog.service';
import { RegisterUserService } from './services/register-user.service';
import { WarningDialogService } from './services/warning-dialog.service';
import { ErrorDialogService } from './services/error-dialog.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavMenuComponent,
        TicketsComponent,
        TicketDetailsComponent,
        RegisterUserComponent,
        CounterComponent,
        CreateTicketDialogComponent,
        EditTicketDialogComponent,
        LoginDialogComponent,
        WarningDialogComponent,
        ErrorDialogComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'tickets', component: TicketsComponent },
            { path: 'register', component: RegisterUserComponent },
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
        CreateTicketDialogComponent,
        EditTicketDialogComponent,
        LoginDialogComponent,
        WarningDialogComponent,
        ErrorDialogComponent
    ],
    providers: [
        LoginService,
        CreateTicketDialogService,
        EditTicketDialogService,
        RegisterUserService,
        WarningDialogService,
        ErrorDialogService,
        { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
