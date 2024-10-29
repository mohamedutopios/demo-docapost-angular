import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges {

@Input() data: string;

constructor(){
  console.log('Child - constructor');
}
ngOnInit(): void {
  console.log('Child - ngOnInit');
} 

ngOnChanges(changes: SimpleChanges): void {
  console.log('Child - ngOnChanges');
  console.log(changes);
}

ngOnDestroy(): void {
  console.log('Child - ngOnDestroy');
}








}
