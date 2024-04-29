import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { themeChange } from 'theme-change';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { FooterComponent } from "./shared/components/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NavbarComponent, FooterComponent]
})
export class AppComponent {
  title = 'my-resume';

  constructor() { 
    themeChange();
  }
}
