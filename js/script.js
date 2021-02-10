var app = new Vue ({
  el: '#root',
  data: {
    tmdbGet: 'https://api.themoviedb.org/3/search/',
    movieGet: 'movie',
    tvGet: 'tv',
    apiKey: '4cd9b80fcae998140b009f97c2a03e5d',
    lang: 'it-IT',
    query: '',
  },
  mounted() {
    axios
    .get(this.tmdbGet, {
      params: {
        this.movieGet,
        api_key: this.apiKey,
        language: this.lang,
        query: this.query
      }
    })
    .then((result) => {
      
    });
  },
  methods: {

  }
});