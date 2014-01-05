var Twit 	= require('twit');
var auth 	= require('../config/auth');
var Twitter = new Twit(auth);
var stream 	= Twitter.stream('statuses/filter', { track: ['#soytanhipster'] });

module.exports = function ( io ){
	stream.on('tweet', function ( tweet ) {		
    	io.sockets.emit('tweet', 
    		{    			
    			name  : tweet.user.name,
    			image : tweet.user.profile_image_url,
    			text  : tweet.text
    		}
    	);
	});
}