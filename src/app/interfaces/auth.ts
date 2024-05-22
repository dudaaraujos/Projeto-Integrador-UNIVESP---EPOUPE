export interface User {
    id: string;
    fullName: string;
    comercio: string;
    email: string;
    password: string
}

export interface Lista {
    id: string;
    nomeProduto: string;
    classeProduto: string;
    unidade: string;
    valor: number;
    imgPatch: string;
    comercio: string
}
