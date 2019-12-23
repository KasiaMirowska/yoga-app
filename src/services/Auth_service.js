import config from '../config';

const AuthCalls = {
    postLogin: (credentials) => {
        const URL = config.API_ENDPOINT + '/login'
       
        return fetch(URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(credentials),
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('something went wrong')
            }
            return res;
        })
        .then(res => res.json())     
    }
}
export default AuthCalls;