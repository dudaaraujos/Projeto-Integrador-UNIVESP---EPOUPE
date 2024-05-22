import { Component, ElementRef, NgModule, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Lista } from '../../interfaces/auth';
import { MessageService } from 'primeng/api';
import { coms } from '../coms';
import { comService } from '../com.sercice';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})

export class ProdutosComponent implements OnInit{

  //@ViewChild('nInput') myElement!:ElementRef<HTMLInputElement>;
  //teste(){
    //this.myElement.nativeElement.value = '';
  //}

  uploadedFiles: any[] = [];

  onUpload(event: { files: any; }) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
        this.produtoForm.controls.imgPatch.setValue("http://localhost/img/"+file.name);
    }

    this.messageService.add({severity: 'success', summary: 'Opa, legal!', detail: 'Imagem enviada!'});
}

  produtoForm = this.fb.group({
    comercio:['', Validators.required],
    nomeProduto: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáÁãâéêíÍîóôõú/-]+(?: [a-zA-ZáÁãâéêíÍîóôõú/-]+)*$/)]],
    classeProduto: ['', Validators.required],
    unidade: ['', Validators.required],
    valor: +['', Validators.required],
    imgPatch: ['', Validators.required]
    }
    )

  constructor(private _comService: comService, private fb: FormBuilder, private authService: AuthService, private messageService: MessageService, private router: Router, http: HttpClient) { this.coms = [] }

  logOut(){
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

  getData(){
    return sessionStorage.getItem('email');
  }

  
  get comercio(){
    return this.produtoForm.controls['comercio']; 
  }

  get nomeProduto(){
    return this.produtoForm.controls['nomeProduto'];
  }

  get classeProduto(){
    return this.produtoForm.controls['classeProduto'];
  }

  get unidade(){
    return this.produtoForm.controls['unidade'];
  }

  get valor(){
    return this.produtoForm.controls['valor'];
  }

  get imgPatch(){
    return this.produtoForm.controls['imgPatch'];
  }

  submitDetails(){
    const postData = {...this.produtoForm.value};
    this.authService.registerProduto(postData as Lista).subscribe(
      response => {
        console.log(response);
        this.messageService.add({ severity: 'success', summary: 'Opa, legal!', detail: 'Registrado com sucesso!' });
        this.produtoForm.controls.classeProduto.reset();
        this.produtoForm.controls.nomeProduto.reset();
        this.produtoForm.controls.unidade.reset();
        this.produtoForm.controls.valor.reset();
        this.produtoForm.controls.imgPatch.reset();
        this.router.navigate(['produto']);
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'error', detail: 'Algo deu errado!' });
      }
    )
  }

  public coms: coms[];

    ngOnInit(): void {
      this._comService.getCom()
        .subscribe(
          retorno => {
            this.coms = retorno.map (item =>{
              return new coms(
                item.comercio,
                item.email
              )
            }
            )
          }
        )
    }
  }


