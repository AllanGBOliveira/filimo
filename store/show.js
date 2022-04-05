export const strict = false

export const state = () => ({
  id: null,
  random: null,
  data: {},
  type: '',
  video: {},
  credits: {},
  cast: {},
  crew: {},
  season: {},
  episode: {}
})

export const actions = {
  async load({ commit , state}, params) {
    let show = await this.$axios.$get(`https://api.themoviedb.org/3/trending/all/day?api_key=6c4c0fe755a0101e47421d28b8f0e65d`);
    let store;
    let type;
    let random;
    let id;
    do {
      random = Math.floor(Math.random() * 20);
      commit('SET_RANDOM', { random })
      // let tvShow = show.results.find(element => element.media_type === 'tv')
      id = show.results[state.random].id;
      // id = tvShow.id;
      // id = 1396
      commit('SET_ID', { id })
      type = show.results[state.random].media_type;
      // type = tvShow.media_type
      // type = 'tv'
      commit('SET_TYPE', { type })
      store  = await this.$axios.$get(`https://api.themoviedb.org/3/${state.type}/${state.id}?api_key=6c4c0fe755a0101e47421d28b8f0e65d&language=en-US`)
      
    } while (!store.backdrop_path);

    let video = await this.$axios.$get(`https://api.themoviedb.org/3/${state.type}/${state.id}/videos?api_key=6c4c0fe755a0101e47421d28b8f0e65d&language=en-US`);
    video = video.results.find(element => element.type === 'Trailer')

    let credits = await this.$axios.$get(`https://api.themoviedb.org/3/${state.type}/${state.id}/credits?api_key=6c4c0fe755a0101e47421d28b8f0e65d&language=en-US`)
    let cast  = credits.cast.filter(element => element.order <=10)

    let crew  = credits.crew.filter((element, index) => index <=6)

    commit('SET_DATA', { store })
    commit('SET_VIDEO', { video })
    commit('SET_CREDITS', { credits })
    commit('SET_CAST', { cast })
    commit('SET_CREW', { crew })
    console.log(store);
    return store
  },

  async tv({ commit , state}, params) {
    let season_number = params.season_number;
    let episode_number = 1;
    let season = await this.$axios.$get(`https://api.themoviedb.org/3/tv/${state.id}/season/${season_number}?api_key=6c4c0fe755a0101e47421d28b8f0e65d&language=en-US`);
    let episode = await this.$axios.$get(`https://api.themoviedb.org/3/tv/${state.id}/season/${season_number}/episode/${episode_number}?api_key=6c4c0fe755a0101e47421d28b8f0e65d&language=en-US`);
    

    commit('SET_SEASON', { season });
    commit('SET_EPISODE', { episode });
    
    return season;
  }
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
  },
  SET_TYPE(state, { type }) {
    state.type = type
  },
  SET_RANDOM(state, { random }) {
    state.random = random
  },
  SET_ID(state, { id }) {
    state.id = id
  },
  SET_SEASON(state, { season }) {
    state.season = season
  },
  SET_EPISODE(state, { episode }) {
    state.episode = episode
  }
}
