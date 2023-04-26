aws s3api create-bucket --bucket sample-bucket-op --acl public-read
aws s3 website s3://sample-bucket-dn --index-document index.html

# Download the zip file from S3, note the use of the S3 URI, not HTTPS
aws s3 cp s3://sample-bucket-dn/build.zip build.zip

# Decompress the zip file into a temp directory
unzip -d web_ui_deploy build.zip

# Sync up the contents of the temp directory to S3 prefix
aws s3 sync web_ui_deploy/build s3://sample-bucket-op

# And optionally, clean up the temp files and directory
# Unix:
rm -rf temp.zip temp_zip_contents
# Windows
rd /s/q temp_zip_contents
del temp.zip