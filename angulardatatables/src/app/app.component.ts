import { Component , NgModule} from '@angular/core';
import {DataTablesModule} from 'angular-datatables';
import StudentsData from './studentsdata.json';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms'

interface Student{
  id: string;
  name:string;
  email:string;
  gender:string;
}

@Component({
  selector: 'app-root',
  imports: [DataTablesModule,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angulardatatables';
  students:Student[]=StudentsData;
}

