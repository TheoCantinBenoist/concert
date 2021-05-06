import { GestconcertService } from './../services/gestconcert.service';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

public formulaireTab=[];

  constructor(public gestconcertService: GestconcertService,
    private alertCtrl :AlertController,
    private router: Router
   ) {}

  public async ngOnInit(){
    this.formulaireTab = await this.gestconcertService.getConcert();
  }
  
  public async deletOneConcert(pos){
    const alert= await this.alertCtrl.create({
      cssClass:"my-custom-class",
      header:"t'es sur?",
      message:"mais genre, vraiment sur?",
      buttons:[
        {text: 'nop!'},
        {text: 'yep!',
      handler: ()=>{this.gestconcertService.deletConcert(pos)}}
      ]
    });
    alert.present();
    
  }

    public goUpdateConcert(pos){
      this.gestconcertService.input = this.formulaireTab[pos]
     this.router.navigateByUrl('/modifier');
    }

   

}
