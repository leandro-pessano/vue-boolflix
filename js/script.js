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
    },
    // getCast() {
    //   this.results.forEach((e, i) => {
    //     axios
    //     .get('https://api.themoviedb.org/3/movie/' + e.id + '/credits?api_key=4cd9b80fcae998140b009f97c2a03e5d&language=it-IT')
    //     .then((result) => {
    //       this.results.forEach((e, i) => {
    //           e.cast = result.data.cast;
    //       });
    //     });
    //   });
    //   console.log(this.results);
    // }
  }
});
