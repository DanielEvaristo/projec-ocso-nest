import { S3Client } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { PutObjectCommand } from '@aws-sdk/client-s3';

@Injectable()
export class AwsService {
    private s3 = new S3Client({
        region: "us-east-2",
        credentials:{
            accessKeyId: process.env.accesskey_bucket,
            secretAccessKey: process.env.secretkey_bucket,
        }
    });

    async uploadFile(file: Express.Multer.File){
        const key = file.originalname;
        const url = `https://${process.env.bucket_name}.s3.us-east-2.amazonaws.com/${key}`;
        const bucket = process.env.bucket_name;
        //https://nest-ocso-test-daniel.s3.us-east-2.amazonaws.com/Renegul.jpeg
        const command = new PutObjectCommand({
            Key: key,
            Body: file.buffer,
            Bucket: bucket,
        })
        await this.s3.send(command);
        return url;
    }
}
