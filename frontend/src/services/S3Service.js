class S3Service {
  constructor() {
    const AWS = require("aws-sdk");
    this.s3 = new AWS.S3({
      accessKeyId: "AKIAUBZKM4MRBUWM7J6O",
      secretAccessKey: "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",
    });
  }

  ReceiveImageUrlFromBucket(imageKey, edits) {
    const data = JSON.stringify({
      bucket: "bramfinalwork",
      key: imageKey,
      edits: edits,
    });
    const url = "https://d2vyjf3191krcr.cloudfront.net/" + btoa(data);
    return url;
  }

  async uploadImage(file, filename) {
    const params = {
      Bucket: "bramfinalwork",
      Key: filename, // File name you want to save as in S3
      Body: file,
    };

    // Uploading files to the bucket
    const data = await this.s3.upload(params).promise();
    console.log(`File uploaded successfully. ${data.Location}`);
    return data;
  }
}

export default new S3Service();
