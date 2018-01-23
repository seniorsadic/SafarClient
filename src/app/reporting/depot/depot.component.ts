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
    let formData = new FormData();
    for (var i = 0; i < this.uploader.queue.length; i++) {
      formData.append('selectFile', this.uploader.queue[i]._file, this.uploader.queue[i]._file.name);
      this.agence.uploadImage(formData)
        .subscribe(data => {
        //  this.uploader.queue[i].isSuccess=true;
        //  this.uploader.queue[i].progress=100;
          this.uploader.progress=100;
        }, err => {
          console.log(err);
        });
    }
  }

}
