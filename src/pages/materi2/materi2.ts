import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the Materi2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
   selector: 'page-materi2',
   templateUrl: 'materi2.html',
 })
 export class Materi2Page {

   public idBab :any;
   public babJudul :any;

   public babContents :any;

   constructor(public navCtrl: NavController, public navParams: NavParams, public http : Http) {
   }

   ionViewDidLoad() {
     this.idBab = this.navParams.get('id');
     this.babJudul = this.navParams.get('judul');
     this.contentLoad();
   }

   contentLoad(){
     this.http.get('https://www.manbase.duniaarloji.com/bab/content.php?id=' + this.navParams.get('id'))
     .map(res => res.json())
     .subscribe(data=> {
       this.babContents = data;
     });
   }

 }
