import { Component, OnInit } from '@angular/core';
import TourItemModel from '../../models/tour-item.model';

@Component({
  selector: 'app-nat-tours',
  templateUrl: './nat-tours.component.html',
  styleUrls: ['./nat-tours.component.scss']
})
export class NatToursComponent implements OnInit {

  cardItemList: TourItemModel[] = [];

  constructor() { }

  ngOnInit(): void {
    this.populateCardListDetails();
  }

  populateCardListDetails(): void {
    const cardList = [];

    cardList.push(
      new TourItemModel({
        title: 'the sea explorer',
        price: 297,
        colorBack: 'card-animate-back-yellow',
        colorFront: 'card-pic-yellow',
        colorHead: 'card-heading-yellow',
        benificts: [
          '3 day tours',
          'Up to 30 people',
          '2 tour guides',
          'Sleep in cozy hotels',
          'Difficulty: easy'
        ]
      })
    );

    cardList.push(
      new TourItemModel({
        title: 'the forest hiker',
        price: 497,
        colorBack: 'card-animate-back-green',
        colorFront: 'card-pic-green',
        colorHead: 'card-heading-green',
        benificts: [
          '7 day tours',
          'Up to 40 people',
          '6 tour guides',
          'Sleep in provided tents',
          'Difficulty: medium'
        ]
      })
    );

    cardList.push(
      new TourItemModel({
        title: 'the snow adventurer',
        price: 897,
        colorBack: 'card-animate-back-blue',
        colorFront: 'card-pic-blue',
        colorHead: 'card-heading-blue',
        benificts: [
          '5 day tours',
          'Up to 15 people',
          '3 tour guides',
          'Sleep in cozy hotels',
          'Difficulty: hard'
        ]
      })
    );

    this.cardItemList = cardList;
  }

}
