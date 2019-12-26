import config from '../config';
import TokenService from './token-service';


const APIcalls = {

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

    insertPoseIntoFlows: (flowsPose) => {
        const URL = config.API_ENDPOINT + `/flow`;
        return fetch(URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                main_flow_id: flowsPose.main_flow_id, pose_id: flowsPose.pose_id, section_flow_id: Number(flowsPose.section_flow_id)
            }),
        })
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
    }
}
export default APIcalls ;