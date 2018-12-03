//*console.log('Ping');

/*setTimeout(function() {
 console.log('Pong');
}, 5000);
 
console.log('Where’s the ball?');*/




var subscriberS = pm.environment.get('subscriberS');

if (!subscriberS) {
    subscriberS = ['isadov.test03+gil01+async+01@gmail.com', 'isadov.test03+gil01+async+02@gmail.com', 'isadov.test03+gil01+async+03@gmail.com',
    'isadov.test03+gil01+async+04@gmail.com', 'isadov.test03+gil01+async+05@gmail.com'];
}


var currentSubscriber = subscriberS.shift();
pm.environment.set('subscriber', currentSubscriber);
pm.environment.set('subsriberS', subscriberS);











var subscriberS = pm.environment.get('subscriberS');
if (subscriberS && subscriberS.length > 0)
{
    postman.setNextRequest("https://demo-api.nyden.co/subscribe_get_in_line");
} else {
    postman.setNextRequest(null);
}



pm.sendRequest("https://demo-api.nyden.co/subscribe_get_in_line", function (err, response) {
    if (err) {
        console.log(err;)
    } else {
    console.log(response.json());
} 
});




pm.sendRequest(echoPostRequest, handler);
pm.sendRequest(echoPostRequest, handler);
pm.sendRequest(echoPostRequest, handler);
pm.sendRequest(echoPostRequest, handler);


