export const DRAG_NODE = 'FETCH_CANDIDATES'

export const dragNode = (params) => {
  return {
    type: DRAG_NODE,
    payload: params
  };
}