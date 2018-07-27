import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-start-page",
	templateUrl: "./start-page.component.html",
	styleUrls: ["./start-page.component.css"]
})
export class StartPageComponent {
	slideIndex = 0;

	constructor(public router: Router) {}

	respNav() {
		const i = document.getElementById("myNavbar");
		if (i.className === "topnav") {
			i.className += " responsive";
		} else {
			i.className = "topnav";
		}
	}

	toHome() {
		const elmnt = document.getElementById("home");
		elmnt.scrollIntoView({
			behavior: "smooth"
		});
	}

	toAbout() {
		const elmnt = document.getElementById("about");
		elmnt.scrollIntoView({
			behavior: "smooth"
		});
	}

	toTeam() {
		const elmnt = document.getElementById("team");
		elmnt.scrollIntoView({
			behavior: "smooth"
		});
	}

	toFotos() {
		const elmnt = document.getElementById("fotos");
		elmnt.scrollIntoView({
			behavior: "smooth"
		});
	}

	toContact() {
		const elmnt = document.getElementById("contact");
		elmnt.scrollIntoView({
			behavior: "smooth"
		});
	}

	toTop() {
		const elmnt = document.getElementById("home");
		elmnt.scrollIntoView({
			behavior: "smooth"
		});
	}

	onLogout() {
		this.router.navigate(["/login"]);
	}

	sendMessage() {
		console.log("Message sent!");
	}

	plusSlides(n) {
		this.showSlides(this.slideIndex += n);
	}

	currentSlide(n) {
		this.showSlides(this.slideIndex = n);
	}

	showSlides(slideIndex);

	showSlides(n) {
		// tslint:disable-next-line:no-var-keyword
		var i;
		const slides = document.getElementsByClassName("mySlides");
		const dots = document.getElementsByClassName("dot");
		if (n > slides.length) {
			this.slideIndex = 1;
		}
		if (n < 1) {
			this.slideIndex = slides.length;
		}
		for (i = 0; i < slides.length; i++) {
			(slides[i] as HTMLElement).style.display = "none";
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace("active", "");
		}
		(slides[this.slideIndex - 1] as HTMLElement).style.display = "block";
		dots[this.slideIndex - 1].className += " active";
	}
}
