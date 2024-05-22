export class Listas {
    id: string;
    comercio: string;
    nomeProduto: string;
    classeProduto: string;
    unidade: string;
    valor: number;
    imgPatch: string;
  
    constructor(id:string, comercio:string, nomeProduto:string, classeProduto:string, unidade:string, valor:number, imgPatch:string){
      this.id = id;
      this.comercio = comercio;
      this.nomeProduto = nomeProduto;
      this.classeProduto = classeProduto;
      this.unidade = unidade;
      this.valor = valor;
      this.imgPatch = imgPatch;
}
}
