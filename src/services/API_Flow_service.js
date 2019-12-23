import config from '../config';


const APIcalls = {

    getAllUserFlows: () => {
        const URL = config.API_ENDPOINT + '/flows'

        return fetch(URL)
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
        return fetch(URL)
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