import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-invoice-details',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './invoice-details.component.html',
    styleUrls: ['./invoice-details.component.css']
})
export class InvoiceDetailsComponent {
    invoices = [
        {
            invoiceNo: 'INV-2023-001',
            invoiceDate: '2023-11-01',
            amount: 15000.00,
            currency: 'USD',
            vendorId: '0000000003',
            companyCode: '1000',
            createdOn: '2023-11-01',
            status: 'Posted'
        },
        {
            invoiceNo: 'INV-2023-002',
            invoiceDate: '2023-11-05',
            amount: 2400.00,
            currency: 'USD',
            vendorId: '0000000003',
            companyCode: '1000',
            createdOn: '2023-11-05',
            status: 'Paid'
        }
    ];
}
