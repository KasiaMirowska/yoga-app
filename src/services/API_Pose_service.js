import config from '../config';
import TokenService from './token-service';


const APIPoseCalls = {

    getAllPosesData: () => {
        const URL = config.API_ENDPOINT + '/poses'

        return fetch(URL)
            .then(res => {
                if (!res.ok) {
                    throw new Error('something went wrong')
                }
                return res;
            })
            .then(res => res.json())
    },

    getFullPoseData: (pose_id) => {
        const URL = config.API_ENDPOINT + `/flow/${pose_id}`;
        return fetch(URL, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('something went wrong')
                }
                return res;
            })
            .then(res => res.json())
    },



    insertPoseAttributes: (element) => {
        const { pose_id } = element;
        const URL = config.API_ENDPOINT + `/flow-att/${pose_id}`;
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
                    throw new Error('something went wrong')
                }
                return res;
            })
            .then(res => res.json())
    },

    insertPoseNotes: (note) => {
        const { pose_id } = note;
        const URL = config.API_ENDPOINT + `/flow-note/${pose_id}`;
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
                    throw new Error('something went wrong')
                }
                return res;
            })
            .then(res => res.json())
    }

}

export default APIPoseCalls;