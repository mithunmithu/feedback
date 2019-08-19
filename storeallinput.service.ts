import { DatePipe } from '@angular/common'
import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file/ngx';

@Injectable({
  providedIn: 'root'
})
export class StoreallinputService {

  constructor(private file: File,public datepipe: DatePipe) { }

  private reaction;
  private feedback;
  private idea;
  private empid;
  private filename;
  private dateTime;
  private fileid=0;
  private jsonobj;
  private testdata;

  setalldata(object)
  {
    // this.reaction=paramreaction;
    // // this.feedback=paramfeedback;
    // this.idea=paramidea;
    // this.empid=paramempid;

    console.log(object);
    
    this.fileid=this.fileid+1;
    this.dateTime = new Date();
   let latest_date =this.datepipe.transform(this.dateTime, 'yyyy-MM-dd');
   this.filename="fback"+latest_date+this.fileid;
  

   this.jsonobj={id:this.empid,idea:this.idea,reaction:this.reaction}
   
   this.testdata=JSON.stringify(this.jsonobj)
  //  console.log(this.testdata) ;

   this.writeJSON(this.filename,this.testdata);
  }

  writeJSON(filename, object)
   {
     return this.file.writeFile(this.file.externalRootDirectory, filename, JSON.stringify(object), {replace:true})
    }
}
