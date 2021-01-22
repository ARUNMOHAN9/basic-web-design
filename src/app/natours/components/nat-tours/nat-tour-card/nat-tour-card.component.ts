import { Component, Input, OnInit } from '@angular/core';
import TourItemModel from 'src/app/natours/models/tour-item.model';

@Component({
  selector: 'app-nat-tour-card',
  templateUrl: './nat-tour-card.component.html',
  styleUrls: ['./nat-tour-card.component.scss']
})
export class NatTourCardComponent implements OnInit {

  @Input()
  cardItem: TourItemModel | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
