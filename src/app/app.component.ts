import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  openSideBar() {
    console.log("opensidebar()");
    const menuBtn = document.querySelector('#button-less-900px a i');
    const sideBar = document.getElementById('button-over-900px');
    if (sideBar !== null && menuBtn !== null) {
      if (sideBar.classList.contains('show')) {
        sideBar.classList.remove('show');
        menuBtn.innerHTML = 'menu';
      } else {
        sideBar.classList.add('show');
        menuBtn.innerHTML = 'close';
      }
    }
  }
}
