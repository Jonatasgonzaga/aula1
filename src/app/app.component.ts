import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public estado: boolean = false;

/*tipagem de parâmetro */
  public mudarEstado(estado: boolean):void {
    this.estado = estado;
  }
}
