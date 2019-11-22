import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FormErrorStateMatcher } from 'src/app/core/handlers/form-error-state-matcher';
import { EnginService } from 'src/app/core/services/engin/engin.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataService } from 'src/app/shared/services/data.service';
import { take, startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-engins',
  templateUrl: './edit-engins.component.html',
  styleUrls: ['./edit-engins.component.scss'],
})
export class EditEnginsComponent implements OnInit {

  editEnginForm: FormGroup;
  fileToUpload;
  matcher = new FormErrorStateMatcher();
  isLoadingResults = false;
  fileData: File = null;
  previewUrl: any = null;
  filteredEngin: Observable<any[]>;
  enginControl = new FormControl();
  engins = [];
  constructor(private formBuilder: FormBuilder,
              private enginService: EnginService,
              private dialogRef: MatDialogRef<EditEnginsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private enginDataService: DataService) { }

  ngOnInit() {
    this.enginDataService.currentEnginDataSource.subscribe();
    this.filterInitEngin();
    this.ShowEngin();
    this.editEnginForm = this.formBuilder.group({
      id: [this.data.id, Validators.required],
      nomEngin: this.enginControl,
      matricule: [this.data.nom, [Validators.required]],
      // file: [null, Validators.required],
      // show: [this.data.show, [Validators.required]]
    });
  }

  onEditSubmit(form) {
    form.value.imageEngin = this.previewUrl;

    if (this.previewUrl) {
      form.value.imageEngin = this.previewUrl;
    } else {
      form.value.imageEngin = this.data.imageEngin;
    }

    this.enginService.updateEngin(this.data.id, form.value).subscribe(async res => {
      await this.enginService.getEngins().pipe(take(1)).toPromise().then(data => this.enginDataService.changeEnginDataSource(data));
    });
    this.editEnginForm.reset();
    this.dialogRef.close();
    // this.dialogRef.afterClosed().subscribe(res => this.updateDataSource());
  }

  public upload(event: any): void {
    this.fileData = event.target.files[0];
    this.preview();
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
  close() {
    this.dialogRef.close();
  }
  ShowEngin(){
    this.enginService.getEngins().subscribe((data: any[]) => {
      console.log(data);
      this.engins = data;
    });
  }


  private filterInitEngin() {
    this.filteredEngin = this.enginControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterEngin(value))
      );
  }

  private _filterEngin(value: string): any[] {
    const filterValue = value != null ? value.toLowerCase() : '';
    return this.engins.filter(e => e.nomEngin.toLowerCase().includes(filterValue));
  }
  getEngin(engin){
    this.editEnginForm.controls.matricule.patchValue(engin.matricule);
  }
}
