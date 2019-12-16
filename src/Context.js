import React from 'react';



const yogaContext = React.createContext({
  
    currentFlow: '',
    poses: [],
    flows: [],
    addFlow: () => {},
    enterFlow: () => {},
    updateFlow: () => {},
    updateAttributes: () => {},
    poseAttributes: [],
})

export default yogaContext;

