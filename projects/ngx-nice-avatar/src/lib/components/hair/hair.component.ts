import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hair',
  template: `
    <svg:g>
    <ng-container *ngIf="hair == 'Danny_Phantom'">
      <path
        d="M182.788 48.4887L182.864 48.4969L182.941 48.4991C209.61 49.2835 230.342 59.8969 245.013 72.8493C259.069 85.2583 267.463 99.7231 270.2 109.582C266.14 111.899 259.185 113.893 250.315 115.528C240.639 117.312 229.022 118.615 217.168 119.544C193.462 121.401 168.978 121.749 157.543 121.5L151.47 121.368L156.276 125.083C158.774 127.013 162.099 128.356 165.615 129.3C169.156 130.252 173.034 130.835 176.746 131.167C180.57 131.509 184.299 131.589 187.387 131.51C176.8 139.672 163.325 145.948 150.038 150.6C134.692 155.973 119.768 159.12 110.209 160.521L108.06 160.836L108.551 162.952C111.898 177.381 118.052 202.603 122.179 219.519C124.01 227.025 125.442 232.895 126.054 235.463C127.138 240.017 130.552 246.508 134.448 252.491C138.041 258.008 142.233 263.38 145.77 266.687L137.932 298.5H108.371C116.709 285.787 118.469 271.097 116.769 255.517C114.929 238.653 109.007 220.513 102.766 202.35C102.151 200.562 101.534 198.774 100.916 196.986C95.2326 180.527 89.5644 164.113 86.4936 148.382C83.0922 130.958 82.9407 114.651 89.3264 100.314C99.6653 77.0999 117.993 63.6198 136.326 56.1911C154.701 48.745 172.945 47.4399 182.788 48.4887Z"
        [attr.fill]="hairColor"
        stroke="black"
        stroke-width="4"
      />
    </ng-container>

    <ng-container *ngIf="hair == 'Doug_Funny'">
      <path
        d="M199 87C213.667 86.3333 239.4 78.2 225 51"
        stroke="black"
        stroke-width="4"
      />
      <path
        d="M173 85C187.667 84.3333 213.4 76.2 199 49"
        stroke="black"
        stroke-width="4"
      />
      <path
        d="M137 96C151.667 95.3333 177.4 87.2 163 60"
        stroke="black"
        stroke-width="4"
      />
    </ng-container>

    <ng-container *ngIf="hair == 'Fonza'">
      <path
        d="M269.177 82.3965C260.855 122.294 162.499 127.896 142.677 127.896C90.6548 133.823 115.625 196.262 125.177 227.396C117.677 228.396 118.677 237.396 89.6772 165.896C66.4772 108.696 132.183 73.8337 180.999 61.9995C229.815 50.1653 248.499 33.502 248.499 33.502C269.177 42 274.116 58.7185 269.177 82.3965Z"
        [attr.fill]="hairColor"
      />
      <path
        d="M264.134 155.947L248.316 102.507L258.354 93.3644C269.109 130.452 269.601 151.988 264.134 155.947Z"
        [attr.fill]="hairColor"
      />
      <path
        d="M139 201C133.4 173.8 119.333 178.667 110 180L100 136L140.584 127.506C141.336 127.266 142.141 127.095 143 127L140.584 127.506C122.433 133.299 134.956 179.796 150 199L139 201Z"
        [attr.fill]="hairColor"
      />
      <path
        d="M83.9887 98.3632C92.8341 93.9091 103.281 96.4873 107.398 98.3331L95.6273 113.213C98.6625 108.357 89.1329 101.29 83.9887 98.3632Z"
        [attr.fill]="hairColor"
      />
      <path
        d="M69 115.5C80.6 108.7 91.8333 111 96 113L91.5 128.5C90.3 120.1 76 116.333 69 115.5Z"
        [attr.fill]="hairColor"
      />
    </ng-container>

    <ng-container *ngIf="hair == 'Full'">
      <path
        d="M45.6007 343.857C45.4477 343.466 45.2377 342.916 44.9828 342.219C44.4158 340.667 43.6268 338.384 42.7485 335.479C40.9915 329.667 38.8806 321.38 37.4734 311.502C34.6563 291.725 34.6769 265.696 45.8698 240.384C47.679 236.292 49.94 232.089 52.3903 227.533C61.8582 209.931 74.1551 187.07 74.1551 145.084C74.1551 114.493 89.0029 88.7305 110.862 70.5692C132.741 52.3915 161.56 41.9109 189.237 41.9109C204.368 41.9109 216.533 43.6444 226.311 49.5511C236.028 55.4212 243.679 65.5978 249.362 83.1322C249.94 84.9168 251.851 86.0074 253.719 85.4015C265.034 81.7304 282.191 85.4361 296.673 94.8904C311.091 104.303 322.289 119.046 322.289 136.814C322.289 152.24 319.647 162.664 317.071 172.815L317.071 172.815C313.952 185.104 310.94 196.974 313.065 216.313C313.774 222.762 315.216 227.336 317.231 231.128C319.213 234.859 321.712 237.747 324.345 240.792L324.405 240.861C330.679 248.113 333.534 254.079 334.455 259.327C335.375 264.562 334.412 269.31 332.623 274.237C331.723 276.712 330.629 279.197 329.47 281.815L329.37 282.041C328.248 284.573 327.074 287.225 326.019 290.016C323.836 295.787 322.133 302.223 322.302 309.851C322.446 316.326 323.594 320.764 325.311 324.122C327.008 327.442 329.199 329.565 331.11 331.416L331.162 331.466C332.905 333.155 334.355 334.577 335.428 336.57C336.387 338.351 337.098 340.702 337.217 344.232C313.208 358.511 289.445 364.413 271.601 366.734C262.565 367.91 255.057 368.166 249.818 368.129C247.199 368.11 245.149 368.019 243.76 367.932C243.271 367.902 242.865 367.872 242.544 367.847C236.393 358.458 230.789 342.969 226.447 327.059C222.226 311.589 219.261 295.968 218.147 285.649C255.22 274.931 278.458 236.667 272.871 197.189C272.864 197.117 272.856 197.067 272.856 197.066C272.848 197.006 272.837 196.938 272.825 196.867C272.813 196.792 272.798 196.703 272.78 196.601C272.764 196.511 272.746 196.41 272.726 196.3C272.641 195.832 272.516 195.172 272.353 194.346C272.028 192.693 271.552 190.358 270.942 187.532C269.722 181.88 267.967 174.249 265.825 166.155C263.685 158.065 261.152 149.485 258.372 141.945C255.613 134.46 252.541 127.802 249.264 123.706L248.967 123.335L248.532 123.146C246.6 122.308 244.593 121.374 242.499 120.399C232.568 115.775 220.659 110.23 205.235 109.62C186.46 108.877 162.684 115.396 130.544 138.706L128.521 140.173L130.467 141.74C146.393 154.574 149.836 171.598 149.1 186.048C148.539 197.077 145.551 206.459 143.865 211.149C142.704 209.452 141.964 207.319 141.408 204.814C141.023 203.083 140.743 201.258 140.449 199.347L140.403 199.045C140.096 197.051 139.769 194.97 139.292 192.961C138.341 188.95 136.732 184.941 133.16 182.102C129.581 179.257 124.364 177.848 116.767 178.272L114.54 178.396L115.005 180.578L126.363 233.891L126.382 233.98L126.41 234.068C130.468 246.93 137.426 258.078 146.323 266.88C146.399 267.007 146.509 267.193 146.65 267.434C146.939 267.928 147.356 268.653 147.861 269.563C148.87 271.384 150.229 273.941 151.621 276.886C154.435 282.835 157.282 290.138 157.83 296.102C158.386 302.154 156.865 309.962 155.123 316.412C154.26 319.605 153.361 322.406 152.677 324.407C152.535 324.824 152.402 325.206 152.281 325.549C147.249 323.144 142.754 323.323 138.902 325.565C134.738 327.989 131.689 332.625 129.419 337.781C125.271 347.202 123.276 359.42 122.355 367.002C97.4846 361.298 78.281 355.507 65.2149 351.107C58.5012 348.846 53.408 346.953 49.9993 345.627C48.2949 344.964 47.0117 344.443 46.1575 344.089C45.9454 344.002 45.7598 343.924 45.6007 343.857Z"
        [attr.fill]="hairColor"
        stroke="black"
        stroke-width="3.82184"
      />
    </ng-container>

    <ng-container *ngIf="hair == 'Mr_Clean'">
      <ellipse
        cx="206.854"
        cy="89.1803"
        rx="6.85759"
        ry="18.4393"
        transform="rotate(117 206.854 89.1803)"
        fill="rgba(255,255,255,0.3)"
      />
    </ng-container>

    <ng-container *ngIf="hair == 'Mr_T'">
      <path
        opacity="0.35"
        d="M246.986 108.176C238.986 101.776 225.153 101.176 219.486 101.676L211.486 75.1758C225.086 78.3758 243.486 99.1758 246.986 108.176Z"
        [attr.fill]="hairColor"
      />
      <path
        d="M144.792 42.7636C144.792 42.7636 150.53 38.802 174.746 32.701C198.963 26.5999 207.792 28.9833 207.792 28.9833L219.581 101.815C219.581 101.815 211.542 101.642 191.548 106.009C171.555 110.375 161.986 115.675 161.986 115.675L144.792 42.7636Z"
        [attr.fill]="hairColor"
      />
      <path
        d="M107.985 117.676C101.185 76.0758 131.319 49.5091 144.985 42.1758L161.985 115.676C142.785 76.0758 116.652 100.509 107.985 117.676Z"
        [attr.fill]="hairColor"
      />
      <path
        opacity="0.35"
        d="M126.485 161.675C119.285 134.475 148.485 119.842 161.985 115.675C154.985 99.3415 138.985 84.6749 119.485 102.676C101.485 133.175 108.485 156.676 113.986 174.675L126.485 161.675Z"
        [attr.fill]="hairColor"
      />
    </ng-container>

    <ng-container *ngIf="hair == 'Pixie'">
      <path
        d="M164.837 119.819C166.725 120.117 166.725 120.119 166.724 120.12L166.724 120.123L166.723 120.131L166.72 120.149C166.717 120.163 166.714 120.18 166.711 120.2C166.703 120.24 166.693 120.292 166.68 120.356C166.653 120.484 166.613 120.66 166.555 120.884C166.44 121.331 166.252 121.965 165.955 122.778C165.36 124.403 164.329 126.736 162.562 129.701C159.392 135.018 153.86 142.359 144.246 151.29C174.216 152.037 199.25 142.382 217.067 132.257C226.428 126.938 233.779 121.498 238.784 117.394C241.286 115.343 243.199 113.627 244.482 112.429C245.123 111.83 245.607 111.361 245.928 111.044C246.088 110.886 246.208 110.766 246.286 110.687C246.325 110.647 246.353 110.618 246.372 110.599L246.391 110.579L246.395 110.575L246.395 110.575L248.677 108.201L249.606 111.36L247.772 111.899C249.606 111.36 249.606 111.36 249.606 111.361L249.607 111.363L249.609 111.372L249.619 111.405L249.658 111.538L249.81 112.058C249.944 112.515 250.14 113.187 250.391 114.052C250.894 115.78 251.616 118.275 252.496 121.344C254.255 127.483 256.643 135.919 259.162 145.11C264.189 163.457 269.766 184.924 271.855 197.08C275.348 217.398 269.947 232.824 266.753 241.949C266.132 243.723 265.594 245.259 265.222 246.546C265.275 246.591 265.345 246.646 265.436 246.711C266.033 247.134 267.092 247.622 268.623 248.108C271.638 249.067 275.942 249.853 280.544 250.296C285.138 250.738 289.921 250.828 293.882 250.442C295.864 250.248 297.587 249.94 298.957 249.522C300.273 249.12 301.097 248.665 301.542 248.254C301.555 248.168 301.573 247.963 301.523 247.566C301.425 246.79 301.118 245.698 300.586 244.253C299.793 242.096 298.617 239.455 297.242 236.368C296.776 235.321 296.287 234.222 295.782 233.074C291.853 224.135 287.126 212.51 286.096 200.666C284.952 187.505 287.553 176.25 289.89 166.133L290.001 165.651C292.389 155.311 294.376 146.332 292.336 137.232C289.24 123.422 285.017 111.924 278.532 103.662C272.115 95.4881 263.412 90.3865 251.036 89.4485L249.758 89.3516L249.363 88.1322C243.668 70.5619 235.98 59.081 226.177 51.9616C216.377 44.8448 204.221 41.9109 189.238 41.9109C161.55 41.9109 131.735 52.4301 109.36 70.629C87.0087 88.8092 72.2166 114.525 74.1521 144.963C76.288 178.554 73.8537 204.024 68.3638 222.675C63.3578 239.682 55.7707 251.141 46.6763 257.825C47.8695 258.434 49.4602 259.208 51.4473 260.094C56.4742 262.334 64.038 265.292 74.1209 268.121C93.4555 273.546 122.066 278.501 159.832 277.008C151.508 269.857 143.109 261.18 136.458 252.008C128.825 241.481 123.323 230.065 123.162 219.433C122.971 206.806 123.826 173.765 124.09 166.926C124.705 151.03 134.912 138.776 144.628 130.626C149.515 126.527 154.356 123.398 157.972 121.295C159.782 120.242 161.291 119.443 162.352 118.904C162.882 118.635 163.301 118.431 163.591 118.293C163.67 118.255 163.74 118.222 163.799 118.194C163.848 118.171 163.89 118.152 163.925 118.136C163.964 118.118 163.994 118.104 164.015 118.094L164.04 118.083L164.047 118.079L164.05 118.078C164.051 118.078 164.051 118.078 164.837 119.819ZM164.837 119.819L166.725 120.117L167.276 116.623L164.051 118.078L164.837 119.819ZM265.068 246.388C265.071 246.388 265.082 246.402 265.097 246.428C265.073 246.401 265.066 246.388 265.068 246.388Z"
        [attr.fill]="hairColor"
        stroke="black"
        stroke-width="3.82184"
      />
      <path
        d="M250 89C250.5 93.5 249.7 102.5 248.5 108.5"
        stroke="black"
        stroke-width="4"
      />
    </ng-container>

    <ng-container *ngIf="hair == 'Turban'">
      <path
        d="M281.726 131.791C281.726 65.702 245.268 21.0001 200.859 21C143.966 21 86 42.3414 86 143.254C86 168.223 96.6589 186.827 111.564 200.54C110.07 198.671 108.867 196.996 108.067 195.619C105.176 168.638 137.233 147.929 168.601 127.665C185.254 116.907 201.712 106.275 212.646 94.8956C222.24 100.332 250.44 123.109 255.813 132.32C258.695 137.26 263.322 154.189 266.484 173.95C276.822 161.532 281.726 149.107 281.726 131.791Z"
        [attr.fill]="hairColor"
        stroke="black"
        stroke-width="4"
      />
      <path
        d="M213.264 94.2457C226.438 82.3013 246.146 55.0399 244.881 37.334"
        stroke="black"
        stroke-width="4"
      />
    </ng-container>
    </g>
  `,
  styles: [
  ]
})
export class HairComponent implements OnInit {

  @Input() hairColor!: string;
  @Input() hair!: Hair;
  constructor() { }

  ngOnInit(): void {
  }

}

export type Hair= 'None'|'Danny_Phantom'|'Doug_Funny'|'Fonza'|'Full'|'Mr_Clean'|'Mr_T'|'Pixie'|'Turban';
  