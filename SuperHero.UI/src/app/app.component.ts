import { Component } from '@angular/core';
import { SuperHero } from './Models/super-hero';
import { SuperHeroService } from './Services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SuperHero.UI';
  heroes: SuperHero[] = [];
  heroToEdit?: SuperHero;
  constructor(private heroService: SuperHeroService) {}

  ngOnInit(): void {
    this.heroService.getSuperHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }
  initNewHero() {
    this.heroToEdit = new SuperHero();
  }
  editHero(hero: SuperHero) {
    this.heroToEdit = hero;
  }
  updateHeroList(heroes: SuperHero[]) {
    this.heroes = heroes;
  }
}
