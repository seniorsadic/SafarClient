import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import {AgenceService} from "../../../services/agence.service";

const URL = 'http://localhost/Safar18/web/app_dev.php/detailsUpload/';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {

  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  constructor(public agence: AgenceService) { }

  ngOnInit() {
  }

  affiche() {
    console.log(this.uploader);
    let formData=new FormData();
    formData.append('file',this.uploader.queue[0]._file,this.uploader.queue[0]._file.name);
    this.agence.upload(formData)
      .subscribe( data => {

      }, err => {
        console.log( err );
      } );
    // let reader = new FileReader();
    // reader.readAsDataURL(this.uploader.queue[0]._file);
    // reader.onload = () => {
    //   this.form.get('avatar').setValue({
    //     filename: file.name,
    //     filetype: file.type,
    //     value: reader.result.split(',')[1]
    //   })
    // };
  }

}
