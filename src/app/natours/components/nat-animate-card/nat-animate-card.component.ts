import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nat-animate-card',
  templateUrl: './nat-animate-card.component.html',
  styleUrls: ['./nat-animate-card.component.scss']
})
export class NatAnimateCardComponent implements OnInit {

  @Input()
  colorClass = '';

  constructor() { }

  ngOnInit(): void {
  }

}
