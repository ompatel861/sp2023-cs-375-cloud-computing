# Begin Update of AWS CLI and Python ##
#!/bin/bash
sudo yum -y remove python36
sudo yum -y install python38
sudo update-alternatives --set python /usr/bin/python3.8
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
rm awscliv2.zip
sudo pip install boto3 git-remote-codecommit



echo Please enter a valid IP address. Type carefully:
read ip_address
echo IP address:$ip_address
echo Please wait...
#sudo pip install --upgrade awscli
#bucket=$(aws s3api list-buckets --query Buckets[0].Name --output text)
bucket=`aws s3api list-buckets --query "Buckets[].Name" | grep s3bucket | tr -d ',' | sed -e 's/"//g' | xargs`

FILE_PATH="/home/ec2-user/environment/resources/public_policy.json"
FILE_PATH_2="/home/ec2-user/environment/resources/permissions.py"
FILE_PATH_3="/home/ec2-user/environment/resources/setup.sh"

