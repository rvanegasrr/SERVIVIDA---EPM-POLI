
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, colorFill, serverOutline, server, serverSharp, personAdd, personAddSharp, personCircleSharp, personSharp, briefcase, briefcaseSharp, mapSharp, informationCircleSharp, informationCircleOutline, informationSharp, atOutline, logOutSharp, logOut, logOutOutline, constructOutline, constructSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Mi perfil', url: '/folder/inbox', icon: 'person',},
    { title: 'Ofertas de trabajo', url: '/folder/outbox', icon: 'briefcase' },
    { title: 'Mapa Laboral', url: '/folder/favorites', icon: 'map' },
    { title: 'Ayuda y Soporte', url: '/folder/archived', icon: 'information' },
    { title: 'Ajustes', url: '/folder/trash', icon: 'construct',},
    { title: 'Cerrar sesión', url: '/folder/spam', icon: 'log-out' },
  ];
  constructor() {
    addIcons({personSharp, briefcaseSharp, mapSharp, informationSharp, logOutSharp, constructSharp, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  };
}

