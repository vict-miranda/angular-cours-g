import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { IHeroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  heroes: IHeroe[] = [];
  loaded: boolean = false;

  constructor(private heroesService: HeroesService, private router: Router) {
  }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe({
      next: (v: IHeroe[]) =>  { 
        this.heroes = v;
        this.loaded = true
      },
      error: (e) => this.loaded = true,
      complete: () => this.loaded = true
    })
  }

  goToHeroe(heroe: IHeroe) {
    this.router.navigate(['/detail', heroe.id]);
  }

}
