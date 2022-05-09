import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { IHeroe } from '../../interfaces/heroes.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  heroes: IHeroe[] = [];
  heroe: IHeroe = { id: 0, name: '' };
  loaded: boolean = false;

  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
        if (params['id'] != null) {
            this.getHeroe(parseInt(params['id']));
        }
    });
  }

  ngOnInit(): void {
    
  }

  getHeroe(id: number) {
    // this.heroesService.getHeroe(id).subscribe({
    //   next: (h: IHeroe) =>  { 
    //     this.heroe = h;
    //   },
    //   error: (e) => this.loaded = true,
    //   complete: () => this.loaded = true
    // })

    this.heroesService.getHeroes().subscribe({
      next: (h: IHeroe[]) =>  { 
        this.heroe = h.find(x => x.id == id)!;
      },
      error: (e) => this.loaded = true,
      complete: () => this.loaded = true
    })
  }

}
