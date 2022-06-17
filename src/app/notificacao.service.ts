import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(private snackbar: MatSnackBar) { }

  notificar(mensagem: string) {
    this.snackbar.open(mensagem, "OK", {
      duration: 2000,
      verticalPosition: "bottom",
      horizontalPosition: "center"
    })
  }
}
