# Safecam360 React JS SDK

360° viewer for interior and exterior views of a product with hotspots. 

## Installation
Add the following inside your index.html file inside the root directory of your React app

```html
<script src=<JS_BUNDLEFILE_PATH> />
```

Production SDK url - [https://staging.s20.ai/safecam360/safecam360-viewer-web_sdk-0.1.0/Safecam360Viewer.js](https://staging.s20.ai/safecam360/safecam360-viewer-web_sdk-0.1.0/Safecam360Viewer.js) (this can be set as the ```src``` attribute above)

## Quick Start

```html
<safecam-360-viewer 
    interior360={[]}
    exterior360={[]}
    galleryData={[]}   
></safecam-360-viewer>
```


## Extra Props

| Property    | Type  | Default   |   Required   |    Description                                                |
|-------------|-------|-----------|---------|------------------------------------------------------------|
| galleryData | array | undefined | No | An array of objects defining data for the gallery. See object definition [here](#galleryData) |
| hotspotIcon | string | undefined | No | A URL string specifying an icon for hotspots. Major image formats and SVGs are supported. |


### galleryData 

|   Property   |   Type   |   Default   | Required   | Description                        |
|-----------------|--------|-----------|------|------------------------------------|
| title | string | undefined   | Yes | Title/caption for the image               |
| imageSource     | string  | undefined | Yes | URL string for the image




## Example

```javascript
<safecam-360-viewer 
    interior360={JSON.stringify([{
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


}])}
exterior360 = {JSON.stringify([{
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
    galleryData: [
       {
          title: "Front View",
          imageSource: "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/TEST1935/slot/car0368_0.jpeg",
       },
       {
          title: "45˚ Left Front View",
          imageSource: "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/TEST1935/slot/car0368_13.jpeg",
       }
    ]

  }])}
/>
```