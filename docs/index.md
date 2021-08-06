# Safecam360 Viewer

360° viewer for interior and exterior views of a product with hotspots. 

## Installation
Direct import. Add the following inside your index.html file inside the root directory of your React app

```html
<script src=<JS_BUNDLEFILE_PATH> />
```

Production SDK url - [https://safecam.s20.ai/safecam360/safecam360-viewer-web_sdk-0.1.0](https://safecam.s20.ai/safecam360/safecam360-viewer-web_sdk-0.1.0) (this can be set as the ```src``` attribute above)

## Quick Start

```html
<safecam-360-viewer 
    interior360={JSON.stringify([{
        interior360Type:"cubemap",
        imageSource: [
          "https://cars24-images.s3.ap-south-1.amazonaws.com/safecam360/mt27xq/hd/interior_360/pz.jpg",
          "https://cars24-images.s3.ap-south-1.amazonaws.com/safecam360/mt27xq/hd/interior_360/px.jpg",
          "https://cars24-images.s3.ap-south-1.amazonaws.com/safecam360/mt27xq/hd/interior_360/nz.jpg",
          "https://cars24-images.s3.ap-south-1.amazonaws.com/safecam360/mt27xq/hd/interior_360/nx.jpg",
          "https://cars24-images.s3.ap-south-1.amazonaws.com/safecam360/mt27xq/hd/interior_360/py.jpg",
          "https://cars24-images.s3.ap-south-1.amazonaws.com/safecam360/mt27xq/hd/interior_360/ny.jpg",
        ],
        hotspots:[]
                    
  
    }])}
    exterior360={JSON.stringify([{

        imageSource:
          "https://cars24-images.s3.ap-south-1.amazonaws.com/safecam360/mt27xq/hd/exterior/{frame}.jpg",
        frames: 54,
        index: 1,
        hotspots:[]
                   
      }])}
    enableHotspots = {true}


></safecam-360-viewer>
```

## Props

| Property    | Type  | Default   |   Required   |    Description                                                |
|-------------|-------|-----------|---------|------------------------------------------------------------|
| interior360 | array | [] | Yes | An array of objects defining data for the interior360 type. See object definition [here](#interior360). | 
| exterior360 | array | [] | Yes | An array of objects defining data for the exterior360 type. See object definition [here](#exterior360) |
| hotspotDetails | object | {} | No | An object defining the hotspot data |
| toggleFullscreen | boolean | false | No | A boolean to toggle fullscreen mode |
| enableHotspots | boolean | false | No |A boolean to toggle hotspots |


### interior360

|   Property   |   Type   |   Default   | Required   | Description                        |
|-----------------|--------|-----------|------|------------------------------------|
| spinTitle       | string | undefined | No | Title of spin                      |
| interior360Type | string | cubemap   | Yes | Type of interior 360               |
| imageSource     | array  | [] | Yes | Image URLs                         |
| hotspots        | array  | []        | No | Hotspot data for internal hotspots |


### exterior360

|   Property   |   Type   |   Default   | Required   | Description                        |
|-----------------|--------|-----------|------|------------------------------------|
| spinTitle   | string | undefined | No |Title of spin                                  |
| imageSource | string | undefined    | Yes | Image url of first image                       |
| frames      | number | undefined    | Yes | Total number of images needed for external 360 |
| index       | number | 1            | Yes|Index of first image needed for external 360   |
| hotspots    | array  | []           | Yes| Hotspot data for external hotspots             |


