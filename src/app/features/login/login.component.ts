import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    vendorId = '';
    password = '';
    showPassword = false;

    constructor(private router: Router) { }

    togglePassword() {
        this.showPassword = !this.showPassword;
    }

    onSubmit() {
        // In a real app, validate credentials here
        if (this.vendorId && this.password) {
            this.router.navigate(['/dashboard']);
        }
    }
}
