import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatPaginator, MatDialogConfig } from '@angular/material';
import { UserService } from 'src/app/core/services/user/user.service';
import { FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent implements OnInit {


  displayedColumns: string[] = ['nomcomplet','username','role'];
  dataSource = new MatTableDataSource();
  searchKey: string;
  constructor(private dialog: MatDialog,private service: UserService,
              private formbuilder: FormBuilder,private userDataService:DataService) { }
@ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  ngOnInit() {
    this.refresh();
  }
  
  // Recuperation de la liste des conducteurs
  refresh() {
    this.service.getAllUser().subscribe((res: any[]) => {
      this.userDataService.changeUserDataSource(res);
    });
    this.userDataService.currentUserDataSource.subscribe(data => {this.dataSource.data = data;this.dataSource.paginator = this.paginator});
  }
  // rénitialisation Form
 
  // Ajouter un conducteur
}
