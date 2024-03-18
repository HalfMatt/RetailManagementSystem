import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = "";
  password = "";

  constructor(public toastController: ToastController) { }

  ngOnInit() {
  }

  async showToast() {
    const toast = await this.toastController.create({
      message: `Username: ${this.username}, Password: ${this.password}`,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}