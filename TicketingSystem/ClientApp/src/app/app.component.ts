import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'TicketingApp';

    constructor(public loginService: LoginService) {
        this.loginService.openLoginDialog({});
    }
}
