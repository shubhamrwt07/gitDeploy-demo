let { S3 } = require('aws-sdk');
const fs = require('fs');
const s3Bucket = new S3({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.ACCESS_SECRET,
    region: process.env.REGION
});




module.exports.uploadS3 = async (req) => {
    try {
        let file = req;
        let fileKey = file.originalname;
        var buffer = fs.readFileSync(file.path);
        var params = {
            Bucket: process.env.BUCKET,
            ContentType: file.mimetype,
            Key: `rowthtechBlog/${fileKey}`,
            Body: buffer
        };
        return new Promise((resolve, reject) => {
            s3Bucket.upload(params, async (err, data) => {
                if (err) {
                    reject(err.message);
                }else{
                 resolve(data?.Location);
                };
            });
        });

    } catch (err) {
        throw (err)
    };
};






