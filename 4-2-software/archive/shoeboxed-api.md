# Shoeboxed API

* https://app.shoeboxed.com/member/v2/settings#api
*
* https://api.shoeboxed.com/v2/explorer/index.html

theo-test
ID: d54fcdae881d4ee490e43a856ff90135
Secret: PQMBm1uQS.ZC2epF.XDCmeBfWwk//dIqisbbsgW71o51L.SfVyjO.
Redirect uri: https://theo-armour.github.io · edit · delete


* once you have obtained a token for your user, you can issue a GET request to /user to get your account details:
* Account 1429733747

Then I can issue a GET /v2/accounts/948405455/envelopes,


test theo
https://id.shoeboxed.com/oauth/authorize?client_id=d54fcdae881d4ee490e43a856ff90135&response_type=code&scope=all&redirect_uri=https://evereverland.gitlab.io&state=01234567888

test swagger
https://id.shoeboxed.com/oauth/authorize?client_id=30d0e270a0e64429a9b9bc6adb9b8229&response_type=code&scope=all&redirect_uri=https://evereverland.gitlab.io&state=01234567888


curl -v -XPOST https://id.shoeboxed.com/oauth/token \
    -d code=29eba8d2-f2a0-4bb9-96ff-77ba82f2c5cd \
    -d grant_type=authorization_code \
    --data-urlencode redirect_uri='https://theo-armour.github.io/sandbox/showbarks-api/showbarks-api.html' \
    -u d54fcdae881d4ee490e43a856ff90135:PQMBm1uQS.ZC2epF.XDCmeBfWwk//dIqisbbsgW71o51L.SfVyjO.


curl https://api.shoeboxed.com/v2/user -X GET -H 'Authorization: Bearer 63863a33-17c1-455e-b453-794e9559f6c2'


curl https://api.shoeboxed.com:443/v2/accounts/1429733747/documents -X GET -H 'Authorization: Bearer 63863a33-17c1-455e-b453-794e9559f6c2'

curl https://api.shoeboxed.com:443/v2/accounts/1429733747/envelopes -X GET -H 'Authorization: Bearer 63863a33-17c1-455e-b453-794e9559f6c2'

curl https://api.shoeboxed.com/v2/accounts/1429733747/settings -X GET -H 'Authorization: Bearer 63863a33-17c1-455e-b453-794e9559f6c2'

