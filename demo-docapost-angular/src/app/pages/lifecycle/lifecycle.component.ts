import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../../components/child/child.component';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [CommonModule, FormsModule, ChildComponent],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent implements OnInit, OnDestroy, OnChanges {
  
  name: string;

  constructor() {
    console.log('lifecycle - constructor');
    setTimeout(() => {
      this.name = 'Angular 8';
    },5000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('lifecycle - ngOnChanges');
    console.log(changes);
  }

/*   ngAfterContentInit() {
    console.log('lifecycle - ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('lifecycle - ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('lifecycle - ngAfterViewInit');
  } */


    
  ngOnInit() {
    console.log('lifecycle - ngOnInit');
  }

  ngOnDestroy() {
    console.log('lifecycle - ngOnDestroy');
  }

}
