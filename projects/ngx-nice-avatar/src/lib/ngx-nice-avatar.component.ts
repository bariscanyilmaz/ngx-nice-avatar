import { Component, Input, OnInit } from '@angular/core';
import { Shirt } from "./components/shirt/shirt.component";
import { Beard } from './components/beard/beard.component';
import { Ear } from './components/ear/ear.component';
import { Earring } from './components/earring/earring.component';
import { Eyebrows } from './components/eyebrows/eyebrows.component';
import { Eyes } from './components/eyes/eyes.component';
import { Glasses } from './components/glasses/glasses.component';
import { Hair } from './components/hair/hair.component';
import { Mouth } from './components/mouth/mouth.component';
import { Nose } from './components/nose/nose.component';

@Component({
  selector: 'ngx-nice-avatar',
  template: `
     <svg
    [attr.width]="size"
    [attr.height]="size"
    viewBox="0 0 380 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="190" cy="190" r="190" [attr.fill]="bgColor" />
    <mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="380"
      height="380"
    >
      <circle cx="190" cy="190" r="190" fill="#FFEDEF" />
    </mask>
    <g mask="url(#mask0)">
      <face [faceColor]="faceColor" ><beard [beard]="beard" [beardColor]="beardColor"></beard></face>
      <mouth [mouth]="mouth"></mouth>
      <eyebrows [eyeBrows]="eyeBrows"></eyebrows>
      <hair [hair]="hair" [hairColor]="hairColor" ></hair>
      <eyes [eye]="eye" ></eyes>
      <glasses [glasses]="glasses"></glasses>
      <nose [nose]="nose" ></nose>
      <ear [ear]="ear" [faceColor]="faceColor"></ear>
      <earring [ear]="ear" [earring]="earring"></earring>
      <shirt [shirt]="shirt" [shirtColor]="shirtColor"> </shirt>
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          width="200"
          height="320"
          fill="white"
          transform="translate(90 43)"
        />
      </clipPath>
    </defs>
  </svg>
  `,
  styles: [
  ]
})
export class NgxNiceAvatarComponent implements OnInit {

  @Input() size!: number;
  @Input() shirt!: Shirt;
  @Input() shirtColor!: string;
  @Input() ear!: Ear;
  @Input() earring!: Earring;
  @Input() faceColor!: string;
  @Input() nose!: Nose;
  @Input() glasses!: Glasses;
  @Input() hair!: Hair;
  @Input() hairColor!: string;
  @Input() eyeBrows!: Eyebrows;
  @Input() eye!: Eyes;
  @Input() mouth!: Mouth;
  @Input() beard!: Beard;
  @Input() beardColor!: string;
  @Input() bgColor!: string;
  constructor() { }

  ngOnInit(): void {

  }

}
