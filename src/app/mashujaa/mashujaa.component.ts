import { Component, OnInit } from '@angular/core';
import {Mashujaa} from '../mashujaa';

@Component({
  selector: 'app-mashujaa',
  templateUrl: './mashujaa.component.html',
  styleUrls: ['./mashujaa.component.css']
})
export class MashujaaComponent implements OnInit {
  
      mashujaa: Mashujaa ={
         jina: "Nyerere",
         namba: 1,
         mkoa: "Musoma"
      }
  
  constructor() { }

  ngOnInit() {
  }

}
