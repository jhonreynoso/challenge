import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  items: NbMenuItem[] = [
    {
      title: 'Pagina principal',
      icon: 'home-outline',
      link: 'main-page'
    },
    {
      title: 'Tabla de Estadisticas',
      icon: 'activity-outline',
      link: 'stats-page'
    }
  ];
}


