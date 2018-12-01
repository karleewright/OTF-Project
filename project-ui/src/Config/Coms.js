const url = 'http://localhost:4000'

export const statsAPI = async (data, action, path = '') => {
    await fetch(url + '/stats' + path, {
        method: action,
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
}
