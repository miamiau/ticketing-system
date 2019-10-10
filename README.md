# Ticketing System

##### This is a basic ticketing system implemented using Angular (Front-End) + ASP.NET Core Web API (Back-End)

#

### Assignment Details

Create a basic ticketing system using one of the following options:
- ASP.NET Core MVC (Front-End) + ASP.NET Core Web API (Back-End)
- Angular (Front-End) + ASP.NET Core Web API (Back-End)

Either one of the options should use a MS SQL database or NoSQL Database for storage.

You should have asynchronous operations in order to have a good application responsiveness.

The knowledge of standard Software Engineering practices like SOLID Principles, Clean Code, TDD, Refactoring, and Design Patterns should be demonstrated into project implementation.

**_Authentication_**: For a user, in order to be able to use the system, it will be required to login. If the user is not registered into the system, he will be asked to register.

**_Main Page_**: After the login, the user will have access to a page with the list of the tickets created by him. This page will offer also options to create a new ticket, and edit or close and existing one. 

The information displayed about a ticket is:
- Subject
- Type
- Customer
- Service type
- Status
- Open date/time

**_Create/Edit a ticket_**: The following fields should be displayed to the user in order to edit the data:
- Ticket type (read-only), its data can be extended by adding new entries into the DB
- Customer name (read/write) on create a ticket, read-only on edit a ticket
- Service type (read-only), its data can be extended by adding new entries into the DB
- Priority (read-only), its data can be extended by adding new entries into the DB
- Subject
- Description
- Status (read-only), its data can be extended by adding new entries into the DB
- Beside these fields, it will be required to have the ticket open and close date/time values

**_Close a ticket_**: An existing ticket can be closed via the main page. After closing, it will not be displayed anymore into the main page.

**_Project deliverable items_**:
1. The Product Backlog (as an Excel file for example) with the User Stories created based on the requirements presented above.
2. The application files and SQL Scripts.

#

### Product Backlog

- As a user, with no account, I want to register into the system
- As a user, with an existing account, I want to login into the system
- As a user, once logged in, I want to be able to sign out of the system
- As a user, I want to be able to view a list with all my tickets
- As a user, I want to be able to create a new ticket
- As a user, I want to be able to edit an existing ticket
- As a user, I want to be able to close an existing ticket
- As a user, I want to be able to delete an existing ticket
