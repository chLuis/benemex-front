export interface Producto {
  _id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagen: {
    url:string,
    public_id: string
  };
  categoria: Categoria;
  //tipoPrenda: string;
}

export type Categoria = 'Indumentaria' | 'Accesorios' | 'Figuras' | 'Peluches';
// export type TipoPrenda =
//   | 'Camisetas'
//   | 'Pantalones'
//   | 'Camisas'
//   | 'Vestidos'
//   | 'Faldas'
//   | 'Chaquetas'
//   | 'Abrigos'
//   | 'Sudaderas'
//   | 'Ropa Interior'
//   | 'Accesorios';