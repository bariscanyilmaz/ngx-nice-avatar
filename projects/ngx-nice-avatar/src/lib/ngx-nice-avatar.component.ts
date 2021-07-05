import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Ear,Earring,Beard,Nose,Glasses,Hair,Mouth,Shirt,Eyebrows,Eyes, } from "./type";

@Component({
  selector: 'ngx-nice-avatar',
  template: `
     <svg #svg
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
      <g ngx-face [faceColor]="faceColor" ><g ngx-beard [beard]="beardType" [beardColor]="beardColor"></g></g>
      <g ngx-mouth [mouth]="mouth"></g>
      <g ngx-eyebrows [eyeBrows]="eyeBrows"></g>
      <g ngx-hair [hair]="hair" [hairColor]="hairColor" ></g>
      <g ngx-eyes [eye]="eye" ></g>
      <g ngx-glasses [glasses]="glasses"></g>
      <g ngx-nose [nose]="nose" ></g>
      <g ngx-ear [ear]="ear" [faceColor]="faceColor"></g>
      <g ngx-earring [ear]="ear" [earring]="earring"></g>
      <g ngx-shirt [shirt]="shirt" [shirtColor]="shirtColor"> </g>
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
  @Input() beardType!: Beard;
  @Input() beardColor!: string;
  @Input() bgColor!: string;

  @ViewChild('svg') svg:ElementRef<SVGElement>;

  constructor() { }

  ngOnInit(): void {

  }

  get element():SVGElement{
    return this.svg.nativeElement;
  }

}
