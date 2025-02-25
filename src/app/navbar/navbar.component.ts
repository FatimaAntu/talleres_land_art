import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importar RouterModule para los enlaces

/**
 * Componente que representa la barra de navegación de la aplicación.
 * Contiene los enlaces a las diferentes secciones de la aplicación.
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule], // Importamos RouterModule para que los enlaces funcionen
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // Corregido: styleUrls en plural
})
export class NavbarComponent { }

