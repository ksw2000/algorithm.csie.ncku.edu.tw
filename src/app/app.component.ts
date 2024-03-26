import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) { }

  toggleSideBar(forceClose: boolean = false) {
    if(document){
      const menuBtn = document.querySelector('#button-less-900px a i');
      const sideBar = document.getElementById('button-over-900px');
      if (sideBar !== null && menuBtn !== null) {
        if (forceClose || sideBar.classList.contains('show')) {
          sideBar.classList.remove('show');
          menuBtn.innerHTML = 'menu';
        } else {
          sideBar.classList.add('show');
          menuBtn.innerHTML = 'close';
        }
      }
    }
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.toggleSideBar(true);
        console.log('NavigationEnd event:', event);
      }
    });
  }
}
