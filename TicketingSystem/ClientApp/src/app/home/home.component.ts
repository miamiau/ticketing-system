import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    public tickets: Ticket[];

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        http.get<Ticket[]>(baseUrl + 'api/tickets').subscribe(result => {
            this.tickets = result;
        },
            error => console.error(error));
    }
}

interface Ticket {
    name: string;
    status: boolean;
    prio: number;
    assignee: string;
}
