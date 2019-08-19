import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {StoreallinputService} from 'src/app/storeallinput.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit 
{
  model: any = {};


  isonload=false;
  isvalidatereaction=false;
  ishappy = true;
  isokay = true;
  issad= true;
  empid:string;
  feedbacktext:string;
  ideatext:string;
  reaction:string='';
  constructor(private Storeallinput:StoreallinputService,public alertController: AlertController) {}
  paraishappy=false;
  paraissad=false;
  paraisokay=false;

  private jsonobjreact;
  private testresult;

  ngOnInit() {}
  onclickhappy()
  {
    this.isokay= false;
    this.issad= false;
    this.reaction="happy";
    this.paraishappy=true;
    this.paraissad=false;
    this.paraisokay=false;

  }
  onclicksad()
  {
    this.isokay= false;
    this.ishappy= false;
    this.reaction="sad";
    this.paraishappy=false;
    this.paraissad=true;
    this.paraisokay=false;
  }
  onclickokay()
  {
    this.issad= false;
    this.ishappy= false;
    this.reaction="okay";
    this.paraishappy=false;
    this.paraissad=false;
    this.paraisokay=true;
  }

  onSubmit(form: NgForm)
   {
    //  this.isonload=true;
    //  if(this.reaction==='')
    //  {
    //   this.isvalidatereaction=true;
    //  }
    // else if (!form.valid) {
    //   return;
    // } 
    // else if(this.feedbacktext==='')
    // {

    // } 


    // this.feedbacktext = form.value.feebacktext;
    // this.ideatext = this.model
    // this.empid= form.name.employeeid;
    
   

    this.jsonobjreact={reaction:this.reaction}
    this.testresult=JSON.stringify(this.model) +JSON.stringify(this.jsonobjreact)

    

    this.Storeallinput.setalldata(this.testresult)
    this.presentAlert();
    form.reset();
    this.issad= true;
    this.ishappy= true;
    this.isokay=true;
    this.paraishappy=false;
    this.paraissad=false;
    this.paraisokay=false;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Thank you for your time',
      message: 'Your feedback and suggestions has been submitted successfully',
      buttons: ['OK']
    });

    await alert.present();
  }

  refreshmood()
  {
    this.issad= true;
    this.ishappy= true;
    this.isokay=true;
    this.paraishappy=false;
    this.paraissad=false;
    this.paraisokay=false;
  }

}
