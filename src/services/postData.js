export function PostData(type, userData) {
    //let BaseURL = 'http://localhost/react/api/';
    //let BaseURL = 'http://localhost/dbm/api/';
    let BaseURL = 'https://dbrandmarketing.com/dbm/api/';
    return new Promise((resolve, reject) =>{
        fetch(BaseURL+type, {
            method: 'POST',
            body: userData
        })
        .then((response) => response.json())
        .then((res) => {
            resolve(res);
        })
        .catch((error) => {
            reject(error);
        });
    });
}