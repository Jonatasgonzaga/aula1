import {Component, Input} from '@angular/core'

@Component({
    templateUrl: 'lampada.component.html', 
    styleUrls: ['lampada.component.scss'],
    selector: 'app-lampada'
})

export class LampadaComponent {
    @Input('isAcesa') isAcesa: boolean = true;
}