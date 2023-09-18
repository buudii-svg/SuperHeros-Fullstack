import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperHero } from 'src/app/Models/super-hero';
import { SuperHeroService } from 'src/app/Services/super-hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css'],
})
export class EditHeroComponent implements OnInit {
  @Input() hero?: SuperHero;
  @Output() updateHeroEvent = new EventEmitter<SuperHero[]>();
  constructor(private superHeroService: SuperHeroService) {}

  ngOnInit(): void {}

  updateHero(hero: SuperHero) {
    this.superHeroService
      .updateSuperHero(hero)
      .subscribe((heroes: SuperHero[]) => {
        this.updateHeroEvent.emit(heroes);
      });
  }
  deleteHero(hero: SuperHero) {
    if (hero.id !== undefined) {
      this.superHeroService
        .deleteSuperHero(hero.id)
        .subscribe((heroes: SuperHero[]) => {
          this.updateHeroEvent.emit(heroes);
        });
    }
  }
  createHero(hero: SuperHero) {
    this.superHeroService
      .createSuperHero(hero)
      .subscribe((heroes: SuperHero[]) => {
        this.updateHeroEvent.emit(heroes);
      });
  }
}
