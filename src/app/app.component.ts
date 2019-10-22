import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Mario';
  last_name = 'Roca';

  public suma(a,b){
    return a+b;
  }
}
