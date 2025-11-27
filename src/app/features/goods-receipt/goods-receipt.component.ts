import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-goods-receipt',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './goods-receipt.component.html',
    styleUrls: ['./goods-receipt.component.css']
})
export class GoodsReceiptComponent {
    goodsReceipts = [
        {
            grNumber: '5000000001',
            grDate: '2023-11-15',
            materialNumber: 'MAT-001',
            quantityReceived: 500,
            unit: 'PC',
            storageLocation: 'SL01',
            documentYear: '2023',
            postingDate: '2023-11-16'
        },
        {
            grNumber: '5000000002',
            grDate: '2023-11-20',
            materialNumber: 'MAT-005',
            quantityReceived: 1200,
            unit: 'M',
            storageLocation: 'SL02',
            documentYear: '2023',
            postingDate: '2023-11-21'
        }
    ];
}
