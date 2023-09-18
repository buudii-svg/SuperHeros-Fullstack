import { Injectable } from '@angular/core';
import { SuperHero } from '../Models/super-hero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SuperHeroService {
  url: string = 'SuperHero';
  constructor(private http: HttpClient) {}
  public getSuperHeroes(): Observable<SuperHero[]> {
    return this.http.get<SuperHero[]>(`${environment.apiURL}/${this.url}`);
  }
  public getSuperHero(id: number): Observable<SuperHero> {
    return this.http.get<SuperHero>(`${environment.apiURL}/${this.url}/${id}`);
  }
  public updateSuperHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.put<SuperHero[]>(
      `${environment.apiURL}/${this.url}/${hero.id}`,
      hero
    );
  }
  public createSuperHero(hero: SuperHero): Observable<SuperHero[]> {
    return this.http.post<SuperHero[]>(
      `${environment.apiURL}/${this.url}`,
      hero
    );
  }
  public deleteSuperHero(id: number): Observable<SuperHero[]> {
    return this.http.delete<SuperHero[]>(
      `${environment.apiURL}/${this.url}/${id}`
    );
  }
}
