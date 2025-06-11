"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportePorProveedor = void 0;
const Reporte_1 = require("./Reporte");
class ReportePorProveedor extends Reporte_1.Reporte {
    //   constructor(idReporte: number) {
    //     this.idReporte = idReporte;
    //     this.fechaGeneracion = new Date();
    //"Super" llama al constructor de la clase padre
    //   }
    constructor(idReporte, idProveedor, fechaGeneracion) {
        super(idReporte, fechaGeneracion);
        this.idProveedor = idProveedor;
    }
    generar() {
        console.log(`Generando reporte para proveedor ${this.idProveedor} (ID: ${this.idReporte})`);
        console.log(this.fechaGeneracion);
    }
}
exports.ReportePorProveedor = ReportePorProveedor;
