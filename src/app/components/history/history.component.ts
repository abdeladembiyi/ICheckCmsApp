import { Component, OnInit, ViewChild } from '@angular/core';
import { BlockageService } from 'src/app/core/services/blockage/blockage.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {

  displayedColumns: string[] = ['id', 'vehicule', 'dateBlockage', 'motif', 'dateDeblockage'];
  dataSource = new MatTableDataSource();

  constructor(private blockageService: BlockageService, private dataService: DataService) { }

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  ngOnInit() {
    this.getBlockage()
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getBlockage() {
    this.blockageService.getBolckedEngins().subscribe((res: any[]) => {
      this.dataService.changeBlockageDataSource(res);
    });
    this.dataService.currentBlockageDataSource.subscribe(data => { this.dataSource.data = data; this.dataSource.paginator = this.paginator })
  }
}

