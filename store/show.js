export const strict = false

export const state = () => ({
  data: {},
  type: null,
  video: {},
  credits: {},
  cast: {},
  crew: {}
})

export const actions = {
  async load({ commit }, params) {
    let id = await this.$axios.$get(`https://api.themoviedb.org/3/trending/all/day?api_key=6c4c0fe755a0101e47421d28b8f0e65d`);
    // console.log(id);
    let store;
    do {
      id = id.results[Math.floor(Math.random() * 20)].id; 
       store  = await this.$axios.$get(`https://api.themoviedb.org/3/movie/${id}?api_key=6c4c0fe755a0101e47421d28b8f0e65d&language=en-US`)
    } while (!store.backdrop_path);

    let video = await this.$axios.$get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=6c4c0fe755a0101e47421d28b8f0e65d&language=en-US`);
    video = video.results.find(element => element.type === 'Trailer')

    let credits = await this.$axios.$get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=6c4c0fe755a0101e47421d28b8f0e65d&language=en-US`)
    let cast  = credits.cast.filter(element => element.order <=10)

    let crew  = credits.crew.filter((element, index) => index <=6)

    commit('SET_DATA', { store })
    commit('SET_VIDEO', { video })
    commit('SET_CREDITS', { credits })
    commit('SET_CAST', { cast })
    commit('SET_CREW', { crew })

    return store
  },
}

export const mutations = {
  SET_DATA(state, { store }) {
    state.data = store
  },
  SET_VIDEO(state, { video }) {
    state.video = video
  },
  SET_CREDITS(state, { credits }) {
    state.credits = credits
  },
  SET_CAST(state, { cast }) {
    state.cast = cast
  },
  SET_CREW(state, { crew }) {
    state.crew = crew
  }
}
