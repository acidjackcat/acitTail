const echoPostRequest = {
    url: 'https://demo-api.nyden.co/subscribe_get_in_line',
    method: 'POST',
    header: 'Content-Type:application/json',
    body: {
        mode: 'raw',
        raw: JSON.stringify({ "email": "isadov.test03+gil01+async+02@gmail.com", "queue_name": "farren_jean_andrea", "referral_code": null })
    }
};
function handler(err, res) {
    console.log(err ? err : res.json());
}
pm.sendRequest(echoPostRequest, handler);