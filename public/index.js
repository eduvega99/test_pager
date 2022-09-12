const url = '/api/pagers';

const ipInput = document.querySelector('#ip');
const portInput = document.querySelector('#port');
const messageInput = document.querySelector('#message');
const systemInput = document.querySelector('#system');
const pagerInput = document.querySelector('#pager');

const button = document.querySelector('#button');

button.addEventListener('click', async () => {
    const data = {
        ip: ipInput.value,
        port: portInput.value,
        message: messageInput.value,
        system: systemInput.value, 
        pager: pagerInput.value
    };

    await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    }).then(res => alert(res.json()));
});