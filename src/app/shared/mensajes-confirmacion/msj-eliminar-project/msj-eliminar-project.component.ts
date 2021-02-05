import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-msj-eliminar-project',
  templateUrl: './msj-eliminar-project.component.html',
  styleUrls: ['./msj-eliminar-project.component.scss']
})
export class MsjEliminarProjectComponent implements OnInit {

  name: string = ''; 
  constructor(public dialogRef: MatDialogRef<MsjEliminarProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
    }

  ngOnInit(): void {
    this.name = this.data.name
  }

}
