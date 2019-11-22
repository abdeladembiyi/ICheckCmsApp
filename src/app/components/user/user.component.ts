import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user/user.service';
import { RoleService } from 'src/app/core/services/role/role.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userForm : FormGroup;
  roles;
  constructor(private userService:UserService,private formBuilder:FormBuilder,private roleService:RoleService) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      nomComplet : ['',Validators.required],
      userName : ['',Validators.required],
      password : ['',Validators.required],
      idRole : ['',Validators.required],
      // societe:['',Validators.required]
    });
    this.roleService.getRoles().subscribe(res => {
      if (res) {
        this.roles = res;
      }
    });
  }
  Adduser(form){
    this.userService.addUsers(form.value).subscribe();
    this.userForm.reset();
  }
}
