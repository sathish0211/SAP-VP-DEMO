import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-credit-debit-memo',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './credit-debit-memo.component.html',
    styleUrls: ['./credit-debit-memo.component.css']
})
export class CreditDebitMemoComponent {
    memos = [
        {
            documentNo: '8000000001',
            date: '2023-11-10',
            type: 'Credit',
            amount: 500.00,
            currency: 'USD',
            description: 'Return of defective goods'
        },
        {
            documentNo: '8000000002',
            date: '2023-11-12',
            type: 'Debit',
            amount: 200.00,
            currency: 'USD',
            description: 'Late delivery penalty'
        }
    ];
}
