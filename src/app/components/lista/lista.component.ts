import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Listas } from '../listas';
import { listaService } from '../lista.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit{

  constructor(private _listaService: listaService, private router: Router){ this.listas = [] }

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
}

