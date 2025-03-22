import { Injectable } from '@angular/core';
import { Reservation } from './model/Reservation';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  url : string;
  reservationArr : Reservation[];
  reservation : Reservation;

  constructor(private http: HttpClient) { 
    this.url = "http://localhost:3004/reservations";
    this.reservation = new Reservation();
    this.reservationArr = [];
  }

  insertReservation(reservation : Reservation){
    this.http.post<Reservation>(this.url, reservation).subscribe();
    return "Your Order and Reservation are Successfully Placed.";
  }
  updateReservation(reservation : Reservation){
    this.http.put<Reservation>(this.url+"/"+reservation.id ,reservation).subscribe();
    return "Your Order and Reservation are Updated Successfully.";
  }
  deleteReservation(custId : number){
    this.http.delete<Reservation>(this.url+"/"+custId).subscribe();
    return "Your Order and Reservation are delete";
  }
  findReservation(custId : number){
    this.http.get<Reservation>(this.url+"/"+custId).subscribe(data => this.reservation = data);
    return this.reservation;
  }
  findAllReservation(){
    this.http.get<Reservation[]>(this.url).subscribe(data => this.reservationArr=data);
    return this.reservationArr;
  }
}
