import { GestconcertService } from './../services/gestconcert.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.page.html',
  styleUrls: ['./gestion.page.scss'],
})
export class GestionPage implements OnInit {

  constructor(public gestconcertService: GestconcertService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async validateForm() {
    if (!this.gestconcertService.validateInput()) {
      const toast = await this.toastCtrl.create({
        message: "m'enfin!?!",
        duration: 3000,
        position: 'middle',
        color: 'primary',
      });
      toast.present();
      return;
    }
    this.gestconcertService.addConcert(this.gestconcertService.getConcertData());
    this.router.navigateByUrl('/home');

  

  }
}
