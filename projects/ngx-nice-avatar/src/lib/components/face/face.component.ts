import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'face',
  template: `
    
    
    <svg:g clip-path="url(#clip0)">
    <path
      d="M244 362.5C229.6 342.5 218.333 303.834 217 284.5L148.5 255L120 362.5H244Z"
      [attr.fill]="faceColor"
      stroke="black"
      stroke-width="4"
    />
    <mask
      id="mask1"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="120"
      y="255"
      width="124"
      height="118"
    >
      <path
        d="M244 372.5C229.6 352.5 218.333 303.834 217 284.5L148.5 255L120 372.5H244Z"
        [attr.fill]="faceColor"
      />
    </mask>
    <g mask="url(#mask1)">
      <g style="mix-blend-mode: multiply">
        <ellipse cx="214" cy="253" rx="59" ry="54" fill="black" />
      </g>
    </g>
    <mask id="path-6-inside-1" fill="white">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M273.886 193.917C273.859 193.801 273.831 193.685 273.803 193.569C273.776 193.454 273.748 193.338 273.719 193.222L257.323 124.786C257.306 124.718 257.29 124.65 257.274 124.582C257.258 124.514 257.242 124.446 257.225 124.379L257.152 124.075L257.151 124.076C246.933 82.6308 205.156 57.1472 163.582 67.1081C122.008 77.0689 96.3155 118.717 105.988 160.293L105.986 160.293L122.978 231.211L122.992 231.208C133.594 272.112 175.062 297.149 216.329 287.261C257.597 277.374 283.216 236.264 274.131 194.996L274.144 194.993L273.886 193.917Z"
      />
    </mask>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M273.886 193.917C273.859 193.801 273.831 193.685 273.803 193.569C273.776 193.454 273.748 193.338 273.719 193.222L257.323 124.786C257.306 124.718 257.29 124.65 257.274 124.582C257.258 124.514 257.242 124.446 257.225 124.379L257.152 124.075L257.151 124.076C246.933 82.6308 205.156 57.1472 163.582 67.1081C122.008 77.0689 96.3155 118.717 105.988 160.293L105.986 160.293L122.978 231.211L122.992 231.208C133.594 272.112 175.062 297.149 216.329 287.261C257.597 277.374 283.216 236.264 274.131 194.996L274.144 194.993L273.886 193.917Z"
      [attr.fill]="faceColor"
    />
    <path
      d="M273.886 193.917L269.992 194.831L269.994 194.84L269.996 194.849L273.886 193.917ZM273.719 193.222L269.83 194.154L269.832 194.163L269.834 194.172L273.719 193.222ZM257.323 124.786L253.43 125.708L253.433 125.718L257.323 124.786ZM257.225 124.379L253.335 125.311L253.338 125.321L257.225 124.379ZM257.152 124.075L261.042 123.143L260.111 119.255L256.222 120.185L257.152 124.075ZM257.151 124.076L253.267 125.033L254.218 128.89L258.081 127.966L257.151 124.076ZM163.582 67.1081L162.65 63.2182L163.582 67.1081ZM105.988 160.293L106.922 164.182L110.784 163.255L109.884 159.386L105.988 160.293ZM105.986 160.293L105.052 156.404L101.165 157.337L102.096 161.225L105.986 160.293ZM122.978 231.211L119.088 232.143L120.02 236.035L123.911 235.101L122.978 231.211ZM122.992 231.208L126.864 230.204L125.878 226.401L122.058 227.318L122.992 231.208ZM216.329 287.261L215.397 283.371H215.397L216.329 287.261ZM274.131 194.996L273.2 191.106L269.381 192.021L270.225 195.856L274.131 194.996ZM274.144 194.993L275.075 198.883L278.966 197.951L278.034 194.061L274.144 194.993ZM277.78 193.002C277.751 192.881 277.722 192.759 277.693 192.637L269.914 194.502C269.94 194.611 269.966 194.721 269.992 194.831L277.78 193.002ZM277.693 192.637C277.664 192.516 277.635 192.395 277.605 192.273L269.834 194.172C269.861 194.281 269.887 194.391 269.914 194.502L277.693 192.637ZM253.433 125.718L269.83 194.154L277.609 192.29L261.212 123.854L253.433 125.718ZM261.215 123.863C261.198 123.793 261.181 123.722 261.164 123.65L253.384 125.514C253.4 125.578 253.415 125.643 253.43 125.708L261.215 123.863ZM261.164 123.65C261.147 123.579 261.13 123.508 261.113 123.436L253.338 125.321C253.353 125.385 253.369 125.449 253.384 125.514L261.164 123.65ZM253.262 125.007L253.335 125.311L261.115 123.447L261.042 123.143L253.262 125.007ZM258.081 127.966L258.083 127.966L256.222 120.185L256.221 120.185L258.081 127.966ZM261.035 123.118C250.291 79.5398 206.364 52.7447 162.65 63.2182L164.514 70.998C203.949 61.5498 243.575 85.7219 253.267 125.033L261.035 123.118ZM162.65 63.2182C118.936 73.6917 91.9216 117.484 102.092 161.199L109.884 159.386C100.709 119.951 125.08 80.4461 164.514 70.998L162.65 63.2182ZM106.92 164.183L106.922 164.182L105.054 156.403L105.052 156.404L106.92 164.183ZM126.868 230.279L109.876 159.361L102.096 161.225L119.088 232.143L126.868 230.279ZM122.058 227.318L122.044 227.322L123.911 235.101L123.925 235.097L122.058 227.318ZM119.12 232.211C130.268 275.223 173.869 301.548 217.261 291.151L215.397 283.371C176.254 292.75 136.92 269.002 126.864 230.204L119.12 232.211ZM217.261 291.151C260.653 280.755 287.591 237.53 278.038 194.136L270.225 195.856C278.842 234.999 254.541 273.993 215.397 283.371L217.261 291.151ZM273.212 191.103L273.2 191.106L275.063 198.886L275.075 198.883L273.212 191.103ZM269.996 194.849L270.254 195.925L278.034 194.061L277.776 192.985L269.996 194.849Z"
      fill="black"
      mask="url(#path-6-inside-1)"
    />
    <ng-content></ng-content>
    </g>

  `,
  styles: [
  ]
})
export class FaceComponent implements OnInit {

  @Input() faceColor!: string;
  constructor() { }

  ngOnInit(): void {
  }

}