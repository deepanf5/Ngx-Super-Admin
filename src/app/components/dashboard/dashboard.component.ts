import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { KnobModule } from 'primeng/knob';
import { ApiserviceService } from 'src/app/api/apiservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent {

  data: any;
  pieData: any
  options: any;
  pieOPtion: any
  pieDataTwo: any;
  pieOPtionTwo: any;
  percentage = 90;


  constructor(private api: ApiserviceService) { }

  ngOnInit() {

    this.doughnut();
    this.line();
    this.pieTwo();

  }


  doughnut() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['ad', 'dl', 'edt'],
      datasets: [
        {
          data: [67, 56, 25],
          backgroundColor: [documentStyle.getPropertyValue('--green-500'), documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--orange-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--green-500'), documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--orange-500')]
        }
      ]
    };


    this.options = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      }
    };
  }


  line() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.pieData = {
      labels: ['Lst year', 'curt year', 'nt year'],
      datasets: [
        {
          data: [540, 625, 702],
          backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--orange-500'), documentStyle.getPropertyValue('--green-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--orange-400'), documentStyle.getPropertyValue('--green-400')]
        }
      ]
    };

    this.pieOPtion = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor
          }
        }
      }
    };
  }


  pieTwo() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.pieDataTwo = {
      labels: ['Lst year', 'curt year', 'nt year'],
      datasets: [
        {
          data: [540, 325, 702],
          backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--orange-500'), documentStyle.getPropertyValue('--green-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--orange-400'), documentStyle.getPropertyValue('--green-400')]
        }
      ]
    };

    this.pieOPtionTwo = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor
          }
        }
      }
    };
  }


  setButtonStatus() {

    this.api.setAddButton(false);
    this.api.setDisable(true)

  }



}




