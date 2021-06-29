import { Component, Input, OnInit } from '@angular/core';
import { Ear } from '../ear/ear.component';

@Component({
  selector: 'earring',
  template: `
  <svg:g>
    <ng-container *ngIf="ear == 'Small' && earring == 'Hoop'">
      <path
        d="M121 209C134.255 209 145 219.745 145 233C145 246.255 134.255 257 121 257C107.745 257 97 246.255 97 233C97 226.609 100.5 221.5 103.571 216.5L104.5 215"
        stroke="#F4D150"
        stroke-width="4"
      />
    </ng-container>

    <ng-container *ngIf="ear == 'Small' && earring == 'Stud'">
      <circle cx="122" cy="211" r="4" fill="#F4D150" />
      <circle cx="123" cy="210" r="1" fill="#FFEDEF" />
    </ng-container>

    <ng-container *ngIf="ear == 'Big' && earring == 'Hoop'">
      <path
        d="M114 214C127.255 214 138 224.745 138 238C138 251.255 127.255 262 114 262C100.745 262 90 251.255 90 238C90 231.609 93.5 226.5 96.5715 221.5L97.5 220"
        stroke="#F4D150"
        stroke-width="4"
      />
    </ng-container>

    <ng-container *ngIf="ear == 'Big' && earring == 'Stud'">
      <circle cx="115" cy="216" r="4" fill="#F4D150" />
      <circle cx="116" cy="215" r="1" fill="#FFEDEF" />
    </ng-container>
    </g>
  
  `,
  styles: [
  ]
})
export class EarringComponent implements OnInit {

  @Input() ear!:Ear;
  @Input() earring!:Earring;

  constructor() { }

  ngOnInit(): void {
  }

}

export type Earring='Hoop'|'Stud'|'None';
