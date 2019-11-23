import { Component, OnInit } from '@angular/core';
import { ConducteurService } from 'src/app/core/services/conducteur/conducteur.service';
import { FormBuilder, Validators, FormGroup, NgForm, FormControl } from '@angular/forms';
import * as moment from 'moment';
import { PermisService } from 'src/app/core/services/permis/permis.service';

@Component({
  selector: 'app-add-conducteur',
  templateUrl: './add-conducteur.component.html',
  styleUrls: ['./add-conducteur.component.scss'],
})
export class AddConducteurComponent implements OnInit {

  conducteurForm: FormGroup;
  dateValiditeAssurance = new FormControl(moment());
  permis;

  constructor(private conducteurService: ConducteurService,
    private formbuilder: FormBuilder, private permisService:PermisService) { }

  ngOnInit() {
    this.conducteurForm = this.formbuilder.group({
      nomComplet: ['', Validators.required],
      cin: ['', Validators.required],
      cnss: ['', Validators.required],
      numBadge: ['', Validators.required],
      idpermis: ['', Validators.required],
      societe: ['', Validators.required],
      
    });
    this.permisService.getPermis().subscribe(res => {
      if (res) {
        this.permis = res;
      }
    });
  }

  Addconducteur(form) {
    if (!form.valid) {
      console.log('is not valid');
      return;
    }

    const data = {
      nomComplet: form.controls['nomComplet'].value,
      cin: form.controls['cin'].value,
      cnss: form.controls['cnss'].value,
      numBadge: form.controls['numBadge'].value,
      idpermis: form.controls['idpermis'].value,
      societe: form.controls['societe'].value,
      
    };
    console.log('Data Conducteur: ', data);

    this.conducteurService.AddConducteur(data).subscribe(res => {
      //this.refresh();
      console.log('Add Conducteur: ', res);
      this.resetform();
    });
  }

  resetform() {
    // this.dateValiditeAssurance.setValue(moment());
    this.conducteurForm.reset();
  }

  // change(event)
  // {
  //   if(event.isUserInput) {
  //     console.log(event.source.value, event.source.selected);
  //   }
  // }
}
