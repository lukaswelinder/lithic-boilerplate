export const HOME_CLICK = 'HOME_CLICK'

export const homeClick = (params) => {
  return {
    type: HOME_CLICK,
    payload: params
  };
}
