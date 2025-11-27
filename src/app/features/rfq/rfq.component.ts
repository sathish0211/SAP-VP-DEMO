import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-rfq',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './rfq.component.html',
    styleUrls: ['./rfq.component.css']
})
export class RfqComponent {
    rfqs = [
        {
            rfqNumber: '6000000001',
            rfqDate: '2023-10-01',
            materialNumber: 'MAT-001',
            description: 'Industrial Steel Pipes',
            quantity: 500,
            unit: 'PC',
            deliveryDate: '2023-11-15',
            bidSubmissionDate: '2023-10-15'
        },
        {
            rfqNumber: '6000000002',
            rfqDate: '2023-10-05',
            materialNumber: 'MAT-005',
            description: 'Copper Wiring',
            quantity: 1200,
            unit: 'M',
            deliveryDate: '2023-11-20',
            bidSubmissionDate: '2023-10-20'
        },
        {
            rfqNumber: '6000000003',
            rfqDate: '2023-10-10',
            materialNumber: 'MAT-012',
            description: 'Safety Valves',
            quantity: 50,
            unit: 'PC',
            deliveryDate: '2023-12-01',
            bidSubmissionDate: '2023-10-25'
        }
    ];
}
