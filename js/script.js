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
    movieGenres : [],
    serieGenres: [],
    allGenres: [],
    selectedGenre: 'All',
    imgSrc: 'https://image.tmdb.org/t/p/w342/',
    flags: ['de', 'en', 'es', 'fr', 'it', 'ja', 'ko', 'pt'],
    active: ''
  },
  mounted() {
      axios
      .get('https://api.themoviedb.org/3/genre/' + this.movieGet + '/list', {
        params: {
          api_key: this.apiKey,
          language: this.lang,
        }
      })
      .then((result) => {
        this.movieGenres = result.data.genres;
        this.movieGenres.forEach((e, i) => {
          this.allGenres.push(e)
        });
      })
      axios
      .get('https://api.themoviedb.org/3/genre/' + this.tvGet + '/list', {
        params: {
          api_key: this.apiKey,
          language: this.lang,
        }
      })
      .then((result) => {
        this.serieGenres = result.data.genres;
        this.serieGenres.forEach((e, i) => {
          this.allGenres.push(e)
        });
      })
  },
  methods: {
    search() {
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
        if (this.active == 0) {
          this.results = this.movieResults;
        }
      });
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
      this.selectedGenre = 'All';
    },
    onlyMovie() {
      this.results = this.movieResults;
      this.active = 0;
      this.selectedGenre = 'All';
    },
    onlySerie() {
      this.results = this.serieResults;
      this.active = 1;
      this.selectedGenre = 'All';
    }
  }
});
