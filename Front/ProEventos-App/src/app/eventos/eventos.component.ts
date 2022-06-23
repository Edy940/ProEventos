import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any = [];
  widthImg: number = 150;
  marginImg: number = 2;
  showImg: boolean = true;
  filterList: string= '';

  constructor(private http: HttpClient ) { }

  ngOnInit(): void {
    this.getEventos();
  }

  alteredImg() {
    this.showImg = !this.showImg;
  }

  public getEventos(): void {
   this.http.get('https://localhost:5001/api/eventos').subscribe(
    response => this.eventos = response,
    error => console.log(error)
  );
  }

}
