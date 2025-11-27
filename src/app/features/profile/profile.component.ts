import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
    vendorData = {
        name: 'Acme Supplies Ltd.',
        id: '0000000003',
        street: '123 Industrial Way',
        city: 'Metropolis',
        country: 'USA',
        postalCode: '10001',
        phone: '+1 555-0123',
        email: 'contact@acmesupplies.com'
    };
}
