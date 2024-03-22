import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'iroman';
  public age: number =  45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeHero(nameChange: string):void{
      this.name = nameChange;
  }
  changeAge(ageChange: number):void{
    this.age = ageChange;

  }

  resetForm():void{
    this.name = 'iroman';
    this.age =  45;

  }


}
