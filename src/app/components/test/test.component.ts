import { Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  
  // after
  public count: number = 0;
  public product: Array<any> = [];

  // before
  // public count = signal<number>(0);

  // constructor(){
  //   effect(()=>{
  //     console.log(this.count());
      
  //   })
  // }

  
  // funcion de incremento
  increment(){
    // this.count.update(count => count + 1);
    this.count++;
    this.product.push(this.count)
  }

  decrement(){
    // this.count.update(count => count + 1);
    this.count--;
    this.product.pop()
  }
}
