function handler(err, res) {
    console.log(err ? err : res.json("done"));
}


subscribers = ['isadov.test03+gil01+async+01@gmail.com', 'isadov.test03+gil01+async+02@gmail.com', 'isadov.test03+gil01+async+03@gmail.com',
    'isadov.test03+gil01+async+04@gmail.com', 'isadov.test03+gil01+async+05@gmail.com']

subscribers.forEach(function(email){
    echoPostRequest = {
        url: 'https://demo-api.nyden.co/subscribe_get_in_line',
        method: 'POST',
        header: 'Content-Type:application/json',
        body: {
            mode: 'raw',
            raw: JSON.stringify({ "email": email, "queue_name": "farren_jean_andrea", "referral_code": null })
        }
    };
    pm.sendRequest(echoPostRequest, handler);
})