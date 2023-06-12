import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('dynamictemp', { read: ViewContainerRef })
  dynamicComponentRef: ViewContainerRef;
  constructor(private componentFactoryresolver: ComponentFactoryResolver) {}
  ngOnInit() {
    console.log('app');
  }
  callDynamicCmpnt() {
    const regComponent =
      this.componentFactoryresolver.resolveComponentFactory(
        HeroesListComponent
      );
    const createComponent =
      this.dynamicComponentRef.createComponent(regComponent);
    createComponent.instance.title =
      'I am title and comming from app component';
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
