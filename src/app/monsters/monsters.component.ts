import { Component } from '@angular/core';
import { isConstructorDeclaration } from 'typescript';
import { Monster } from '../models/Monster';
import { MonsterService } from '../services/monster.service';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css'],
})
export class MonstersComponent {
  title = 'Monsters';
  monsters: Monster[] = [];

  constructor(private monsterService: MonsterService) {}

  ngOnInit(): void {
    this.monsterService
      .getAllMonsters()
      .subscribe((result: Monster[]) => (this.monsters = result));

    console.log(this.monsters);
  }
}
