import { Component, OnInit, Input } from '@angular/core';
import { IHeroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  @Input() hero!: IHeroe;

  constructor() { }

  ngOnInit(): void {
  }

}
