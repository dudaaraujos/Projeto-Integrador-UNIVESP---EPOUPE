import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Listas } from '../listas';
import { listaService } from '../lista.service';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css',
  styles: [`
    :host ::ng-deep .p-button {
        margin: 0 .5rem 0 0;
        min-width: 10rem;
    }

    p {
        margin: 0;
    }

    .confirmation-content {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    :host ::ng-deep .p-dialog .p-button {
        min-width: 6rem;
    }
`]
})
export class ListaComponent implements OnInit{
showDialog() {
throw new Error('Method not implemented.');
}
  primengConfig: any;

  constructor(private _listaService: listaService, private router: Router, primengConfig: PrimeNGConfig){ this.listas = [] }

  //@ViewChild('result') myElement!:ElementRef<HTMLLabelElement>;
  //teste(){
  //  var date = document.lastModified;
  //  this.myElement.nativeElement.innerText = "Última atualização: "+ date;
  //}
  
  loading: boolean = true;

  activityValues: number[] = [0, 100];

  sair(){
    sessionStorage.clear();
    this.router.navigate(['home']);
  }

  public listas: Listas[];

  ngOnInit(): void {
    this._listaService.getListas()
      .subscribe(
        retorno => {
          this.listas = retorno.map (item =>{
            return new Listas(
              item.id,
              item.comercio,
              item.nomeProduto,
              item.classeProduto,
              item.unidade,
              item.valor,
              item.imgPatch
            )
          }
          )
        }
      )
  }

    displayBasic: boolean = false;

    displayMaximizable: boolean = false;

    displayPosition: boolean = false;

    position!: string;

    showBasicDialog() {
        this.displayBasic = true;
    }

    showMaximizableDialog() {
        this.displayMaximizable = true;
    }

    showPositionDialog(position: string) {
        this.position = position;
        this.displayPosition = true;
    }
}

