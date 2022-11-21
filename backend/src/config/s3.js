import { S3Client } from "@aws-sdk/client-s3";
import secrets from "../utils/secrets.js";

const credentials = {
  accessKeyId: secrets.awsAccessKeyId,
  secretAccessKey: secrets.awsSecretAccessKey,
};
const client = new S3Client({
  region: secrets.awsBucketRegion,
  credentials: credentials,
});

export default client;
