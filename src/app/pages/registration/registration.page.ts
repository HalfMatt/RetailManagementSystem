import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  firstName = '';
  middleName = '';
  lastName = '';
  contactNumber = '';
  emailAddress = '';
  username = '';
  password = '';
  confirmPassword = '';

  constructor(public toastController: ToastController) { }

  ngOnInit() {
  }

  async showToast() {
    const toast = await this.toastController.create({
      message: `First Name: ${this.firstName}, Middle Name: ${this.middleName}, Last Name: ${this.lastName}, Contact Number: ${this.contactNumber}, Email Address: ${this.emailAddress}, Username: ${this.username}, Password: ${this.password}, Confirm Password: ${this.confirmPassword}`,
      duration: 5000,
      position: 'top'
    });
    toast.present();
  }
}