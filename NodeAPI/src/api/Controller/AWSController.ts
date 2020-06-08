const AWS = require("aws-sdk");
const s3 = new AWS.S3({
  accessKeyId: "AKIAUBZKM4MRBUWM7J6O", // aws access id here
  secretAccessKey: "ja1gqbHauGcCI9054PRr+lsapb7lTLsbUtJECloT", // aws secret access key here
  useAccelerateEndpoint: true,
});
const params = {
  Bucket: "bramfinalwork",
  Key: "<Put your key here>",
  Expires: 60 * 60, // expiry time
  ACL: "bucket-owner-full-control",
  ContentType: "image/jpeg", // this can be changed as per the file type
};

export function getSignedUrl(req, res) {
  const fileurls = [];
  s3.getSignedUrl("putObject", params, function (err, url) {
    if (err) {
      console.log("Error getting presigned url from AWS S3");
      res.json({
        success: false,
        message: "Pre-Signed URL error",
        urls: fileurls,
      });
    } else {
      fileurls[0] = url;
      console.log("Presigned URL: ", fileurls[0]);
      res.json({
        success: true,
        message: "AWS SDK S3 Pre-signed urls generated successfully.",
        urls: fileurls,
      });
    }
  });
}
