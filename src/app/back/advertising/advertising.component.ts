import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Advertising } from 'src/app/advertising';
import { AdvertisingService } from './advertising.service';

@Component({
  selector: 'app-advertising',
  templateUrl: './advertising.component.html',
  styleUrls: ['./advertising.component.css']
})
export class AdvertisingComponent implements OnInit {

  Advertisings: any;
  
  public editAdvertising: any;
  public deleteAdvertising: any;

  constructor(private advertisingService: AdvertisingService) { }


  ngOnInit(): void {
    this.getAdvertisings();
  }

  public getAdvertisings(): void {
    this.advertisingService.getAdvertisings().subscribe(
      (response: Advertising[]) => {
        this.Advertisings = response;
        console.log(this.Advertisings);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddAdvertising(addForm: NgForm): void {
    // document.getElementById('add-Advertising-form').click();
    this.advertisingService.addAdvertising(addForm.value).subscribe(
      (response: Advertising) => {
        console.log(response);
        this.getAdvertisings();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateAdvertising(advertising: Advertising, id:number): void {
    this.advertisingService.updateAdvertising(advertising, id).subscribe(
      (response: Advertising) => {
        console.log(response);
        this.getAdvertisings();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteAdvertising(id: number): void {
    this.advertisingService.deleteAdvertising(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getAdvertisings();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(advertising: Advertising, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addAdvertisingModal');
    }
    if (mode === 'edit') {
      this.editAdvertising= advertising;
      button.setAttribute('data-target', '#updateAdvertisingModal');
    }
    if (mode === 'delete') {
      this.deleteAdvertising = advertising;
      button.setAttribute('data-target', '#deleteAdvertisingModal');
    }
    container.appendChild(button);
    button.click();
  }
}
