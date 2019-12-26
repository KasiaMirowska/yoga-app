import config from '../config';
import TokenService from './token-service';

const APIcalls = {

    getAllUserFlows: () => {
        const URL = config.API_ENDPOINT + '/flows'

        return fetch(URL, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res => {
                console.log(URL, res)
                if (!res.ok) {
                    throw new Error('something went wrong')
                }
                return res;
            })
            .then(res => res.json())
    },

    postNewFlow: (newFlow) => {
        const URL = config.API_ENDPOINT + `/flows/`;
        return fetch(URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
               title: newFlow.title
            })
        })
            .then(res => {
                console.log(URL, res)
                if (!res.ok) {
                    throw new Error('something went wrong')
                }
                return res;
            })
            .then(res => res.json())
    },

    getAllPosesInFlow: (flowId) => {
        const URL = config.API_ENDPOINT + `/flows/${flowId}`;
        return fetch(URL, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res => {
                console.log(URL, res)
                if (!res.ok) {
                    throw new Error('something went wrong')
                }
                return res;
            })
            .then(res => res.json())
    }

}
export default APIcalls;