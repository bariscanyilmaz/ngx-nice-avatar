import { Component, Input, OnInit } from '@angular/core';
import { Mouth } from '../../type';

@Component({
  selector: '[ngx-mouth]',
  template: `
    <svg:g>
    <ng-container *ngIf="mouth == 'Frown'">
      <path
        d="M175 244C178.211 236.043 190.107 219.233 212.007 215.652C233.907 212.071 245.127 224.107 248 230.572"
        stroke="black"
        stroke-width="4"
      />
    </ng-container>

    <ng-container *ngIf="mouth == 'Laughing'">
      <path
        d="M242.807 228.178C243.873 224.321 244.248 220.311 243.92 216.331C243.75 214.263 241.636 213.112 239.845 213.818C235.616 215.484 221.627 220.783 211.763 222.14C200.94 223.629 184.55 221.821 179.806 221.232C177.877 220.992 176.157 222.65 176.49 224.665C177.142 228.608 178.484 232.409 180.459 235.891C182.661 239.775 185.606 243.188 189.127 245.933C192.648 248.679 196.676 250.704 200.979 251.893C205.283 253.083 209.779 253.413 214.21 252.864C218.641 252.316 222.921 250.901 226.805 248.698C230.689 246.496 234.101 243.55 236.847 240.029C239.593 236.508 241.618 232.481 242.807 228.178Z"
        fill="black"
        stroke="black"
        stroke-width="4"
      />
      <mask
        id="mask2"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="178"
        y="215"
        width="65"
        height="37"
      >
        <path
          d="M241.793 215.193C242.309 219.363 241.999 223.594 240.879 227.645C239.76 231.695 237.854 235.486 235.27 238.8C232.686 242.113 229.474 244.886 225.818 246.958C222.163 249.031 218.135 250.364 213.964 250.88C209.794 251.396 205.563 251.085 201.512 249.966C197.462 248.846 193.671 246.94 190.357 244.356C187.043 241.772 184.271 238.56 182.198 234.905C180.126 231.249 178.793 227.221 178.277 223.051L241.793 215.193Z"
          fill="#171921"
        />
      </mask>
      <g mask="url(#mask2)">
        <circle
          cx="214.522"
          cy="255.315"
          r="21.5"
          transform="rotate(-7.05286 214.522 255.315)"
          fill="#FC909F"
        />
      </g>
    </ng-container>

    <ng-container *ngIf="mouth == 'Nervous'">
      <rect
        x="173.248"
        y="220.471"
        width="70"
        height="24"
        rx="4"
        transform="rotate(-4 173.248 220.471)"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M236.821 216.025L179.504 220.033L181.344 227.038C182.077 229.827 184.689 231.7 187.566 231.499C184.689 231.7 182.363 233.919 182.025 236.782L181.178 243.975L238.495 239.967L236.655 232.962C235.923 230.173 233.31 228.3 230.434 228.501C233.31 228.3 235.636 226.081 235.974 223.218L236.821 216.025Z"
        fill="white"
      />
      <path
        d="M246.419 234.704L245.4 220.134C245.143 216.448 241.663 213.88 238.079 214.649C231.135 216.14 217.858 218.783 208.262 219.454C198.667 220.125 185.151 219.355 178.067 218.845C174.411 218.582 171.323 221.61 171.581 225.296L172.599 239.866C172.857 243.552 176.336 246.12 179.921 245.351C186.865 243.86 200.142 241.217 209.737 240.546C219.333 239.875 232.849 240.645 239.933 241.155C243.589 241.418 246.677 238.39 246.419 234.704Z"
        stroke="black"
        stroke-width="4"
      />
    </ng-container>

    <ng-container *ngIf="mouth == 'Pucker'">
      <path
        d="M206 219.696C210.167 217.363 227 214.396 227 221.196C227 229.696 215.5 229.196 215.5 229.196C215.5 229.196 228.545 226.035 226 235.196C223.5 244.196 216.5 240.696 214.5 239.696"
        stroke="black"
        stroke-width="4"
      />
    </ng-container>

    <ng-container *ngIf="mouth == 'Sad'">
      <path
        d="M193 249C194.715 241.043 201.071 224.233 212.771 220.652C224.471 217.071 230.465 229.107 232 235.572"
        stroke="black"
        stroke-width="4"
      />
    </ng-container>

    <ng-container *ngIf="mouth == 'Smile'">
      <path
        d="M179.5 220.5C182 237.5 210.5 245.5 236.5 226"
        stroke="black"
        stroke-width="4"
      />
    </ng-container>

    <ng-container *ngIf="mouth == 'Smirk'">
      <path
        d="M190.001 227.165C194.941 233.612 202.428 240.754 213.977 239.125C225.526 237.496 230.664 229.53 229.149 223.078"
        stroke="black"
        stroke-width="4"
      />
    </ng-container>

    <ng-container *ngIf="mouth == 'Suprised'">
      <path
        d="M216.047 257.891C226.884 255.93 233.233 243.955 231.025 231.754C228.817 219.553 218.673 210.562 207.836 212.523C196.999 214.484 190.65 226.46 192.859 238.661C195.067 250.862 205.21 259.853 216.047 257.891Z"
        fill="black"
        stroke="black"
        stroke-width="3.59115"
      />
      <mask
        id="mask2"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="194"
        y="214"
        width="36"
        height="43"
      >
        <ellipse
          cx="211.942"
          cy="235.207"
          rx="17.5976"
          ry="21.257"
          transform="rotate(-10.2582 211.942 235.207)"
          fill="#171921"
        />
      </mask>
      <g mask="url(#mask2)">
        <ellipse
          cx="215.202"
          cy="253.219"
          rx="20.2046"
          ry="18.3047"
          transform="rotate(-10.2582 215.202 253.219)"
          fill="#FC909F"
        />
      </g>
    </ng-container>
    </g>
  `,
  styles: [
  ]
})
export class MouthComponent implements OnInit {

  @Input() mouth!:Mouth;
  constructor() { }

  ngOnInit(): void {
  }

}

