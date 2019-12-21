import config from '../config';


const APIcalls = {

    getAllPosesData: () => {
        const URL = config.API_ENDPOINT + '/poses'
        
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
export default APIcalls ;