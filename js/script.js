var app = new Vue ({
  el: '#root',
  data: {
    tmdbGet: 'https://api.themoviedb.org/3/search/',
    movieGet: 'movie',
    tvGet: 'tv',
    apiKey: '4cd9b80fcae998140b009f97c2a03e5d',
    lang: 'it-IT',
    query: '',

    movieResults: [],
    serieResults: [],
    imgSrc: 'https://image.tmdb.org/t/p/w342/',
    flags: ['de', 'en', 'es', 'fr', 'it', 'ja', 'ko', 'pt'],
    activeMovie: true,
    activeSerie: false
  },
  mounted() {

  },
  methods: {
    searchMovie() {
      axios
      .get(this.tmdbGet + this.movieGet, {
        params: {
          api_key: this.apiKey,
          language: this.lang,
          query: this.query
        }
      })
      .then((result) => {
        this.movieResults = result.data.results;
      });
    },
    searchSerie() {
      axios
      .get(this.tmdbGet + this.tvGet, {
        params: {
          api_key: this.apiKey,
          language: this.lang,
          query: this.query
        }
      })
      .then((result) => {
        this.serieResults = result.data.results;
      });
    },
    serieClick() {
      this.activeMovie = false;
      this.activeSerie = true;
    },
    movieClick() {
      this.activeSerie = false;
      this.activeMovie = true;
    }
  }
});
