import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/back/reservation/reservation.service';
import { Reservation } from 'src/app/reservation';

@Component({
  selector: 'app-collaborations',
  templateUrl: './collaborations.component.html',
  styleUrls: ['./collaborations.component.css']
})
export class CollaborationsComponent implements OnInit {

  reservations: any;
  
  constructor(private reservationService: ReservationService) { }


  ngOnInit(): void {
    this.getReservations();
  }

  public getReservations(): void {
    this.reservationService.getReservations().subscribe(
      (response: Reservation[]) => {
        this.reservations = response;
        console.log(this.reservations);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
}
}
