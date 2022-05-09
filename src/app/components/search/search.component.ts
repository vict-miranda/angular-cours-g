import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { IHeroe } from '../../interfaces/heroes.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes: IHeroe[] = [];
  loaded: boolean = false;

  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
        if (params['text'] != null) {
            this.getHeroe(params['text']);
        }
    });
  }

  ngOnInit(): void {
  }

  getHeroe(text: string) {
    this.heroesService.getHeroes().subscribe({
      next: (v: IHeroe[]) =>  { 
        this.heroes = v.filter(x => x.name.toLowerCase().trim().indexOf(text.toLowerCase().trim()) > -1);
      },
      error: (e) => this.loaded = true,
      complete: () => this.loaded = true
    })
  }

}
