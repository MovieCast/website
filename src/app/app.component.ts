import { Component } from '@angular/core';

import '../../public/css/styles.css';
import '../../public/css/animate.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "MovieCast";
  navLinks = ['Home', 'About', 'Github', 'Download', 'Contact'];

  footerleft = ['About', 'Terms', 'Partners', 'Updates'];
  footerleftcenter = ['Specs', 'Tools', 'Resources'];
  footerrightcenter = ['How to use it', 'Github', 'Licences'];
  footerright = ['Questions', 'Answers', 'Contact us'];
}