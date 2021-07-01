import { Component, Input, OnInit } from '@angular/core';
import { Beard } from 'ngx-nice-avatar/lib/components/beard/beard.component';
import { Hair } from 'ngx-nice-avatar/lib/components/hair/hair.component';
import { Nose } from 'ngx-nice-avatar/lib/components/nose/nose.component';
import { Ear } from 'ngx-nice-avatar/lib/components/ear/ear.component';
import { Earring } from 'ngx-nice-avatar/lib/components/earring/earring.component';
import { Eyebrows } from 'ngx-nice-avatar/lib/components/eyebrows/eyebrows.component';
import { Eyes } from 'ngx-nice-avatar/lib/components/eyes/eyes.component';
import { Mouth } from 'ngx-nice-avatar/lib/components/mouth/mouth.component';
import { Glasses } from 'ngx-nice-avatar/lib/components/glasses/glasses.component';
import { Shirt } from 'ngx-nice-avatar/lib/components/shirt/shirt.component';

@Component({
  selector: 'app-root',
  template: `
    
  <div class="screen"> 
    <div class="avatar">
    <ngx-nice-avatar 
    [size]="size" [bgColor]="bgColor" [shirtColor]="shirtColor" 
    [faceColor]="faceColor" [hairColor]="hairColor" [beardColor]="beardColor"
    [beard]="beard" [ear]="ear" [earring]="earring" 
    [eye]="eye" [eyeBrows]="eyeBrow" [shirt]="shirt"
    [glasses]="glasses" [nose]="nose" [hair]="hair" [hairColor]="hairColor" [mouth]="mouth"
    >
    </ngx-nice-avatar>
    </div>

    <div class="options">

      <div>
        <input type="range" min="60" max="250" [(ngModel)]="size"/>
      </div>
      <div class="buttons">
        <button type="button" (click)="random()">Random</button>
        <button type="button" (click)="getPng()">Save as PNG</button>
        <a target="_blank" href="https://github.com/bariscanyilmaz/ngx-nice-avatar"
          >Github</a
        >
      </div>

      <div>
        <h4>Background Color</h4>
        <div>
          <label>
            <input type="color" name="bgColor" [(ngModel)]="bgColor"  />
          </label>
        </div>
      </div>

      <div>
        <h4>Face</h4>
        <div>
          <label *ngFor="let value of FaceColors" >
            <input
              
              type="radio"
              name="face"
              [value]="value"
              [(ngModel)]="faceColor"
            />
            {{ value }}
          </label>
          <label>
            <input type="color" name="face" [(ngModel)]="faceColor" />
          </label>
        </div>
      </div>

      <div>
        <h4>Beard</h4>
        <div>
          <label *ngFor="let value of beardValues" >
            <input type="radio" name="beard" [value]="value" [(ngModel)]="beard" />
            {{ value }}
          </label>
          <label>
            <input type="color" name="beardColor" [(ngModel)]="beardColor" />
          </label>
        </div>
      </div>

      <div>
        <h4>Eyes</h4>
        <div>
          <label *ngFor="let value of eyesValues" >
            <input type="radio"  name="eyes" [value]="value" [(ngModel)]="eye" />
            {{ value }}
          </label>
        </div>
      </div>

      <div>
        <h4>Eyebrows and Eyelashes</h4>
        <div>
          <label *ngFor="let value of eyeBrowsValues" >
            <input
              type="radio"
              name="eyeBrows"
              [value]="value"
              [(ngModel)]="eyeBrow"
            />
            {{ value }}
          </label>
        </div>
      </div>

      <div>
        <h4>Ear</h4>
        <div>
          <label *ngFor="let value of earValues" >
            <input type="radio" name="ear" [value]="value" [(ngModel)]="ear" />
            {{ value }}
          </label>
        </div>
      </div>

      <div>
        <h4>Earring</h4>
        <div>
          <label *ngFor="let value of earringValues" >
            <input
              type="radio"
              name="earring"
              [value]="value"
              [ngModel]="earring"
            />
            {{ value }}
          </label>
        </div>
      </div>

      <div>
        <h4>Mouth</h4>
        <div>
          <label *ngFor="let value of mouthValues">
            <input type="radio" name="mouth"  [value]="value" [(ngModel)]="mouth" />
            {{ value }}
          </label>
        </div>
      </div>

      <div>
        <h4>Hair</h4>
        <div>
          <label *ngFor="let value of hairValues" >
            <input type="radio" name="hair" [value]="value" [(ngModel)]="hair" />
            {{ value }}
          </label>
          <label>
            <input type="color" name="hairColor"  [(ngModel)]="hairColor" />
          </label>
        </div>
      </div>

      <div>
        <h4>Nose</h4>
        <div>
          <label *ngFor="let value of noseValues" >
            <input type="radio" name="nose"  [value]="value" [(ngModel)]="nose" />
            {{ value }}
          </label>
        </div>
      </div>

      <div>
        <h4>Glasses</h4>
        <div>
          <label *ngFor="let value of glassesValues" >
            <input
              type="radio"
              name="glasses"
              [value]="value"
              [(ngModel)]="glasses"
            />
            {{ value }}
          </label>
        </div>
      </div>

      <div>
        <h4>Shirt</h4>
        <div>
          <label *ngFor="let value of shirtValues" >
            <input type="radio" name="shirt" [value]="value" [(ngModel)]="shirt" />
            {{ value }}
          </label>  
          <label>
            <input type="color" name="shirtColor"  [(ngModel)]="shirtColor" />
          </label>
        </div>
      </div>
    </div>
    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {

  title = 'ng-nice-avatar';

  size: number = 250;
  bgColor!: string;
  shirtColor!: string;
  faceColor!: string;
  FaceColors: string[] = ["#F9C9B6", "#AC6651"];
  beardValues: Beard[] = ['Hipster', 'Scruff', 'None'];
  beard!: Beard;
  beardColor!: string;
  eyesValues: Eyes[] = ['Circle', 'Oval', 'Shadow', 'Smile'];
  eye!: Eyes;
  eyeBrow!: Eyebrows;
  eyeBrowsValues: Eyebrows[] = ['Eyebrows_Down', 'Eyebrows_Up', 'Eyelashes_Down', 'Eyelashes_Up', 'None'];
  earValues: Ear[] = ['Big', 'Small'];
  ear!: Ear;
  earringValues: Earring[] = ['Hoop', 'Stud', 'None'];
  earring!: Earring;
  mouth!: Mouth;
  mouthValues: Mouth[] = ['Frown', 'Laughing', 'Nervous', 'Pucker', 'Sad', 'Smile', 'Smirk', 'Suprised'];
  hair!: Hair;
  hairValues: Hair[] = ['Danny_Phantom', 'Doug_Funny', 'Fonza', 'Full', 'Mr_Clean', 'Mr_T', 'None', 'Pixie', 'Turban'];
  hairColor!: string;
  nose!: Nose;
  noseValues: Nose[] = ['Curve', 'Pointed', 'Round'];
  glasses!: Glasses;
  glassesValues: Glasses[] = ['None', 'Round', 'Square'];
  shirt!: Shirt;
  shirtValues: Shirt[] = ['Collared', 'Crew', 'Open'];

  BEARD_COLORS = ["#BB9E95", "#65473E"];
  HAIR_COLORS = [
    "#77311D",
    "#FC909F",
    "#D2EFF3",
    "#506AF4",
    "#F48150",
  ];
  BG_COLORS = [
    "#9287FF",
    "#6BD9E9",
    "#FC909F",
    "#F4D150",
    "#E0DDFF",
    "#D2EFF3",
    "#FFEDEF",
    "#FFEBA4",
    "#506AF4",
    "#F48150",
    "#74D153",
  ];
  SHIRT_COLORS = [
    "#9287FF",
    "#6BD9E9",
    "#FC909F",
    "#F4D150",
    "#77311D",
  ];
  FACE_COLORS = ["#F9C9B6", "#AC6651"];

  random() {

    this.bgColor = this.getRandom(this.BG_COLORS);
    this.faceColor = this.getRandom(this.FACE_COLORS);
    this.beard = this.getRandom((this.beardValues));
    this.beardColor = this.getRandom(this.BEARD_COLORS);
    this.eye = this.getRandom((this.eyesValues));
    this.eyeBrow = this.getRandom((this.eyeBrowsValues));
    this.ear = this.getRandom((this.earValues));
    this.earring = this.getRandom((this.earringValues));
    this.mouth = this.getRandom((this.mouthValues));
    this.hair = this.getRandom((this.hairValues));
    this.hairColor = this.getRandom(this.HAIR_COLORS);
    this.nose = this.getRandom(this.noseValues);
    this.glasses = this.getRandom((this.glassesValues));
    this.shirt = this.getRandom((this.shirtValues));
    this.shirtColor = this.getRandom(this.SHIRT_COLORS);
  }

  getRandom(list: any[]) {
    return list[(Math.floor(Math.random() * list.length))];
  }

  getPng() {

  }


  ngOnInit(): void {
    this.random();
  }


}
