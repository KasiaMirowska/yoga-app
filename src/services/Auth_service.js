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
                throw new Error(res.error.message)
            }
            return res;
        })
        .then(res => res.json())
        
    },

    postUser: (user) => {
        const URL =  config.API_ENDPOINT + '/register';

        return fetch(URL, {
            method: 'POST',
            headers: {
                'content_type':'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(res => {
            if(!res.ok) {
                throw new Error(res.error.message)
            }
            res.json();
        })
    }
}
export default AuthCalls;