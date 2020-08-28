import { Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'

const routes: Routes = []; // Sub-Pages (ex: projects, experience, etc...)


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
}
