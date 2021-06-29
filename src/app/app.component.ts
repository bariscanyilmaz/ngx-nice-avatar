import { Component, Input, OnInit } from '@angular/core';
import { Beard } from 'projects/ngx-nice-avatar/src/lib/components/beard/beard.component';
import { Hair } from 'projects/ngx-nice-avatar/src/lib/components/hair/hair.component';
import { Nose } from 'projects/ngx-nice-avatar/src/lib/components/nose/nose.component';
import { Ear } from 'projects/ngx-nice-avatar/src/lib/components/ear/ear.component';
import { Earring } from 'projects/ngx-nice-avatar/src/lib/components/earring/earring.component';
import { Eyebrows } from 'projects/ngx-nice-avatar/src/lib/components/eyebrows/eyebrows.component';
import { Eyes } from 'projects/ngx-nice-avatar/src/lib/components/eyes/eyes.component';
import { Mouth } from 'projects/ngx-nice-avatar/src/lib/components/mouth/mouth.component';
import { Glasses } from 'projects/ngx-nice-avatar/src/lib/components/glasses/glasses.component';
import { Shirt } from 'projects/ngx-nice-avatar/src/lib/components/shirt/shirt.component';

@Component({
  selector: 'app-root',
  template: `
    
    <!-- Component-->
    <ngx-nice-avatar 
    [size]="size" [bgColor]="bgColor" [shirtColor]="shirtColor" 
    [faceColor]="faceColor" [hairColor]="hairColor" [beardColor]="beardColor"
    [beard]="beard" [ear]="ear" [earring]="earring" 
    [eye]="eye" [eyeBrows]="eyeBrow" [shirt]="shirt"
    [glasses]="glasses" [nose]="nose" [hair]="hair" [hairColor]="hairColor" [mouth]="mouth"
    >
    </ngx-nice-avatar>
    

    <!-- Inputs-->
    <div class="options">
      <div>
        <input type="range" min="60" max="250" #avatarSize [(ngModel)]="size"/>
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
            <input type="color" name="bgColor" #avatarBGColor [(ngModel)]="bgColor"  />
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
              #avatarFaceColor
              [value]="value"
              [(ngModel)]="faceColor"
            />
            {{ value }}
          </label>
          <label>
            <input type="color" name="face" #avatarFaceColor [(ngModel)]="faceColor" />
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
            <input type="color" name="beardColor" #avatarBeardColor [(ngModel)]="beardColor" />
          </label>
        </div>
      </div>

      <div>
        <h4>Eyes</h4>
        <div>
          <label *ngFor="let value of eyesValues" >
            <input type="radio" #avatarEyes name="eyes" [value]="value" [(ngModel)]="eye" />
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
              #avatarEyesBrow
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
            <input type="color" name="hairColor" #avatarHairColor [(ngModel)]="hairColor" />
          </label>
        </div>
      </div>

      <div>
        <h4>Nose</h4>
        <div>
          <label *ngFor="let value of noseValues" >
            <input type="radio" name="nose" #avatarNose [value]="value" ngModel="nose" />
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
            <input type="color" name="shirtColor" #avatarShirtColor [(ngModel)]="shirtColor" />
          </label>
        </div>
      </div>
    </div>
  `,
  styles: [`* {
    margin: 0;
    padding: 0;
  }
  html {
    font-family: sans-serif;
  }
  body {
    padding: 30px;
  }
  .screen {
    display: grid;
    grid-gap: 20px;
  }
  @media (min-width: 700px) {
    .screen {
      grid-template-columns: 260px 1fr;
    }
  }
  .avatar {
    position: sticky;
    top: 30px;
    display: flex;
    justify-content: center;
  }
  .options {
    display: grid;
    grid-gap: 20px;
    justify-items: flex-start;
  }
  .options > div {
    display: grid;
    grid-gap: 10px;
  }
  label {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  button {
    padding: 4px 6px;
  }
  .buttons {
    display: grid;
    grid-gap: 10px;
    grid-auto-flow: column;
    align-items: center;
  }`]
})
export class AppComponent implements OnInit {

  title = 'ng-nice-avatar';

  size!: number;
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
    this.size = (60 + Math.random() * 190);
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
