import { getRandomCat } from '../../../api/randomCat'

let mockPresentation = async () => {
  let catData = []

  for (let i = 0; i < 7; i++) {
    let { data } = await getRandomCat()
    catData.push({
      name: data[0].id,
      imageUrl: data[0].url
    })
  }

  return catData
}

export const SET_PRESENTATION = "SET_PRESENTATION"
export const setPresentation = (payload) => ({
  type: SET_PRESENTATION,
  payload
})

export const getPresentation = async () => async (dispatch, getState) => {
  let listCat = await mockPresentation()
  dispatch(setPresentation(listCat))
}