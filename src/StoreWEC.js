const STORE = {
    currentFlow: {
      id: null,
      flowName: '',
      savedPosesIds: [],
      peakPose: null,
      warmUp: [],
      midFlow: [],
      breakPoses: [],
      afterPeak: [],
      notes: ''
    },
  ...
  // Component
  handleSaveAs = e => {
    const {pose_id} = props.match.params;
    const {currentFlow} = this.context;
    const flowSectionName = e.target.value;
    this.context.setPoseInFlowSection(pose_id, currentFlow, flowSectionName);
  }
  //Context
  setPoseInFlowSection(pose, flow, sectionName){
    const flowSection = flow[sectionName];
    const newFlowSection = [...flowSection, pose];
    const updatedFlow = {...flow, [sectionName]: newFlowSection};
    this.setState({currentFlow: updatedFlow});
  