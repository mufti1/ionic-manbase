import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
   selector: 'page-menu',
   templateUrl: 'menu.html',
 })
 export class MenuPage {

   public babs : any;

   constructor(public navCtrl: NavController, public navParams: NavParams, public http : Http) {
   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad MenuPage');
   }

   materiContent(babId,babJudul){
     let data = {
       id:babId,
       judul:babJudul
     }
     this.navCtrl.push('Materi2Page',data);
   }

   ionViewWillEnter(){
     this.loadBab();
   }

   loadBab(){
     this.http.get('https://www.manbase.duniaarloji.com/bab/bab.php')
     .map(res => res.json())
     .subscribe(data=> {
       this.babs = data;
     });
   }
 }
