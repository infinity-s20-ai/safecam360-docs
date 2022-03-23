# Safecam360 Docs

Production site - [https://docs.s20.ai/safecam360/](https://docs.s20.ai/safecam360/)

# Steps to edit
1. The ```docs/index.md``` file can be edited as required.
2. Run ```mkdocs serve``` for a live preview on your browser.


# To deploy
1. Run ```mkdocs build``` to build. 
2. Copy content of the ```site``` directory to the following S3 location - ``` s3://docs.s20.ai/safecam360/```
3. Invalidate cache from AWS CloudFront to reflect new changes on production site