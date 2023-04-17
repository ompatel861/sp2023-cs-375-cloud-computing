aws s3api create-bucket --bucket sample-bucket-dn --acl public-read
aws s3 website s3://sample-bucket-dn --index-document index.html