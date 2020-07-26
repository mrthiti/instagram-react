import { getRandomCat } from '../../../api/randomCat'

let mockPost = async () => {
  let catData = []

  for (let i = 0; i < 8; i++) {
    let { data: catProfile } = await getRandomCat()
    let { data: catPost } = await getRandomCat()
    catData.push({
      user: {
        name: catProfile[0].id,
        profilePhoto: catProfile[0].url,
      },
      post: {
        photo: catPost[0].url
      }
    })
  }

  return catData
}

export const SET_POST = "SET_POST"
export const setPost = (payload) => ({
  type: SET_POST,
  payload
})

export const getPost = async () => async (dispatch, getState) => {
  let posts = await mockPost()
  dispatch(setPost(posts))
}