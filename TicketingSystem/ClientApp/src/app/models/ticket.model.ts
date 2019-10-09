export class Ticket {
    id: string;
    subject: string;
    description: string;
    type: TicketType;
    customer: string;
    serviceType: ServiceType;
    status: boolean;
    openDateTime: Date;
    closeDateTime: Date;
    priority: Priority;
    assignee: string;
}
