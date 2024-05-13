// src/app/models/carro.ts
export class Carro {
    constructor(
        public id: number,
        public modelo: string,
        public placa: string,
        public montadora: any,  // Idealmente, deveria ter uma classe ou interface própria
        public ano: number,
        public valor: number
    ) {}
}
