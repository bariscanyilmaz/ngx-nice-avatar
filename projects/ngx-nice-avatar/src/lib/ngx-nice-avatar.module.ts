import { NgModule } from '@angular/core';
import { NgxNiceAvatarComponent } from './ngx-nice-avatar.component';
import { FaceComponent } from './components/face/face.component';
import { MouthComponent } from './components/mouth/mouth.component';
import { EyebrowsComponent } from './components/eyebrows/eyebrows.component';
import { HairComponent } from './components/hair/hair.component';
import { EyesComponent } from './components/eyes/eyes.component';
import { GlassesComponent } from './components/glasses/glasses.component';
import { NoseComponent } from './components/nose/nose.component';
import { EarComponent } from './components/ear/ear.component';
import { EarringComponent } from './components/earring/earring.component';
import { ShirtComponent } from './components/shirt/shirt.component';
import { BeardComponent } from './components/beard/beard.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
     NgxNiceAvatarComponent,
     FaceComponent,
     MouthComponent,
     EyebrowsComponent,
     HairComponent,
     EyesComponent,
     GlassesComponent,
     NoseComponent,
     EarComponent,
     EarringComponent,
     ShirtComponent,
     BeardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    
    NgxNiceAvatarComponent
  ]
})
export class NgxNiceAvatarModule { }
