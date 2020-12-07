interface Action {
  type: string
  payload: object
}

export default (state: object, action: Action) => {
  switch(action.type){
    default:
      return {}
  }
};


