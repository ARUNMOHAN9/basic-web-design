import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nat-plain-card',
  templateUrl: './nat-plain-card.component.html',
  styleUrls: ['./nat-plain-card.component.scss']
})
export class NatPlainCardComponent implements OnInit {

  @Input()
  displayIconName = '';

  @Input()
  cardTitle = '';

  constructor() { }

  ngOnInit(): void {
  }

}
