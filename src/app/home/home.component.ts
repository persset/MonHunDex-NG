import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  openMonsterInfo(infoName: String) {
    let elements: HTMLCollectionOf<Element> =
      document.getElementsByClassName('dm-info');
    for (let i: number = 0; i < elements.length; i++) {
      elements[i].setAttribute('style', 'display: none');
    }

    document
      .getElementById(infoName.valueOf())
      ?.setAttribute('style', 'display:block');
  }
}
