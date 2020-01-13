import config from '../config';
import TokenService from './token-service';


const APIPoseCalls = {

    getAllPosesData: () => {
        const URL = config.API_ENDPOINT + '/poses'

        return fetch(URL)
            .then(res => {
                if (!res.ok) {
                    return res.json()
                        .then(err => {
                            console.log(err)
                            throw new Error(err.error.message)
                        })
                }
                return res;
            })
            .then(res => res.json())
    },

    insertPoseAttributes: (element) => {
        const { pose_id } = element;
        const URL = config.API_ENDPOINT + `/flowatt/${pose_id}`;
        return fetch(URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(element),
        })
            .then(res => {
                if (!res.ok) {
                    return res.json()
                        .then(err => {
                            console.log(err)
                            throw new Error(err.error.message)
                        })
                }
                return res;
            })
            .then(res => res.json())
    },

    insertPoseNotes: (note) => {
        const { pose_id } = note;
        const URL = config.API_ENDPOINT + `/flownote/${pose_id}`;
        return fetch(URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(note),
        })
            .then(res => {
                if (!res.ok) {
                    return res.json()
                        .then(err => {
                            console.log(err)
                            throw new Error(err.error.message)
                        })
                }
                return res;
            })
            .then(res => res.json())
    },

    getFullPoseData: (flowId, poseId) => {
        const URL = config.API_ENDPOINT + `/flow/${flowId}/${poseId}`;
        return fetch(URL, {
            method: 'GET',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res => {
                if (!res.ok) {
                    return res.json()
                        .then(err => {
                            console.log(err)
                            throw new Error(err.error.message)
                        })
                }
                return res;
            })
            .then(res => res.json())
    }

}

export default APIPoseCalls;