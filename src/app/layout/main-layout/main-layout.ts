import { Component } from '@angular/core';
import {Header} from '../header/header';
import {Footer} from '../footer/footer';
import {RouterOutlet} from '@angular/router';
import {Sidebar} from '../sidebar/sidebar';

@Component({
  selector: 'app-main-layout',
  imports: [
    Header,
    Footer,
    RouterOutlet,
    Sidebar
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
  standalone: true
})
export class MainLayout {

}
