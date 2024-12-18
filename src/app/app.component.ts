import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DatePipe, NgClass, NgFor, NgForOf, NgIf} from "@angular/common";
import { SideBarComponent } from "./shared/components/side-bar/side-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass, SideBarComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  title = 'HumanResourcesPubSub';
  hiddenLeftPanel: boolean = false;
  role = 'recruiter'; // Cambiar a 'recruiter' según el rol del usuario
  // Toggle Sidebar
  sidebar : any;
  content : any;
  
  constructor(){
    this.hiddenLeftPanel = true;
  }

  ngOnInit(): void {
    // Función para mostrar el contenido correspondiente
    // if (this.role === 'applicant') {
    //   document.getElementById('applicantAccess')!.style.display = 'block';
    //   document.getElementById('recruiterAccess')!.style.display = 'none';
    //   document.getElementById('applicantContent')!.style.display = 'block';
    //   document.getElementById('recruiterContent')!.style.display = 'none';
    // } else if (this.role === 'recruiter') {
    //   document.getElementById('applicantAccess')!.style.display = 'none';
    //   document.getElementById('recruiterAccess')!.style.display = 'block';
    //   document.getElementById('applicantContent')!.style.display = 'none';
    //   document.getElementById('recruiterContent')!.style.display = 'block';
    // }


  }


  toggleBtn(): void{

  }
}
