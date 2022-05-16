import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  estudiantes: any[] = [
              {
                id: 1,
                nombre: "Briney Isidore",
                telefono: "3171106471",
                curso: "Sexto B",
                jornada: "Nocturna",
                pago: "Si",
                estado: true
              },
              {
                "id": 2,
                nombre: "Mureil Carri",
                telefono: "3183974589",
                curso: "Sexto A",
                jornada: "Diurna",
                pago: "En transacción",
                estado: true
              },
              {
                "id": 3,
                nombre: "Courtnay Auberbach",
                telefono: "3112351108",
                curso: "Sexto A",
                jornada: "Nocturna",
                pago: "No",
                estado: false
              },
              {
                "id": 4,
                nombre: "Bibby Jagir",
                telefono: "3133475172",
                curso: "Sexto A",
                jornada: "Diurna",
                pago: "Si",
                estado: false
              },
              {
                "id": 5,
                nombre: "Ana Eliathas",
                telefono: "3127782418",
                curso: "Sexto A",
                jornada: "Diurna",
                pago: "No",
                estado: false
              },
              {
                "id": 6,
                nombre: "Addia Vastah",
                telefono: "3164212310",
                curso: "Sexto B",
                jornada: "Diurna",
                pago: "No",
                estado: true
              },
              {
                "id": 7,
                nombre: "Ermengarde Salvidor",
                telefono: "3108698704",
                curso: "Sexto A",
                jornada: "Diurna",
                pago: "Si",
                estado: false
              },
              {
                "id": 8,
                nombre: "Gusella Saint",
                telefono: "3181597055",
                curso: "Sexto A",
                jornada: "Nocturna",
                pago: "En transacción",
                estado: true
              },
              {
                "id": 9,
                nombre: "Adelle Sundin",
                telefono: "3146606654",
                curso: "Sexto A",
                jornada: "Nocturna",
                pago: "No",
                estado: false
              },
              {
                "id": 10,
                nombre: "Jerry Cottle",
                telefono: "3165846601",
                curso: "Sexto B",
                jornada: "Diurna",
                pago: "No",
                estado: true
              },
              {
                "id": 11,
                nombre: "Laurene Sadowski",
                telefono: "3181633866",
                curso: "Sexto B",
                jornada: "Nocturna",
                pago: "Si",
                estado: false
              },
              {
                "id": 12,
                nombre: "Jordan Daniele",
                telefono: "3183292076",
                curso: "Sexto A",
                jornada: "Diurna",
                pago: "No",
                estado: false
              },
              {
                "id": 13,
                nombre: "Nonnah Swigart",
                telefono: "3136282761",
                curso: "Sexto B",
                jornada: "Diurna",
                pago: "Si",
                estado: false
              },
              {
                "id": 14,
                nombre: "Shannah Noelyn",
                telefono: "3187525040",
                curso: "Sexto A",
                jornada: "Nocturna",
                pago: "Si",
                estado: true
              },
              {
                "id": 15,
                nombre: "Justinn Lalitta",
                telefono: "3162969847",
                curso: "Sexto B",
                jornada: "Diurna",
                pago: "En transacción",
                estado: false
              },
              {
                "id": 16,
                nombre: "Shandie Dash",
                telefono: "3136245654",
                curso: "Sexto B",
                jornada: "Nocturna",
                pago: "En transacción",
                estado: true
              },
              {
                "id": 17,
                nombre: "Xylina Sancho",
                telefono: "3152083595",
                curso: "Sexto A",
                jornada: "Diurna",
                pago: "No",
                estado: true
              },
              {
                "id": 18,
                nombre: "Catrina Bakerman",
                telefono: "3174775504",
                curso: "Sexto A",
                jornada: "Diurna",
                pago: "Si",
                estado: true
              },
              {
                "id": 19,
                nombre: "Roberta Keily",
                telefono: "3145851569",
                curso: "Sexto A",
                jornada: "Nocturna",
                pago: "Si",
                estado: false
              },
              {
                "id": 20,
                nombre: "Phylis Carbo",
                telefono: "3109231093",
                curso: "Sexto B",
                jornada: "Diurna",
                pago: "Si",
                estado: true
              },
              {
                "id": 21,
                nombre: "Alexine Fabiola",
                telefono: "3146977346",
                curso: "Sexto B",
                jornada: "Diurna",
                pago: "En transacción",
                estado: true
              },
              {
                "id": 22,
                nombre: "Chrystel Lea",
                telefono: "3105298382",
                curso: "Sexto B",
                jornada: "Diurna",
                pago: "No",
                estado: false
              },
              {
                "id": 23,
                nombre: "Roseline Ricarda",
                telefono: "3125108860",
                curso: "Sexto B",
                jornada: "Diurna",
                pago: "Si",
                estado: true
              },
              {
                "id": 24,
                nombre: "Stacey Haldas",
                telefono: "3178918293",
                curso: "Sexto A",
                jornada: "Nocturna",
                pago: "No",
                estado: true
              },
              {
                "id": 25,
                nombre: "Danny Rolf",
                telefono: "3157068866",
                curso: "Sexto B",
                jornada: "Diurna",
                pago: "No",
                estado: true
              },
              {
                "id": 26,
                nombre: "Nikki Graig",
                telefono: "3173509005",
                curso: "Sexto A",
                jornada: "Nocturna",
                pago: "En transacción",
                estado: false
              },
              {
                "id": 27,
                nombre: "Emma Bivins",
                telefono: "3182587984",
                curso: "Sexto A",
                jornada: "Nocturna",
                pago: "No",
                estado: true
              },
              {
                "id": 28,
                nombre: "Myrtice Egbert",
                telefono: "3113551479",
                curso: "Sexto B",
                jornada: "Diurna",
                pago: "Si",
                estado: true
              },
              {
                "id": 29,
                nombre: "Kirbee Greyson",
                telefono: "3156319696",
                curso: "Sexto A",
                jornada: "Nocturna",
                pago: "En transacción",
                estado: false
              },
              {
                "id": 30,
                nombre: "Beth Autrey",
                telefono: "3177511493",
                curso: "Sexto B",
                jornada: "Diurna",
                pago: "En transacción",
                estado: true
              }
            ]

  constructor() { }

  ngOnInit(): void {
  }

}
