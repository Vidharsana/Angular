import { Component } from '@angular/core';
import { ReservationService } from './reservation.service';
import { Reservation } from './model/Reservation';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RestaurantReservationManagamentSystem';
  reservation : Reservation ;
  result : string;
  reservationArr : Reservation[];
  flag : boolean;

  constructor(private service : ReservationService){
    this.reservation = new Reservation();
    this.result= "",
    this.reservationArr = [];
    this.flag = false ;
  }
  insertReservation(data : any){
    this.reservation.id = data.custId
    this.reservation.custName = data.custName;
    this.reservation.custContact = data.custContact;
    this.reservation.custAdd = data.custAdd;
    this.reservation.seatCount = data.seatCount;
    this.reservation.custBooking = data.custBooking;
    this.reservation.custSeat = data.custSeat;
    this.reservation.custOcca = data.custOcca;
    this.reservation.custFood = data.custFood;

    // alert(data.custName+" "+ data.custBooking+" "+data.custSeat+" "+data.seatCount+" "+data.custOcca+" "+data.custFood);

    this.result=this.service.insertReservation(this.reservation)
  }

  updateReservation(data: any) {
    this.reservation.id = data.custId;
    this.reservation.custName = data.custName;
    this.reservation.custContact = data.custContact;
    this.reservation.custAdd = data.custAdd;
    this.reservation.seatCount = data.seatCount;
    this.reservation.custBooking = data.custBooking;
    this.reservation.custSeat = data.custSeat;
    this.reservation.custOcca = data.custOcca;
    this.reservation.custFood = data.custFood;
    
    this.result=this.service.updateReservation(this.reservation);
  }

  deleteReservation(data: any) {
    // alert(data.custName+" "+ data.custBooking+" "+data.custSeat+" "+data.seatCount+" "+data.custOcca+" "+data.custFood + " All deleted SuccessFully.");

    this.result=this.service.deleteReservation(data.custId );
  }

  findReservation(data: any) {
    this.reservation=this.service.findReservation(data.custId);
    this.result = this.reservation.id + " " +this.reservation.custName + " " +this.reservation.custContact  + " " +this.reservation.custAdd+ " " +this.reservation.seatCount + " " +this.reservation.custBooking  + " " +this.reservation.custSeat  + " " +this.reservation.custOcca + " " +this.reservation.custFood ;
  }

  findAllReservation() {
    this.reservationArr=this.service.findAllReservation();
    this.flag = true;
  }
}
