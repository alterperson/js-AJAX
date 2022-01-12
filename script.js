'use strict';

const getData = (url) => {
    return fetch(url).then(response => response.json())
}

const sendData = (url, data) => {
    return fetch(url, {
        method: 'POST',
        body: data,
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    }).then(response => response.json())
}

getData('db.json')
    .then(data => {
        sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(data))
            .catch(newError => console.log(newError))
    })
    .catch(error => console.log(error))