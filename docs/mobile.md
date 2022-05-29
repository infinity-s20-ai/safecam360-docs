# Safecam360 React Native SDK
360° viewer for interior and exterior views of a product with hotspots. 

## Installation
1.  <h6 style="margin-bottom:1em;">NPM Installation</h6>


```bash
npm install safecam-360-rn
```

## Dependencies

Extra dependencies need to be installed via ```npm install @dr.pogodin/react-native-static-server @react-native-masked-view/masked-view react-native-fast-image react-native-linear-gradient react-native-svg react-native-webview react-native-fs react-native-snap-carousel react-native-orientation-locker```

iOS dependencies need to be installed via ```pod install```


## Quick Start

1. Run [sample](https://github.com/s20ai/safecam-360-rn-example) react native application OR

2. Custom usage
```js
  <Safecam360
      interior360={[]}
      exterior360={[]}
  />
```

## Example

```js
import {Safecam360} from "safecam-360-rn"

<Safecam360
interior360={{
    spinTitle: "Interior 360"
    interior360Type: "equirectangular",
    imageSource: [ "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/demo/interior360_demo.jpeg" ],
    hotspotImages: [
      {
        hotspotRefId: "internal-hotpsot-steering"
        imageSrc: "https://"
      },
      {
        hotspotRefId: "internal-hotpsot-infotainment-system"
        imageSrc: "https://"
      }
    ]
    hotspots: [
      {
        pitch: 4.140852751630522,
        yaw: 23.544021973218946,
        hotspotRefId: "internal-hotpsot-steering",
        triggerFrame: {
          pitch: -6.5250622571992025,
          yaw: -24.67466498175444
        }.
        description: "Sample description"
      },
      {
        pitch: -6.032111892702112,
        yaw: -1.552639896791029,
        hotspotRefId: "internal-hotpsot-infotainment-system"
        triggerFrame: {
          pitch: -6.5250622571992025,
          yaw: -24.67466498175444
        },
        description: "Sample description",
        imageSrc: "https://"
      }
    ]
}}
exterior360 = {{
    spinTitle: "Close door spin"
    imageSource: [ "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/demo/spin/hd/img_01.jpg", ... ],
    highResImages: [ "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/demo/spin/high_res/img_01.jpg", ... ],
    frames: 54,
    index: 1,
    hotspotImages:[
      {
        hotspotRefId: "headlight-hotspot"
        imageSrc: "https://"
      },
      {
        hotspotRefId: "orvm-left-hotspot"
        imageSrc: "https://"
      }
    ]
    hotspots:[
      {
        frameId: 1,
        x: 23.4,
        y: 44.5,
        triggerFrame: 6,
        description: "Sample description",
        hotspotRefId: "headlight-hotspot"
      },
      {
        frameId: 1,
        x: 23.4,
        y: 44.5,
        triggerFrame: 7,
        description: "Sample description",
        hotspotRefId: "orvm-left-hotspot",
        imageSrc: "https://"
      },
      ...
    ]
  }}
/>
```

## Known Limitations

1. To add custom fonts on Android, the font files (.TTF) need to be copied to ```android/app/src/main/assets/fonts```. (custom fonts are currently not supported on iOS )
2. To support the Interior 360 view in your own iOS application, the following steps will be required: 
    - The Interior 360 build file (index.html) will need to be added to ```assets/www/``` in the root of your project. (you can [contact us](mailto:infinity@s20.ai) if you want your own build file)
    - Open your project in Xcode by opening up ```ios/<ProjectName>.xcodeproj```
    - Right-click the top-level directory of your project and select ```‘Add Files to “<ProjectName>”’```
    - In the base of your project directory, select the ```assets/www/``` directory

