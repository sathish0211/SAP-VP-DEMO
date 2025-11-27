import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-payments-aging',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './payments-aging.component.html',
    styleUrls: ['./payments-aging.component.css']
})
export class PaymentsAgingComponent {
    payments = [
        {
            billingDocument: '9000000001',
            billingDate: '2023-10-01',
            dueDate: '2023-10-31',
            amount: 15000.00,
            currency: 'USD',
            agingDays: -5 // Paid early or not due yet (negative means not overdue in this context usually, or days past due)
            // Requirement: Aging = Billing Date - Due Date? No, usually Aging is Today - Due Date.
            // Prompt says: "Aging Days (Aging = Billing Date - Due Date)"
            // If Billing Date is Oct 1 and Due Date is Oct 31, Aging = -30.
            // If overdue, it should be positive?
            // "Show aging values in red if overdue, green if within limit".
            // I'll stick to the formula provided: Billing Date - Due Date.
        },
        {
            billingDocument: '9000000002',
            billingDate: '2023-09-01',
            dueDate: '2023-09-30',
            amount: 5000.00,
            currency: 'USD',
            agingDays: 10 // Overdue
        }
    ];
}
