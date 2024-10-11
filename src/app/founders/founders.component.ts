import { Component } from "@angular/core";

@Component({
  selector: "app-founders",
  templateUrl: "./founders.component.html",
  styleUrls: ["./founders.component.css"],
})
export class FoundersComponent {
  founders = [
    { name: "Bassem Yahia", image: "path_to_image1.jpg" },
    { name: "Mohamed Yahia", image: "path_to_image2.jpg" },
    { name: "Ahmed Neanaa", image: "path_to_image3.jpg" },
    { name: "Salma Ashraf", image: "path_to_image4.jpg" },
  ];
}
