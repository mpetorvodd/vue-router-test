// Get the current browser hash

const tabLoader = {
  data () {
    return {
      routeHash: ''
    }
  },
  watch: {
    $route() {
      this.getHash();
    }
  },

  created() {
    this.getHash();
  },

  methods: {
    getHash() {
      const hash = this.$route.hash;
      let isMatched = false;

      // Check if hash matches any tab
      this.tabs.forEach((tab) => {
        if ( tab.name == hash ) {
          this.routeHash = hash;

          isMatched = true;
        }
      });

      // Fallback to default if the hash doesn't match any tab
      if ( !isMatched ) {
        this.routeHash = '';
      }
    }
  }
}

export default tabLoader;