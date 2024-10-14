import { Component } from "@angular/core";

@Component({
  selector: "app-founders",
  templateUrl: "./founders.component.html",
  styleUrls: ["./founders.component.scss"],
})
export class FoundersComponent {
  founders = [
    {
      name: "BASSEM YAHIA",
      image: "assets/images/founders/bassem.png",
      title: "Co-Founder & Chief Executive Officer",
    },
    {
      name: "MOHAMED YAHIA",
      image: "assets/images/founders/mohamed.png",
      title: "Co-Founder & Chief Marketing Officer",
    },
    {
      name: "AHMED NEANAA",
      image: "assets/images/founders/ahmed.png",
      title: "Co-Founder & Chief Experience Officer",
    },
    {
      name: "SALMA ASHRAF",
      image: "assets/images/founders/salma.png",
      title: "Co-Founder & Chief Business Development Officer",
    },
  ];
}
