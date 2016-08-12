export const ABOUT_CLICK = 'ABOUT_CLICK'

export const aboutClick = (params) => {
  return {
    type: ABOUT_CLICK,
    payload: params
  };
}
