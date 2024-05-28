import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-interruptor',
    templateUrl: 'interruptor.component.html',
    styleUrls: ['interruptor.component.scss']
})

export class InterruptorComponent {
    @Output('pressionar') pressionar: EventEmitter<boolean> = new EventEmitter(false);
    public isLigado: boolean = false;

    public mudarEstado (): void {
        this.isLigado = !this.isLigado;
        this.pressionar.emit(this.isLigado);
    }
}