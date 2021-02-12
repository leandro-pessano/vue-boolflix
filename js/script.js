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
    results: [],
    imgSrc: 'https://image.tmdb.org/t/p/w342/',
    flags: ['de', 'en', 'es', 'fr', 'it', 'ja', 'ko', 'pt'],
    active: ''
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
        this.results = this.movieResults;
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
        if (this.active == 1) {
          this.results = this.serieResults;
        }
      });
    },
    onlyMovie() {
      this.results = this.movieResults
      this.active = 0;
    },
    onlySerie() {
      this.results = this.serieResults
      this.active = 1;
    }
  }
});
