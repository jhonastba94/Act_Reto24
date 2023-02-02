import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'; 
import { BoxComponent } from '../box/box.component';

export interface DialogData {
  name: string;
  sport: string;
}
/* 
class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
} */


@Component({
  selector: 'app-act',
  templateUrl: './act.component.html',
  styleUrls: ['./act.component.css']
})
export class ActComponent {

  
  public name='';
  public sport = '';

//https://www.youtube.com/watch?v=keeBWela4is

  constructor(public dialog: MatDialog) {}

  openDialog(){
    //la constante debe ser = a this dialog open(...{})
    const dialogRef = this.dialog.open(BoxComponent,{
      width:'400px',
      data:{name: this.name, sport: this.sport}
    });
    //para obtener el resultado (this.sport)
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.sport = result;
    });
  }
}
