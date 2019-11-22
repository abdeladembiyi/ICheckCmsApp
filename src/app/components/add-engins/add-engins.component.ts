import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { FormErrorStateMatcher } from 'src/app/core/handlers/form-error-state-matcher';
import { MatTableDataSource, MatDialogConfig, MatDialog } from '@angular/material';
import { EnginService } from 'src/app/core/services/engin/engin.service';
import { MatDialogRef } from '@angular/material';
import { take } from 'rxjs/operators';
import { Constants } from 'src/app/shared/constants';
import { DataService } from 'src/app/shared/services/data.service';
import { EditEnginsComponent } from '../edit-engins/edit-engins.component';

@Component({
  selector: 'app-add-engins',
  templateUrl: './add-engins.component.html',
  styleUrls: ['./add-engins.component.scss'],
})
export class AddEnginsComponent implements OnInit {
  enginForm: FormGroup
  fileData: File = null;
  previewUrl: any = null;
  matcher = new FormErrorStateMatcher();
  isLoadingResults = false;
  displayedColumns: string[] = ['id', 'nomEngin', 'matricule', 'image','actions'];
  dataSource = new MatTableDataSource();
  constructor(private dialog: MatDialog,private formbuilder:FormBuilder,private service:EnginService, private enginDataService:DataService) { }

  ngOnInit() {
    this.getAllEngin();
    this.enginDataService.currentEnginDataSource.subscribe();
    this.enginForm = this.formbuilder.group({
      nomEngin: [null,[Validators.required]],
      //imageEngin: this.previewUrl,
      matricule : [null,[Validators.required]]
    })
  }
  AddEngin(form){
    console.log('formEngin',form);

    const data = {
      nomEngin: form.nomEngin,
      matricule: form.matricule,
      imageEngin: this.previewUrl,
    }
    this.service.AddEngin(data).subscribe(async res => {
      // tslint:disable-next-line:no-shadowed-variable
      await this.service.getEngins().pipe(take(1)).toPromise().then(data => this.enginDataService.changeEnginDataSource(data));
      this.getAllEngin();
    })
    
    this.enginForm.reset();
  }
  public upload(event: any): void {
    this.fileData = event.target.files[0];
    console.log('FileName: ', this.fileData.name);
    this.preview();
  }
  
  onEdit(element) {
    console.log(element);
    const config = new MatDialogConfig();
    config.disableClose = true;
    config.autoFocus = true;
    config.width = '80%';
    config.data = element;
    this.dialog.open(EditEnginsComponent, config)
      .afterClosed().subscribe(res => {
        console.log('Close: ', res);
        this.refresh();
      });
  }

  refresh() {
    this.service.getEngins().subscribe((res: any[]) => {
      this.dataSource = new MatTableDataSource(res);
      this.enginDataService.changeEnginDataSource(res);
    });
  }

  preview() {
    // Show preview 
    const mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (event) => {
      this.previewUrl = reader.result;
      console.log('Result: ', reader.result);
      console.log('Reader: ', this.previewUrl);
    };
  }
  getAllEngin() {
    this.service.getEngins().subscribe((data: any[]) => {
      console.log('engins :',data);
      this.dataSource = new MatTableDataSource(data);
    });
  }
  createImagePath(serverPath: string) {
    return `${Constants.serverImg}${serverPath}`;
    // return `http://localhost:4772/${serverPath}`;
  }
}
