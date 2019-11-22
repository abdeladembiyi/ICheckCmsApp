import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { catchError } from 'rxjs/operators';
import { DataService } from 'src/app/shared/services/data.service';
import { BlockageService } from 'src/app/core/services/blockage/blockage.service';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {

  motifForm: FormGroup;
  image;
  date;
  vehiculeID;
  blockageID;
  checklistID;

  constructor(private formBuilder: FormBuilder,
    private camera: Camera,
    private dataService: DataService, private blockageService: BlockageService) { }

  ngOnInit() {
    this.dataService.currentDateBlockage.subscribe(res => {
      console.log('Date Blockage: ', res);
      this.date = res;
    });

    this.dataService.currentVehiculeID.subscribe(res => {
      console.log('Vehicule ID: ', res);
      this.vehiculeID = res;
    });

    this.dataService.currentBlockageID.subscribe(res => {
      console.log('Blockage ID: ', res);
      this.blockageID = res;
    });

    this.dataService.currentCheckListID.subscribe(res => {
      console.log('Blockage ID: ', res);
      this.checklistID = res;
    });
    
    this.motifForm = this.formBuilder.group({
      motif: ['', Validators.required]
    });
    
  }

  takePicture() {
    const cameraOpt: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(cameraOpt).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.image = base64Image;
      console.log('Image: ', base64Image);
    }, (err) => {
      console.error(err);
    }).catch(err => catchError(err));
  }

  submit(form) {
    if(!form.valid && this.image) {
      return;
    }

    const data = {
      motif: form.controls['motif'].value,
      dateBlockage: this.date,
      idCheckList: this.checklistID,
      idVehicule: this.vehiculeID,
      imageUrl: this.image
    };
  }

}
