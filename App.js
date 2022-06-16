import React from 'react';
import {Safecam360} from "@s20.ai/safecam-360-rn"

const App = () => {
    return (
        <Safecam360
        interiorData={{
            "id": "interior-360",
            "spinTitle": "Interior 360",
            "iconSource": "https://safecam-org-logos.s3.ap-south-1.amazonaws.com/car_interior.png",
            "interior360Type": "equirectangular",
            "imageSource": [
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spherical/interior-360/rn_image_picker_lib_temp_f8d73f67-b598-441a-91cf-1033188cb0a8.jpg"
            ],
            "hotspotImages": [{
                "hotspotRefId": "infotainment_system-infotainment_system-infotainment_system-music_system_not_working_or_missing",
                "imageSrc": "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/dynamic/imperfections/57a317a9-4fad-424d-bd97-6ab6ace968e9.jpg"
            },
            {
                "hotspotRefId": "steering_handle-steering_handle-steering_handle-turn_indicator_not_working_or_broken",
                "imageSrc": "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/dynamic/imperfections/7c6e562c-8bf1-43ec-8331-a36d4f30c455.jpg"
            }],
            "hotspots": [{
                "id": "l3jy55eckamii5pwr8b",
                "pitch": -8.778140827141433,
                "yaw": 2.2777124251651073,
                "hotspotRefId": "infotainment_system-infotainment_system-infotainment_system-music_system_not_working_or_missing",
                "triggerFrame": {
                    "pitch": -8.778140827141433,
                    "yaw": 2.2777124251651073
                },
                "imageTitle": "Infotainment System Infotainment System",
                "description": "Music system not working/missing",
                "type": "damage",
                "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
            },
            {
                "id": "l3jy55ecwtwj4m32hzh",
                "pitch": -14.567286391726308,
                "yaw": -27.311509453865014,
                "hotspotRefId": "steering_handle-steering_handle-steering_handle-turn_indicator_not_working_or_broken",
                "triggerFrame": {
                    "pitch": -14.567286391726308,
                    "yaw": -27.311509453865014
                },
                "imageTitle": "Steering Handle Steering Handle",
                "description": "Turn Indicator not working/broken",
                "type": "damage",
                "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
            }],
            "hotspotPostionData": [{
                "id": "l3jy55eckamii5pwr8b",
                "pitch": -8.778140827141433,
                "yaw": 2.2777124251651073,
                "hotspotRefId": "infotainment_system-infotainment_system-infotainment_system-music_system_not_working_or_missing",
                "triggerFrame": {
                    "pitch": -8.778140827141433,
                    "yaw": 2.2777124251651073
                },
                "imageTitle": "Infotainment System Infotainment System",
                "description": "Music system not working/missing",
                "type": "damage",
                "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
            },
            {
                "id": "l3jy55ecwtwj4m32hzh",
                "pitch": -14.567286391726308,
                "yaw": -27.311509453865014,
                "hotspotRefId": "steering_handle-steering_handle-steering_handle-turn_indicator_not_working_or_broken",
                "triggerFrame": {
                    "pitch": -14.567286391726308,
                    "yaw": -27.311509453865014
                },
                "imageTitle": "Steering Handle Steering Handle",
                "description": "Turn Indicator not working/broken",
                "type": "damage",
                "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
            }]
        }}

        exteriorData = {
            {"id": "closed-door-spin",
            "spinTitle": "Closed Door Spin",
            "iconSource": "https://safecam-org-logos.s3.ap-south-1.amazonaws.com/car_door_closed.png",
            "frames": 62,
            "index": 1,
            "imageSource": [
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_01.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_02.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_03.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_04.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_05.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_06.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_07.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_08.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_09.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_10.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_11.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_12.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_13.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_14.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_15.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_16.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_17.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_18.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_19.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_20.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_21.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_22.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_23.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_24.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_25.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_26.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_27.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_28.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_29.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_30.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_31.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_32.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_33.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_34.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_35.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_36.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_37.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_38.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_39.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_40.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_41.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_42.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_43.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_44.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_45.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_46.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_47.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_48.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_49.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_50.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_51.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_52.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_53.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_54.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_55.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_56.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_57.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_58.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_59.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_60.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_61.jpeg",
                "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/spin/closed-door-spin/output_62.jpeg"
            ],
            "hotspots": [
                {
                    "id": "l3jy55ebwu0nyelx0xa",
                    "frameId": 0,
                    "x": 0.5385416448116302,
                    "y": 0.30462962124082776,
                    "location": [
                        1033.99995803833,
                        328.999990940094
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.8099999999999998,
                        0.5385416448116302,
                        true
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebs6yr014tz7",
                    "frameId": 1,
                    "x": 0.5385513397649432,
                    "y": 0.3045846756362676,
                    "location": [
                        1034.018572348691,
                        328.95144968716903
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.7199999999999999,
                        0.5385513397649432,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55eb8gzh08ypgzi",
                    "frameId": 2,
                    "x": 0.5264450463026039,
                    "y": 0.3047601257517606,
                    "location": [
                        1010.7744889009996,
                        329.14093581190144
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.6299999999999999,
                        0.5264450463026039,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebv8lpmg0u79",
                    "frameId": 3,
                    "x": 0.50741576039758,
                    "y": 0.30707515756065923,
                    "location": [
                        974.2382599633536,
                        331.641170165512
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.5399999999999999,
                        0.50741576039758,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55eb15quf00btv1",
                    "frameId": 5,
                    "x": 0.48201850532497775,
                    "y": 0.30222571003885973,
                    "location": [
                        925.4755302239573,
                        326.4037668419685
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.36,
                        0.48201850532497775,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebl76a5wk3o4",
                    "frameId": 6,
                    "x": 0.4725847838301703,
                    "y": 0.30289849166989086,
                    "location": [
                        907.362784953927,
                        327.13037100348214
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.27,
                        0.4725847838301703,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
            
                {
                    "id": "l3jy55ebm539538hcna",
                    "frameId": 7,
                    "x": 0.46583140346470486,
                    "y": 0.30175013347379537,
                    "location": [
                        894.3962946522333,
                        325.890144151699
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.18000000000000002,
                        0.46583140346470486,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebaj5i0d1akr",
                    "frameId": 8,
                    "x": 0.45759051654258426,
                    "y": 0.30124864326642853,
                    "location": [
                        878.5737917617618,
                        325.3485347277428
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.09000000000000002,
                        0.45759051654258426,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
            
                {
                    "id": "l3jy55ebz0xwycltga",
                    "frameId": 9,
                    "x": 0.4576453223717834,
                    "y": 0.3012548266731672,
                    "location": [
                        878.6790189538241,
                        325.3552128070206
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        2.7755575615628914e-17,
                        0.4576453223717834,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55eb56rfipozlj2",
                    "frameId": 10,
                    "x": 0.4523447318543575,
                    "y": 0.3003685126861404,
                    "location": [
                        868.5018851603663,
                        324.3979937010316
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0,
                        0.4523447318543575,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
            
                {
                    "id": "l3jy55ebyjep9ro6xcs",
                    "frameId": 11,
                    "x": 0.4418922318890431,
                    "y": 0.2998646891634212,
                    "location": [
                        848.4330852269627,
                        323.85386429649486
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0,
                        0.4418922318890431,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ecgoc5ue93zep",
                    "frameId": 52,
                    "x": 0.6209099675224067,
                    "y": 0.29994043412636656,
                    "location": [
                        1192.1471376430209,
                        323.9356688564759
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.09,
                        0.6209099675224067,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ec75e9flzvohx",
                    "frameId": 52,
                    "x": 0.3815666951252058,
                    "y": 0.33618449208387485,
                    "location": [
                        732.6080546403952,
                        363.0792514505848
                    ],
                    "hotspotRefId": "window_front_door_right-window_glass_or_quarter_glass-rhs_front-scratched-spots",
                    "triggerFrame": 44,
                    "type": "damage",
                    "display": [
                        0.5538461538461538,
                        0.3815666951252058,
                        false
                    ],
                    "imageTitle": "RHS Front Window Glass/Quarter Glass",
                    "description": "Scratched, Spots",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ecyjwx7cmhuo",
                    "frameId": 52,
                    "x": 0.6178048572162851,
                    "y": 0.7025838999703502,
                    "location": [
                        1186.1853258552674,
                        758.7906119679782
                    ],
                    "hotspotRefId": "wheel_front_right-tyre-rhs_front-tread_depth_greater_than_2mm_above_indicator",
                    "triggerFrame": 44,
                    "type": "damage",
                    "display": [
                        0.3,
                        0.6178048572162851,
                        false
                    ],
                    "imageTitle": "RHS Front Tyre",
                    "description": "Tread Depth > 2mm above indicator",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ec85m0s28cjir",
                    "frameId": 53,
                    "x": 0.6170677486331628,
                    "y": 0.30037140002963225,
                    "location": [
                        1184.7700773756726,
                        324.40111203200286
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.18,
                        0.6170677486331628,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
            
                {
                    "id": "l3jy55eci8yar95va5a",
                    "frameId": 54,
                    "x": 0.6092401746215652,
                    "y": 0.30118847485219685,
                    "location": [
                        1169.7411352734052,
                        325.2835528403726
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.27,
                        0.6092401746215652,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
            
                {
                    "id": "l3jy55eclckli0wo0xk",
                    "frameId": 55,
                    "x": 0.603561908590313,
                    "y": 0.3023401164952773,
                    "location": [
                        1158.838864493401,
                        326.5273258148995
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.36,
                        0.603561908590313,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },

            
                {
                    "id": "l3jy55ectjxz3ylgbke",
                    "frameId": 56,
                    "x": 0.5978019920390142,
                    "y": 0.30380936301242034,
                    "location": [
                        1147.7798247149071,
                        328.114112053414
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.44999999999999996,
                        0.5978019920390142,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },

            
                {
                    "id": "l3jy55ecxa38zmt6r28",
                    "frameId": 57,
                    "x": 0.5864808351462975,
                    "y": 0.30571762845767897,
                    "location": [
                        1126.0432034808912,
                        330.1750387342933
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.5399999999999999,
                        0.5864808351462975,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
            
                {
                    "id": "l3jy55ec1tl56xggwcp",
                    "frameId": 58,
                    "x": 0.5683867794352008,
                    "y": 0.30517223373131175,
                    "location": [
                        1091.3026165155854,
                        329.58601242981666
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.6299999999999999,
                        0.5683867794352008,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },


            
                {
                    "id": "l3jy55eccu7t8923eb",
                    "frameId": 60,
                    "x": 0.5533592866227436,
                    "y": 0.3058639898805421,
                    "location": [
                        1062.4498303156677,
                        330.3331090709855
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.8099999999999998,
                        0.5533592866227436,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },

            
                {
                    "id": "l3jy55ecsg1e8f8xpne",
                    "frameId": 61,
                    "x": 0.5341888385207267,
                    "y": 0.3043737795646206,
                    "location": [
                        1025.6425699597953,
                        328.72368192979025
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.8999999999999998,
                        0.5341888385207267,
                        true
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                }
            ],
            "highResImages": [],
            "hotspotImages": [
                {
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "imageSrc": "https://safecam360-mobile-images.s3.ap-south-1.amazonaws.com/C24DEMO2/dynamic/imperfections/77b2c6fb-ff03-4147-900f-89597ff32636.jpeg"
                }
            ],
            "hotspotPostionData": [
                {
                    "id": "l3jy55ebwu0nyelx0xa",
                    "frameId": 0,
                    "x": 0.5385416448116302,
                    "y": 0.30462962124082776,
                    "location": [
                        1033.99995803833,
                        328.999990940094
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.8099999999999998,
                        0.5385416448116302,
                        true
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebv5ltlcwq2ns",
                    "frameId": 0,
                    "x": 0.3218749990065893,
                    "y": 0.7046295850365251,
                    "location": [
                        617.9999980926514,
                        760.999951839447
                    ],
                    "hotspotRefId": "front_bumper-fog_light_cover-lhs_front-scratched",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.7499999999999999,
                        0.3218749990065893,
                        false
                    ],
                    "imageTitle": "LHS Front Fog Light Cover",
                    "description": "Scratched",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebs6yr014tz7",
                    "frameId": 1,
                    "x": 0.5385513397649432,
                    "y": 0.3045846756362676,
                    "location": [
                        1034.018572348691,
                        328.95144968716903
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.7199999999999999,
                        0.5385513397649432,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebyk4hjpj6mkc",
                    "frameId": 1,
                    "x": 0.3217410445366001,
                    "y": 0.7051906940910588,
                    "location": [
                        617.7428055102721,
                        761.6059496183435
                    ],
                    "hotspotRefId": "front_bumper-fog_light_cover-lhs_front-scratched",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.6749999999999999,
                        0.3217410445366001,
                        false
                    ],
                    "imageTitle": "LHS Front Fog Light Cover",
                    "description": "Scratched",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55eb8gzh08ypgzi",
                    "frameId": 2,
                    "x": 0.5264450463026039,
                    "y": 0.3047601257517606,
                    "location": [
                        1010.7744889009996,
                        329.14093581190144
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.6299999999999999,
                        0.5264450463026039,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55eb5vwu4si5v9g",
                    "frameId": 2,
                    "x": 0.2942382274243157,
                    "y": 0.7054866249384629,
                    "location": [
                        564.9373966546862,
                        761.92555493354
                    ],
                    "hotspotRefId": "front_bumper-fog_light_cover-lhs_front-scratched",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.6,
                        0.2942382274243157,
                        false
                    ],
                    "imageTitle": "LHS Front Fog Light Cover",
                    "description": "Scratched",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebv8lpmg0u79",
                    "frameId": 3,
                    "x": 0.50741576039758,
                    "y": 0.30707515756065923,
                    "location": [
                        974.2382599633536,
                        331.641170165512
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.5399999999999999,
                        0.50741576039758,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55eby7o1rn32mi",
                    "frameId": 3,
                    "x": 0.24929938209032207,
                    "y": 0.7027729972988253,
                    "location": [
                        478.65481361341836,
                        758.9948370827312
                    ],
                    "hotspotRefId": "front_bumper-fog_light_cover-lhs_front-scratched",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.525,
                        0.24929938209032207,
                        false
                    ],
                    "imageTitle": "LHS Front Fog Light Cover",
                    "description": "Scratched",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebhkhddq9ez6u",
                    "frameId": 3,
                    "x": 0.6198175960235898,
                    "y": 0.3320857378176723,
                    "location": [
                        1190.0497843652925,
                        358.6525968430861
                    ],
                    "hotspotRefId": "window_front_door_left-window_glass_or_quarter_glass-lhs_front-broken",
                    "triggerFrame": 14,
                    "type": "damage",
                    "display": [
                        0.0375,
                        0.6198175960235898,
                        false
                    ],
                    "imageTitle": "LHS Front Window Glass/Quarter Glass",
                    "description": "Broken",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebtcypgvt0cwj",
                    "frameId": 3,
                    "x": 0.62041540039066,
                    "y": 0.7619752836623086,
                    "location": [
                        1191.1975687500671,
                        822.9333063552933
                    ],
                    "hotspotRefId": "wheel_front_left-tyre-lhs_front-damaged",
                    "triggerFrame": 14,
                    "type": "damage",
                    "display": [
                        0.0375,
                        0.62041540039066,
                        false
                    ],
                    "imageTitle": "LHS Front Tyre",
                    "description": "Damaged",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebizt46cp66ad",
                    "frameId": 4,
                    "x": 0.49254053367660716,
                    "y": 0.3053668855469141,
                    "location": [
                        945.6778246590858,
                        329.7962363906672
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.44999999999999996,
                        0.49254053367660716,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebzl1sohx33g",
                    "frameId": 4,
                    "x": 0.21566236241930864,
                    "y": 0.7038988158849785,
                    "location": [
                        414.07173584507257,
                        760.2107211557768
                    ],
                    "hotspotRefId": "front_bumper-fog_light_cover-lhs_front-scratched",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.45,
                        0.21566236241930864,
                        false
                    ],
                    "imageTitle": "LHS Front Fog Light Cover",
                    "description": "Scratched",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55eb11gm98q82ku",
                    "frameId": 4,
                    "x": 0.6420119745164665,
                    "y": 0.522894972751748,
                    "location": [
                        1232.6629910716158,
                        564.7265705718878
                    ],
                    "hotspotRefId": "back_door_left-door-lhs_rear-faded-rusted",
                    "triggerFrame": 14,
                    "type": "damage",
                    "display": [
                        0.075,
                        0.6420119745164665,
                        false
                    ],
                    "imageTitle": "LHS Rear Door",
                    "description": "Faded, Rusted",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55eb7obpvff7q6k",
                    "frameId": 4,
                    "x": 0.6166629174452603,
                    "y": 0.33843672960240334,
                    "location": [
                        1183.9928014948996,
                        365.5116679705956
                    ],
                    "hotspotRefId": "window_front_door_left-window_glass_or_quarter_glass-lhs_front-broken",
                    "triggerFrame": 14,
                    "type": "damage",
                    "display": [
                        0.075,
                        0.6166629174452603,
                        false
                    ],
                    "imageTitle": "LHS Front Window Glass/Quarter Glass",
                    "description": "Broken",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebrkf2mzukzwh",
                    "frameId": 4,
                    "x": 0.5897800723342222,
                    "y": 0.7630015699688951,
                    "location": [
                        1132.3777388817068,
                        824.0416955664067
                    ],
                    "hotspotRefId": "wheel_front_left-tyre-lhs_front-damaged",
                    "triggerFrame": 14,
                    "type": "damage",
                    "display": [
                        0.075,
                        0.5897800723342222,
                        false
                    ],
                    "imageTitle": "LHS Front Tyre",
                    "description": "Damaged",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55eb15quf00btv1",
                    "frameId": 5,
                    "x": 0.48201850532497775,
                    "y": 0.30222571003885973,
                    "location": [
                        925.4755302239573,
                        326.4037668419685
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.36,
                        0.48201850532497775,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebn5bjdbjkp8h",
                    "frameId": 5,
                    "x": 0.1853557899086727,
                    "y": 0.6938749638163814,
                    "location": [
                        355.8831166246516,
                        749.3849609216919
                    ],
                    "hotspotRefId": "front_bumper-fog_light_cover-lhs_front-scratched",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.375,
                        0.1853557899086727,
                        false
                    ],
                    "imageTitle": "LHS Front Fog Light Cover",
                    "description": "Scratched",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebmlvc2f2z2g",
                    "frameId": 5,
                    "x": 0.649139486391589,
                    "y": 0.5279919282141802,
                    "location": [
                        1246.347813871851,
                        570.2312824713146
                    ],
                    "hotspotRefId": "back_door_left-door-lhs_rear-faded-rusted",
                    "triggerFrame": 14,
                    "type": "damage",
                    "display": [
                        0.15,
                        0.649139486391589,
                        false
                    ],
                    "imageTitle": "LHS Rear Door",
                    "description": "Faded, Rusted",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebke27wxq31th",
                    "frameId": 5,
                    "x": 0.6108249245247996,
                    "y": 0.3372145214789805,
                    "location": [
                        1172.7838550876154,
                        364.19168319729897
                    ],
                    "hotspotRefId": "window_front_door_left-window_glass_or_quarter_glass-lhs_front-broken",
                    "triggerFrame": 14,
                    "type": "damage",
                    "display": [
                        0.11249999999999999,
                        0.6108249245247996,
                        false
                    ],
                    "imageTitle": "LHS Front Window Glass/Quarter Glass",
                    "description": "Broken",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55eb7mttgi8rgnv",
                    "frameId": 5,
                    "x": 0.5513888646484507,
                    "y": 0.7637164100580672,
                    "location": [
                        1058.6666201250255,
                        824.8137228627127
                    ],
                    "hotspotRefId": "wheel_front_left-tyre-lhs_front-damaged",
                    "triggerFrame": 14,
                    "type": "damage",
                    "display": [
                        0.11249999999999999,
                        0.5513888646484507,
                        false
                    ],
                    "imageTitle": "LHS Front Tyre",
                    "description": "Damaged",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebl76a5wk3o4",
                    "frameId": 6,
                    "x": 0.4725847838301703,
                    "y": 0.30289849166989086,
                    "location": [
                        907.362784953927,
                        327.13037100348214
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.27,
                        0.4725847838301703,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebrtyua82o8bd",
                    "frameId": 6,
                    "x": 0.15937505040950084,
                    "y": 0.6772849394664782,
                    "location": [
                        306.0000967862416,
                        731.4677346237964
                    ],
                    "hotspotRefId": "front_bumper-fog_light_cover-lhs_front-scratched",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.3,
                        0.15937505040950084,
                        false
                    ],
                    "imageTitle": "LHS Front Fog Light Cover",
                    "description": "Scratched",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebxfvyb0beztk",
                    "frameId": 6,
                    "x": 0.6588954520606933,
                    "y": 0.5292668092508025,
                    "location": [
                        1265.079267956531,
                        571.6081539908666
                    ],
                    "hotspotRefId": "back_door_left-door-lhs_rear-faded-rusted",
                    "triggerFrame": 14,
                    "type": "damage",
                    "display": [
                        0.22499999999999998,
                        0.6588954520606933,
                        false
                    ],
                    "imageTitle": "LHS Rear Door",
                    "description": "Faded, Rusted",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebv8jlyymqm39",
                    "frameId": 6,
                    "x": 0.6003954396750161,
                    "y": 0.33527852283301174,
                    "location": [
                        1152.759244176031,
                        362.1008046596527
                    ],
                    "hotspotRefId": "window_front_door_left-window_glass_or_quarter_glass-lhs_front-broken",
                    "triggerFrame": 14,
                    "type": "damage",
                    "display": [
                        0.15,
                        0.6003954396750161,
                        false
                    ],
                    "imageTitle": "LHS Front Window Glass/Quarter Glass",
                    "description": "Broken",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebaqgk76eiv1d",
                    "frameId": 6,
                    "x": 0.5135503833025667,
                    "y": 0.7638052207242709,
                    "location": [
                        986.0167359409282,
                        824.9096383822126
                    ],
                    "hotspotRefId": "wheel_front_left-tyre-lhs_front-damaged",
                    "triggerFrame": 14,
                    "type": "damage",
                    "display": [
                        0.15,
                        0.5135503833025667,
                        false
                    ],
                    "imageTitle": "LHS Front Tyre",
                    "description": "Damaged",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebm539538hcna",
                    "frameId": 7,
                    "x": 0.46583140346470486,
                    "y": 0.30175013347379537,
                    "location": [
                        894.3962946522333,
                        325.890144151699
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.18000000000000002,
                        0.46583140346470486,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebnwlvvata61r",
                    "frameId": 7,
                    "x": 0.13742428658332742,
                    "y": 0.6681514752416134,
                    "location": [
                        263.85463023998864,
                        721.6035932609425
                    ],
                    "hotspotRefId": "front_bumper-fog_light_cover-lhs_front-scratched",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.22499999999999998,
                        0.13742428658332742,
                        false
                    ],
                    "imageTitle": "LHS Front Fog Light Cover",
                    "description": "Scratched",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebdx3ry32dz1v",
                    "frameId": 7,
                    "x": 0.665197456171518,
                    "y": 0.5279405658694049,
                    "location": [
                        1277.1791158493147,
                        570.1758111389572
                    ],
                    "hotspotRefId": "back_door_left-door-lhs_rear-faded-rusted",
                    "triggerFrame": 14,
                    "type": "damage",
                    "display": [
                        0.3,
                        0.665197456171518,
                        false
                    ],
                    "imageTitle": "LHS Rear Door",
                    "description": "Faded, Rusted",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebp649zte4ipb",
                    "frameId": 7,
                    "x": 0.5906419326849276,
                    "y": 0.3378557048164496,
                    "location": [
                        1134.032510755061,
                        364.88416120176555
                    ],
                    "hotspotRefId": "window_front_door_left-window_glass_or_quarter_glass-lhs_front-broken",
                    "triggerFrame": 14,
                    "type": "damage",
                    "display": [
                        0.1875,
                        0.5906419326849276,
                        false
                    ],
                    "imageTitle": "LHS Front Window Glass/Quarter Glass",
                    "description": "Broken",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55eb1vc87dwypx7",
                    "frameId": 7,
                    "x": 0.47698229211106347,
                    "y": 0.762248918045124,
                    "location": [
                        915.8060008532418,
                        823.2288314887338
                    ],
                    "hotspotRefId": "wheel_front_left-tyre-lhs_front-damaged",
                    "triggerFrame": 14,
                    "type": "damage",
                    "display": [
                        0.1875,
                        0.47698229211106347,
                        false
                    ],
                    "imageTitle": "LHS Front Tyre",
                    "description": "Damaged",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebaj5i0d1akr",
                    "frameId": 8,
                    "x": 0.45759051654258426,
                    "y": 0.30124864326642853,
                    "location": [
                        878.5737917617618,
                        325.3485347277428
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.09000000000000002,
                        0.45759051654258426,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55eb9qm8ws2l0pe",
                    "frameId": 8,
                    "x": 0.11782012020812115,
                    "y": 0.6567624654104787,
                    "location": [
                        226.2146307995926,
                        709.303462643317
                    ],
                    "hotspotRefId": "front_bumper-fog_light_cover-lhs_front-scratched",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.14999999999999997,
                        0.11782012020812115,
                        false
                    ],
                    "imageTitle": "LHS Front Fog Light Cover",
                    "description": "Scratched",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebiwrgzy1dx7",
                    "frameId": 8,
                    "x": 0.6695913219090586,
                    "y": 0.5303259019175205,
                    "location": [
                        1285.6153380653925,
                        572.7519740709222
                    ],
                    "hotspotRefId": "back_door_left-door-lhs_rear-faded-rusted",
                    "triggerFrame": 14,
                    "type": "damage",
                    "display": [
                        0.375,
                        0.6695913219090586,
                        false
                    ],
                    "imageTitle": "LHS Rear Door",
                    "description": "Faded, Rusted",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebn893gceo7zo",
                    "frameId": 8,
                    "x": 0.5789701228598835,
                    "y": 0.33581828385477785,
                    "location": [
                        1111.6226358909762,
                        362.68374656316007
                    ],
                    "hotspotRefId": "window_front_door_left-window_glass_or_quarter_glass-lhs_front-broken",
                    "triggerFrame": 14,
                    "type": "damage",
                    "display": [
                        0.225,
                        0.5789701228598835,
                        false
                    ],
                    "imageTitle": "LHS Front Window Glass/Quarter Glass",
                    "description": "Broken",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebmxuph1671nl",
                    "frameId": 8,
                    "x": 0.43793525765269453,
                    "y": 0.7597106361862933,
                    "location": [
                        840.8356946931735,
                        820.4874870811967
                    ],
                    "hotspotRefId": "wheel_front_left-tyre-lhs_front-damaged",
                    "triggerFrame": 14,
                    "type": "damage",
                    "display": [
                        0.225,
                        0.43793525765269453,
                        false
                    ],
                    "imageTitle": "LHS Front Tyre",
                    "description": "Damaged",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebz0xwycltga",
                    "frameId": 9,
                    "x": 0.4576453223717834,
                    "y": 0.3012548266731672,
                    "location": [
                        878.6790189538241,
                        325.3552128070206
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        2.7755575615628914e-17,
                        0.4576453223717834,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55eboukw0li7c98",
                    "frameId": 9,
                    "x": 0.11786767129877097,
                    "y": 0.6563867583217452,
                    "location": [
                        226.30592889364027,
                        708.8976989874848
                    ],
                    "hotspotRefId": "front_bumper-fog_light_cover-lhs_front-scratched",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.07499999999999997,
                        0.11786767129877097,
                        false
                    ],
                    "imageTitle": "LHS Front Fog Light Cover",
                    "description": "Scratched",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebkxpzwra0xe",
                    "frameId": 9,
                    "x": 0.6695710030801503,
                    "y": 0.5302149766122631,
                    "location": [
                        1285.5763259138885,
                        572.6321747412442
                    ],
                    "hotspotRefId": "back_door_left-door-lhs_rear-faded-rusted",
                    "triggerFrame": 14,
                    "type": "damage",
                    "display": [
                        0.45,
                        0.6695710030801503,
                        false
                    ],
                    "imageTitle": "LHS Rear Door",
                    "description": "Faded, Rusted",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebupyg7gk4cq8",
                    "frameId": 9,
                    "x": 0.5789232568260397,
                    "y": 0.3358511305690023,
                    "location": [
                        1111.5326531059964,
                        362.7192210145225
                    ],
                    "hotspotRefId": "window_front_door_left-window_glass_or_quarter_glass-lhs_front-broken",
                    "triggerFrame": 14,
                    "type": "damage",
                    "display": [
                        0.2625,
                        0.5789232568260397,
                        false
                    ],
                    "imageTitle": "LHS Front Window Glass/Quarter Glass",
                    "description": "Broken",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebds1miqctc5v",
                    "frameId": 9,
                    "x": 0.4378954258313599,
                    "y": 0.7597173187287101,
                    "location": [
                        840.759217596211,
                        820.4947042270069
                    ],
                    "hotspotRefId": "wheel_front_left-tyre-lhs_front-damaged",
                    "triggerFrame": 14,
                    "type": "damage",
                    "display": [
                        0.2625,
                        0.4378954258313599,
                        false
                    ],
                    "imageTitle": "LHS Front Tyre",
                    "description": "Damaged",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55eb56rfipozlj2",
                    "frameId": 10,
                    "x": 0.4523447318543575,
                    "y": 0.3003685126861404,
                    "location": [
                        868.5018851603663,
                        324.3979937010316
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0,
                        0.4523447318543575,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebxpqrp39syqr",
                    "frameId": 10,
                    "x": 0.1037478295986539,
                    "y": 0.6457372914916644,
                    "location": [
                        199.1958328294155,
                        697.3962748109975
                    ],
                    "hotspotRefId": "front_bumper-fog_light_cover-lhs_front-scratched",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0,
                        0.1037478295986539,
                        false
                    ],
                    "imageTitle": "LHS Front Fog Light Cover",
                    "description": "Scratched",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebyufuaqihzo",
                    "frameId": 10,
                    "x": 0.674276164068485,
                    "y": 0.5324669144831439,
                    "location": [
                        1294.610235011491,
                        575.0642676417954
                    ],
                    "hotspotRefId": "back_door_left-door-lhs_rear-faded-rusted",
                    "triggerFrame": 14,
                    "type": "damage",
                    "display": [
                        0.525,
                        0.674276164068485,
                        false
                    ],
                    "imageTitle": "LHS Rear Door",
                    "description": "Faded, Rusted",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebvt8wu3wgpz8",
                    "frameId": 10,
                    "x": 0.5652106373271903,
                    "y": 0.33438649222301586,
                    "location": [
                        1085.2044236682054,
                        361.13741160085715
                    ],
                    "hotspotRefId": "window_front_door_left-window_glass_or_quarter_glass-lhs_front-broken",
                    "triggerFrame": 14,
                    "type": "damage",
                    "display": [
                        0.3,
                        0.5652106373271903,
                        false
                    ],
                    "imageTitle": "LHS Front Window Glass/Quarter Glass",
                    "description": "Broken",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebod7q6z98yf",
                    "frameId": 10,
                    "x": 0.4009832689407092,
                    "y": 0.7553038155530313,
                    "location": [
                        769.8878763661617,
                        815.7281207972737
                    ],
                    "hotspotRefId": "wheel_front_left-tyre-lhs_front-damaged",
                    "triggerFrame": 14,
                    "type": "damage",
                    "display": [
                        0.3,
                        0.4009832689407092,
                        false
                    ],
                    "imageTitle": "LHS Front Tyre",
                    "description": "Damaged",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ebyjep9ro6xcs",
                    "frameId": 11,
                    "x": 0.4418922318890431,
                    "y": 0.2998646891634212,
                    "location": [
                        848.4330852269627,
                        323.85386429649486
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0,
                        0.4418922318890431,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },

                {
                    "id": "l3jy55ecgoc5ue93zep",
                    "frameId": 52,
                    "x": 0.6209099675224067,
                    "y": 0.29994043412636656,
                    "location": [
                        1192.1471376430209,
                        323.9356688564759
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.09,
                        0.6209099675224067,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ec85m0s28cjir",
                    "frameId": 53,
                    "x": 0.6170677486331628,
                    "y": 0.30037140002963225,
                    "location": [
                        1184.7700773756726,
                        324.40111203200286
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.18,
                        0.6170677486331628,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55eci8yar95va5a",
                    "frameId": 54,
                    "x": 0.6092401746215652,
                    "y": 0.30118847485219685,
                    "location": [
                        1169.7411352734052,
                        325.2835528403726
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.27,
                        0.6092401746215652,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55eclckli0wo0xk",
                    "frameId": 55,
                    "x": 0.603561908590313,
                    "y": 0.3023401164952773,
                    "location": [
                        1158.838864493401,
                        326.5273258148995
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.36,
                        0.603561908590313,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ectjxz3ylgbke",
                    "frameId": 56,
                    "x": 0.5978019920390142,
                    "y": 0.30380936301242034,
                    "location": [
                        1147.7798247149071,
                        328.114112053414
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.44999999999999996,
                        0.5978019920390142,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ecseh476l7ku",
                    "frameId": 56,
                    "x": 0.4930621695552455,
                    "y": 0.6969715974419369,
                    "location": [
                        946.6793655460714,
                        752.7293252372918
                    ],
                    "hotspotRefId": "front_bumper-fog_light_cover-lhs_front-scratched",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.6,
                        0.4930621695552455,
                        false
                    ],
                    "imageTitle": "LHS Front Fog Light Cover",
                    "description": "Scratched",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ecxa38zmt6r28",
                    "frameId": 57,
                    "x": 0.5864808351462975,
                    "y": 0.30571762845767897,
                    "location": [
                        1126.0432034808912,
                        330.1750387342933
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.5399999999999999,
                        0.5864808351462975,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ec1tl56xggwcp",
                    "frameId": 58,
                    "x": 0.5683867794352008,
                    "y": 0.30517223373131175,
                    "location": [
                        1091.3026165155854,
                        329.58601242981666
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.6299999999999999,
                        0.5683867794352008,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ec0j6sipy5r8ed",
                    "frameId": 59,
                    "x": 0.5682954005523219,
                    "y": 0.30518481617656323,
                    "location": [
                        1091.127169060458,
                        329.5996014706883
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.7199999999999999,
                        0.5682954005523219,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55eccu7t8923eb",
                    "frameId": 60,
                    "x": 0.5533592866227436,
                    "y": 0.3058639898805421,
                    "location": [
                        1062.4498303156677,
                        330.3331090709855
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.8099999999999998,
                        0.5533592866227436,
                        false
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                },
                {
                    "id": "l3jy55ecsg1e8f8xpne",
                    "frameId": 61,
                    "x": 0.5341888385207267,
                    "y": 0.3043737795646206,
                    "location": [
                        1025.6425699597953,
                        328.72368192979025
                    ],
                    "hotspotRefId": "front_windshield-windshield-front-chip_or_crack",
                    "triggerFrame": 0,
                    "type": "damage",
                    "display": [
                        0.8999999999999998,
                        0.5341888385207267,
                        true
                    ],
                    "imageTitle": "Front Windshield",
                    "description": "Chip/crack",
                    "imageSrc": "https://images.wapcar.my/file1/80c17673cbf34926883fb36f930e2ab6_750x420.jpg"
                }
        ]}
        }
    />
      
    );
  };
  
  export default App;
