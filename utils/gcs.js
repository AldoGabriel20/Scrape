
function main() {
    // [START storage_list_files]
    /**
     * TODO(developer): Uncomment the following line before running the sample.
     */
    // const bucketName = 'Name of a bucket, e.g. my-bucket';
    bucketName="sirclo-1152-super-eminent"
    // Imports the Google Cloud client library
    const {Storage} = require('@google-cloud/storage');
    const fs = require('fs');
    const yaml = require('js-yaml')
  
    // read yaml file
    let file = fs.readFileSync('./config/application.dev.yml', {encoding: 'utf-8'});
    let data = yaml.safeLoad(file)
  
    // parse config to correct format
    let private_key = data['google_storage']['private_key']
    data['google_storage']['private_key'] = private_key.replace(/\\n/g, '\n')
  
    // initialize connection to gcs
    const storage = new Storage({credentials: data['google_storage']});
    
    async function getBucketMetadata() {
      // Get bucket metadata.
      /**
       * TODO(developer): Uncomment the following line before running the sample.
       */
      // const bucketName = 'Name of a bucket, e.g. my-bucket';
  
      // Get Bucket Metadata
      const [metadata] = await storage.bucket(bucketName).getMetadata();
  
      for (const [key, value] of Object.entries(metadata)) {
        console.log(`${key}: ${value}`);
      }
    }
    // [END storage_get_bucket_metadata]
    getBucketMetadata().catch(console.error);
  }
  main(); 
  
