export const state = () => ({
  imageLoaded: false,
})

export const mutations = {
  IMAGE_LOADED(state) {
    state.imageLoaded = true
  }
}

export const actions = {
  setImageLoaded({ commit }){
    commit('IMAGE_LOADED')
  }
}

export const getters = {}

export const plugins = [
]
