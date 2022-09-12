const url = '/api/pagers';

const ipInput = document.querySelector('#ip');
const portInput = document.querySelector('#port');
const messageInput = document.querySelector('#message');
const button = document.querySelector('#button');

button.addEventListener('click', () => {
    const data = {
        ip: ipInput.value,
        port: portInput.value,
        message: messageInput.value
    };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json());
});