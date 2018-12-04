function handler(err, res) {
    console.log(err ? err : "MY RESULT: " + JSON.stringify(res.json("done")));
}
let subscribers = ['isadov.test03+gil01+async+01@gmail.com', 'isadov.test03+gil01+async+02@gmail.com', 'isadov.test03+gil01+async+03@gmail.com',
    'isadov.test03+gil01+async+04@gmail.com', 'isadov.test03+gil01+async+05@gmail.com'];
//if (subscribers.length >=0) {
subscribers.forEach(function (email) {
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
});