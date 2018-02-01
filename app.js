var addX = require('./function');

exports.handler = (event, context, callback) => {
    // TODO implement
    

	console.log('10 + 5 : '+addX.add(10));
	console.log('10 - 5 : '+addX.sub(10));
	console.log('10 * 5 : '+addX.multi(10));
	console.log('10 / 5 : '+addX.div(10));

	console.log(event);

	console.log('done..')
    callback(null, 'Hello from Lambda');
};