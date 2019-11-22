import { Component, OnInit } from '@angular/core';
import { BaseChartDirective, Color } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import { StatsService } from 'src/app/core/services/stats/stats.service';
import * as _moment from 'moment';
import { FormControl } from '@angular/forms';
import { Stats } from 'fs';
const moment = _moment;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dateStats = new FormControl(moment());
  messageLineChart;
  site;
  blocked;
  blockedSite = [];
  blockedNumber;
  NotBlocked;
  Controled;
  i;
  public barChartData: any[];
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            stepSize: 1,
            min: 0
          }
        }
      ]
    }
  };
  public barChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: '#eedd41',
    },
  ];

  public lineChartData: any[];
  public lineChartLabels = [];
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            //stepSize: 1,
            min: 0
          }
        }
      ]
    }
  };

  public lineChartColors: Color[] = [
    {
      borderColor: 'Red',
      backgroundColor: 'rgba(236, 156, 156, 0.2)',
    },
  ];
  
 

  constructor(private statsService:StatsService) { }

  ngOnInit() {
    this.site = localStorage.getItem('site');
    this.getNumberOfBlocked();
    this.getNumberOfNotBlocked();
    this.getNumberOfControled();
  }
  
  ngAfterViewInit() {
    
    this.statsByMonthAndYear();
    console.log(this.dateStats);
  }

  getChartData(stats) {
    let data = [];
    stats.forEach(element => {
      data.push(element.count);
    });
    return data;
  }

  getChartLabels(stats) {
    let labels = [];
    stats.forEach(element => {
      labels.push(element.label);
    });

    return labels;
  }
  
  statsByMonthAndYear() {

    this.statsService.getStatsByMonth().subscribe((res: any) => {
      if (res.stats) {
        this.barChartData = [{ data: this.getChartData(res.stats), label: 'Camions' }];
        this.barChartLabels = this.getChartLabels(res.stats);
      } else {
        alert('Aucune résultat');
      }
    });
    this.statsService.getStatsBlockedByMonth(this.site).subscribe((res: any) => {
      if (res.stats) {
        this.lineChartData = [{ data: this.getChartData(res.stats), label: 'camions Non Conforme' }];
        this.lineChartLabels = this.getChartLabels(res.stats);
      } else {
        this.messageLineChart = 'Aucun résultat';
      }
    });
  }
  getNumberOfBlocked(){
    return this.statsService.getNumberOfBlocked().subscribe((res:any) =>{
      console.log('stats',res.stats[0].label)
      console.log('statsnumber',res.stats[0].count)
        for (let i = 0; i < res.stats.length; i++) {
        this.blockedSite.push(res.stats[i])
      }
     
    });
  }
  getNumberOfNotBlocked(){
    return this.statsService.getNumberOfNotBlocked().subscribe(
      res => this.NotBlocked = res
    );
  }
  getNumberOfControled(){
    return this.statsService.getNumberOfControled().subscribe(
      res => this.Controled = res
    )
  }
}


