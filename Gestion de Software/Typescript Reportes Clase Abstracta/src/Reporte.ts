export abstract class Reporte {
  protected idReporte: number;
  protected fechaGeneracion: string;

  constructor(idReporte: number, fechaGeneracion: string) {
    this.idReporte = idReporte;
    this.fechaGeneracion = fechaGeneracion;
  }

  abstract generar(): void;
}


