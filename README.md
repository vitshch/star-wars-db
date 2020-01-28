### Api work
- XmlHttpRequest
Old vanilla JS way of making requests to server.
Developed by Microsoft in IE then used in most of browsers.
Supports XML, Json and even binary data.

- Fetch API
New api in ES. Useful, have async support

- Third party that works on top of Fetch API
    - Axios
    - Superagent
    - Got
    - Request
    - Reqwest

```javascript
fetch("https://swapi.co/api/people/1")
    .then(res => {
        console.log('Got response', res.status);
        return res.json();
    })
    .then((body) => {
        console.log(body);
    });
```

Fetch API uses promises.
Fetch API have json(), arrayBuffer(), blob(), text(), formData()

Fetch rejects promise only in case of network issues, server is unreachable
To check result code: result.status
result.ok = true if result code is in range 200 - 299