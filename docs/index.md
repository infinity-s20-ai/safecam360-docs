# Introduction

## About
The following docs include web and mobile SDKs for a 360° viewer for interior and exterior views of a product with hotspots. 


## Data source integration

To automatically fetch data in the prop format shown below, you can make the following requests:

  1. To authenticate yourself, make a POST request to ```https://safecam360.s20.ai/api/auth``` with an ```email``` and ```password``` as the body. (you can [contact us](mailto:infinity@s20.ai) if you want your own set of credentials)
  You will receive a token as the response. 
  2. To fetch data, make a GET request to ```https://safecam360.s20.ai/api/capture/get-prop-data/<productId>``` Here, the productId is a unique ID given to a specific product. Set the token received in the step above in the request headers as ```x-auth-token``` You will receive the data in the required format and you can plug this into your code as shown in the examples. 

## Common Props

The following props are common across web and mobile: 

### interior360

|   Property   |   Type   |   Default   | Required   | Description                        |
|-----------------|--------|-----------|------|------------------------------------|
| id       | string | undefined | Yes | A unique identifier denoting the current hotspot 
| spinTitle       | string | undefined | Yes | Title of the current mode                      |
| interior360Type | string | equirectangular   | Yes | Type of interior 360 image  (equirectangular or cubemap)              |
| imageSource     | array  | [] | Yes | Image URLs                         |
| hotspots        | array  | []        | No | Array of objects representing hotspot data. The structure of this field can be seen [here](#interior-hotspot) |


### exterior360

|   Property   |   Type   |   Default   | Required   | Description                        |
|-----------------|--------|-----------|------|------------------------------------|
| id       | string | undefined | Yes | A unique identifier denoting the current hotspot 
| spinTitle   | string | undefined | Yes |Title of the current mode                                  |
| imageSource | array | undefined    | Yes | An array of image sources  
| highResImages | array | undefined    | No | An array of high resolution image sources (for zoom)
| hotspotImages | array | undefined    | Yes | Description of each hotspot image. See object definition [here](#hotspot-image)                       |
| frames      | number | undefined    | Yes | Total number of images needed for external 360 |
| index       | number | 1            | Yes|Index of first image needed for external 360   |
| hotspots    | array  | []           | Yes| Array of objects representing hotspot data. The structure of this field can be seen [here](#exterior-hotspot)

### Interior Hotspot

|   Property   |   Type   |   Default   | Required   | Description                        |
|-----------------|--------|-----------|------|------------------------------------|
| pitch      | number | undefined    | Yes | The pitch value of where the hotspot should be present in the 360 view |
| yaw      | number | undefined    | Yes | The yaw value of where the hotspot should be present in the 360 view |
| type   | string | undefined | Yes |Type of hotspot (damage or feature)  
| index       | number | 1            | Yes|Index of first image needed for external 360   |
| hotspotRefId    | string  | undefined           | Yes| Reference ID or tag for the hotspot
| description    | string  | undefined           | Yes| Description of the hotspot
| triggerFrame    | object  | undefined           | Yes| The final point that needs to be triggered once the hotspot is selected

### Exterior Hotspot

|   Property   |   Type   |   Default   | Required   | Description                        |
|-----------------|--------|-----------|------|------------------------------------|
| id    | string  | undefined           | Yes| A unique identifier for the hotspot
| type   | string | undefined | Yes |Type of hotspot (damage or feature)  
| display   | array[int, boolean] | undefined | No |Contains information about hotspot scaling and the hotspot focus frame. e.g [0.79, false]	- Here, the first entry is the scale of the hotspot in a given frame and the second entry indicates if the hotspot should be in focus or not
| frameId       | number | undefined            | Yes|The frame number in which the hotspot is to be displayed   |
| x      | string | undefined    | Yes |x-coordinate of the hotspot in the frame |
| y      | string | undefined    | Yes | y-coordinate of the hotspot in the frame |
| hotspotRefId    | string  | undefined           | Yes| Reference ID or tag for the hotspot
| description    | string  | undefined           | Yes| Description of the hotspot
| triggerFrame    | object  | undefined           | Yes| The final point that needs to be triggered once the hotspot is selected


### Hotspot Image

|   Property   |   Type   |   Default   | Required   | Description                        |
|-----------------|--------|-----------|------|------------------------------------|
| hotspotRefId    | string  | undefined           | Yes| Reference ID or tag for the hotspot image              |
| imageSrc    | string  | undefined | Yes | URL string for the image


### Detailed Usage

1. Check out our [React JS SDK](viewer#safecam360-react-js-sdk)
2. Check out our [React Native SDK](mobile#safecam360-react-native-sdk)
