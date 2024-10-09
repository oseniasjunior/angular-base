import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {MatDrawerContainer, MatSidenavModule} from '@angular/material/sidenav';
import {MatList, MatListItem, MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatIconButton,
    MatSidenavModule,
    MatListModule,
    MatListItem,
    RouterLink
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['login']).then();
    }
  }

}
