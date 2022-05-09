import { Component, OnInit } from '@angular/core';
import { IHeroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe: IHeroe = { id: 0, name: ''};

  constructor() { }

  ngOnInit(): void {
  }

}
