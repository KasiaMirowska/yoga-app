import config from '../config';
import TokenService from './token-service';

const APIFlowCalls = {

    getAllUserFlows: () => {
        const URL = config.API_ENDPOINT + '/flows'

        return fetch(URL, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res => {
                if (!res.ok) {
                   return res.json()
                   .then(err=> {
                       console.log(err)
                       throw new Error(err.error.message)
                   })
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
                if (!res.ok) {
                   res.json()
                   .then(err => {
                       console.log(err)
                       throw new Error(err.error.message)
                   })
                }
                return res;
            })
            .then(res => res.json())
    },

    insertPoseIntoFlows: (flowsPose) => {
        const URL = config.API_ENDPOINT + `/flow-pose`;
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
     deletePoseFromFlow: (poseId, flowId) => {
        const URL = config.API_ENDPOINT + `/delete/${flowId}/${poseId}`;
        return fetch(URL, {
            method: 'DELETE',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res => {
                if(!res.ok) {
                    return res.json()
                    .then(err=> {
                        console.log(err)
                        throw new Error(err.error.message)
                })}
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
export default APIFlowCalls;