import { Reporte } from './Reporte';

export class ReportePorProveedor extends Reporte {
  private idProveedor: number;

//   constructor(idReporte: number) {
//     this.idReporte = idReporte;
//     this.fechaGeneracion = new Date();

//"Super" llama al constructor de la clase padre
//   }
  constructor(idReporte: number, idProveedor: number, fechaGeneracion: string) {
    super(idReporte, fechaGeneracion);
    this.idProveedor = idProveedor;
  }

  generar(): void {
    console.log(`Generando reporte para proveedor ${this.idProveedor} (ID: ${this.idReporte})`)
    console.log(this.fechaGeneracion);
  }
}
