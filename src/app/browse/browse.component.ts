import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent {
 auth = inject(AuthService)
 name = JSON.parse(sessionStorage.getItem("loggedIn")!).name;
 profilePic = JSON.parse(sessionStorage.getItem("loggedIn")!).picture;
 email = JSON.parse(sessionStorage.getItem("loggedIn")!).email;

 signOut(){
  sessionStorage.removeItem("loggedIn");
  this.auth.signOut();
 }
}
