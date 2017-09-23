// This is the path to the in-memory cache... we don't want any configuration
// information in the main code folders, but we *do* want it in the
// repository for fast deployment.
module.exports = {
    'url' : '54.226.72.162' // TODO: put the path to your memcached instance, such as 10.2.5.6:11211
    //Public IP mcd EC2 instance: 54.226.72.162
}
