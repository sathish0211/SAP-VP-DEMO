import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-purchase-orders',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './purchase-orders.component.html',
    styleUrls: ['./purchase-orders.component.css']
})
export class PurchaseOrdersComponent {
    purchaseOrders = [
        {
            poNumber: '4500000001',
            poDate: '2023-10-20',
            materialNumber: 'MAT-001',
            quantity: 500,
            unit: 'PC',
            netPrice: 15000.00,
            currency: 'USD',
            deliveryDate: '2023-11-15',
            status: 'Open'
        },
        {
            poNumber: '4500000002',
            poDate: '2023-10-22',
            materialNumber: 'MAT-005',
            quantity: 1200,
            unit: 'M',
            netPrice: 2400.00,
            currency: 'USD',
            deliveryDate: '2023-11-20',
            status: 'Completed'
        },
        {
            poNumber: '4500000003',
            poDate: '2023-10-25',
            materialNumber: 'MAT-012',
            quantity: 50,
            unit: 'PC',
            netPrice: 5000.00,
            currency: 'USD',
            deliveryDate: '2023-12-01',
            status: 'Open'
        }
    ];
}
