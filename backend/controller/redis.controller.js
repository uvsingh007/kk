const Redis=require('ioredis')
const redis=new Redis({
    host:"redis-14017.c10.us-east-1-3.ec2.cloud.redislabs.com",
    port:"14017",
    password:'sdcicKIOQuEd5ey0DSVjWDxYpB36V6nv'
})

module.exports={
    redis
}