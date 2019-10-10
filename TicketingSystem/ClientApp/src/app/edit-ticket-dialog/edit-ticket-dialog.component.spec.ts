import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTicketDialogComponent } from './edit-ticket-dialog.component';

describe('EditTicketDialogComponent', () => {
    let component: EditTicketDialogComponent;
    let fixture: ComponentFixture<EditTicketDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EditTicketDialogComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditTicketDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
