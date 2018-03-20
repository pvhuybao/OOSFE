import { Injectable } from '@angular/core';
import * as _ from 'underscore';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { OrdersService }from './orders.service';

import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';

@Injectable()
export class ModalService {
  constructor(public dialog: MatDialog, private orderService:OrdersService) {}
  
  openDialog(orderId:string) {
    let dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      width: '400px',
      data: { id: orderId }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.orderService.delete(orderId).subscribe();
      console.log('The dialog was closed');
    });
  }
}
