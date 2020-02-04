// Get the current browser hash

const hash = {
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
      this.routeHash = this.$route.hash;
    }
  }
}

export default hash;