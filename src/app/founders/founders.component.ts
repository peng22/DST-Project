import { Component } from "@angular/core";

@Component({
  selector: "app-founders",
  templateUrl: "./founders.component.html",
  styleUrls: ["./founders.component.scss"],
})
export class FoundersComponent {
  founders = [
    {
      name: "Bassem Yahia",
      image: "assets/images/founders/bassem.png",
      title: "Co-Founder",
    },
    {
      name: "Mohamed Yahia",
      image: "assets/images/founders/mohamed.png",
      title: "Co-Founder",
    },
    {
      name: "Ahmed Neanaa",
      image: "assets/images/founders/ahmed.png",
      title: "Co-Founder",
    },
    {
      name: "Salma Ashraf",
      image: "assets/images/founders/salma.png",
      title: "Co-Founder",
    },
  ];
}
