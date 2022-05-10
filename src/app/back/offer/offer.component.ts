import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Offer } from 'src/app/offer';
import { OfferService } from './offer.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  offers: any;
  
  public editOffer: any;
  public deleteOffer: any;

  constructor(private offerService: OfferService) { }


  ngOnInit(): void {
    this.getOffers();
  }

  public getOffers(): void {
    this.offerService.getOffers().subscribe(
      (response: Offer[]) => {
        this.offers = response;
        console.log(this.offers);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddOffer(addForm: NgForm): void {
    // document.getElementById('add-Offer-form').click();
    this.offerService.addOffer(addForm.value).subscribe(
      (response: Offer) => {
        console.log(response);
        this.getOffers();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateOffer(Offer: Offer, id:number): void {
    this.offerService.updateOffer(Offer, id).subscribe(
      (response: Offer) => {
        console.log(response);
        this.getOffers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteOffer(id: number): void {
    this.offerService.deleteOffer(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getOffers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(offer: Offer, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addOfferModal');
    }
    if (mode === 'edit') {
      this.editOffer= offer;
      button.setAttribute('data-target', '#updateOfferModal');
    }
    if (mode === 'delete') {
      this.deleteOffer = offer;
      button.setAttribute('data-target', '#deleteOfferModal');
    }
    container.appendChild(button);
    button.click();
  }
}
