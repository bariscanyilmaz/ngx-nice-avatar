# NgxNiceAvatar

Online Avatar Creater 

## Assets

* Designer / Figma files: [Avatar Illustration System](https://www.figma.com/community/file/829741575478342595)

## Installation

```sh
    npm install ngx-nice-avatar
```
## Usage

1. Import ngx-nice-avatar component

    ```ts
        import { Beard, Ear, Earring, Eyebrows, Eyes, Glasses, Hair, Mouth, NgxNiceAvatarComponent, Nose, Shirt } from 'ngx-nice-avatar';
    ```
2. Render ngx-nice-avatar
    ```html
        <ngx-nice-avatar #avatar
            [size]="size" [bgColor]="bgColor" [shirtColor]="shirtColor" 
            [faceColor]="faceColor" [hairColor]="hairColor" [beardColor]="beardColor" [beardType]="beard" [ear]="ear" [earring]="earring" 
            [eye]="eye" [eyeBrows]="eyeBrow" [shirt]="shirt" [glasses]="glasses" [nose]="nose" [hair]="hair" [hairColor]="hairColor" [mouth]="mouth"
            >
        </ngx-nice-avatar>
    ```
3. Define Properties
    ```ts
    size: number = 250;
    bgColor: string;
    shirtColor: string;
    faceColor: string;
    FaceColors: string[] = ["#F9C9B6", "#AC6651"];
    beardValues: Beard[] = ['Hipster', 'Scruff', 'None'];
    beard: Beard;
    beardColor: string;
    eyesValues: Eyes[] = ['Circle', 'Oval', 'Shadow', 'Smile'];
    eye: Eyes;
    eyeBrow: Eyebrows;
    eyeBrowsValues: Eyebrows[] = ['Eyebrows_Down', 'Eyebrows_Up', 'Eyelashes_Down', 'Eyelashes_Up', 'None'];
    earValues: Ear[] = ['Big', 'Small'];
    ear: Ear;
    earringValues: Earring[] = ['Hoop', 'Stud', 'None'];
    earring: Earring;
    mouth: Mouth;
    mouthValues: Mouth[] = ['Frown', 'Laughing', 'Nervous', 'Pucker', 'Sad', 'Smile', 'Smirk', 'Suprised'];
    hair: Hair;
    hairValues: Hair[] = ['Danny_Phantom', 'Doug_Funny', 'Fonza', 'Full', 'Mr_Clean', 'Mr_T', 'None', 'Pixie',    'Turban'];
    hairColor: string;
    nose: Nose;
    noseValues: Nose[] = ['Curve', 'Pointed', 'Round'];
    glasses: Glasses;
    glassesValues: Glasses[] = ['None', 'Round', 'Square'];
    shirt: Shirt;
    shirtValues: Shirt[] = ['Collared', 'Crew', 'Open'];
    ```

## Options

Properties available options

| key          | type             | default | accept                                                                      |
| ------------ | ---------------- | ------- | --------------------------------------------------------------------------- |
| `size`       | number           | 250     |                                                                             |
| `bgColor`    | string           | random  |                                                                             |
| `faceColor`  | string           | random  |                                                                             |
| `eye`        | Eye              | random  | Circle, Oval, Smile, Shadow                                                 |
| `eyeBrow`    | Eyebrow          | random  | None, Eyebrows_Up, Eyebrows_Down, Eyelashes_Down, Eyelashes_Up              |
| `ear`        | Ear              | random  | Small, Big                                                                  |
| `earring`    | Earring          | random  | None, Stud, Hoop                                                            |
| `mouth`      | Mouth            | random  | Frown, Laughing, Nervous, Pucker, Sad, Smile, Smirk, Suprised               |
| `hair`       | Hair             | random  | None, Danny_Phantom, Doug_Funny, Fonza, Full, Mr_Clean, Mr_T, Pixie, Turban |
| `hairColor`  | string           | random  |                                                                             |
| `nose`       | Nose             | random  | Curve, Pointed, Round                                                       |
| `glasses`    | Glasses          | random  | None, Round, Square                                                         |
| `beardType`  | Beard            | random  | None, Hipster, Scruff                                                       |
| `beardColor` | string           | random  |                                                                             |
| `shirt`      | Shirt            | random  | Collared, Crew, Open                                                        |
| `shirtColor` | string           | random  |                                                                             |

## Development

1. Clone the repo
   ```sh
   git clone git@github.com:bariscanyilmaz/ngx-nice-avatar.git
   ```
2. Change directory to package folder and build package
   ```sh
   cd ngx-nice-avatar\projects\ngx-nice-avatar\

   ng build ngx-nice-avatar
   ```
3. Link package 
   
   ```sh
   cd ngx-nice-avatar\dist\ngx-nice-avatar

   npm link 

   cd ngx-nice-avatar\src\app
   
   npm link ngx-nice-avatar
   ```
4. Install dependencies
   ```sh
   npm install 
   ```
4. Start the server for the demo
   ```sh
   ng serve 
   ```
5. Open the browser to reivew the demo
   ```sh
   open http://localhost:4200
   ```
6. Edit the files inside `projects\ngx-nice-avatar\src\lib\NiceAvatar`. 

## License

Released under [MIT](/LICENSE) by [@bariscanyilmaz](https://github.com/bariscanyilmaz).
