import { Component, OnInit } from '@angular/core';
import { GestconcertService } from './../services/gestconcert.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.page.html',
  styleUrls: ['./modifier.page.scss'],
})
export class ModifierPage implements OnInit {

  constructor(public gestconcertService: GestconcertService,
    private toastCtrl: ToastController,
    private router: Router) { }

  ngOnInit() {
  }
  public updateOneConcert() {
    this.gestconcertService.updateConcert();
     this.router.navigateByUrl('/home');

  }




}
