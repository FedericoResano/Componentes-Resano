import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {

  pageTitle="Lista de Productos"

  constructor() { }

  imageWidth = 50;

  imageMargin = 2;

  productos: any= [
    {
      "idProducto": 1,
      "NombreProducto": "Destornillador",
      "precio": 519.00,
      "calificacion": 4.4,
          },
    {
      "idProducto": 2,
      "NombreProducto": "Martillo",
      "precio": 430.00,
      "calificacion": 3.4,
    },
    {
      "idProducto": 3,
      "NombreProducto": "Espátula",
      "precio": 280.00,
      "calificacion": 1.4, 
    }
  ];

}
