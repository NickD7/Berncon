import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent {

	constructor(public router: Router) { }

	onLogin() {
		this.router.navigate(["/"]);
	}

	onSignup() {
		this.router.navigate(['/signup']);
	}
}