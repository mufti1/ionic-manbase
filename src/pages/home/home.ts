import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pindahMateri(){
  	this.navCtrl.push('MenuPage');
  }

  pindahAbout(){
  	this.navCtrl.push('AboutPage'); 	
  }

  pindahQuiz(){
  	this.navCtrl.push('QuizPage');
  }

}
