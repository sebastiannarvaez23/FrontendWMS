import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  openSlidebar(msn: string): void {

    let sidebar = document.querySelector(".sidebar");
    (sidebar) ? sidebar.classList.toggle("close") : null;
    let arrow = document.querySelectorAll(".arrow");
    for (var i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", (e) => {
        let arrowParent = (e.target as HTMLElement).parentElement;
        if (arrowParent) {
          arrowParent.classList.toggle("showMenu");
        }
      });
    }
  }
}