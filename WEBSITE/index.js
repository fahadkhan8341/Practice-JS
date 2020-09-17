var app = new Vue({
  el: "#app",
  data() {
    return { list: undefined,
      showVideo: false,
      heroImgSrc: 'https://i.vimeocdn.com/video/909692706_1920x1080.jpg?r=pad'
    }
  },
  methods: {
    videoControl(state) {
      this.showVideo=state;
    },
    changeImg(imgSrc) {
      this.heroImgSrc= imgSrc;
      console.log(this.heroImgSrc)
    }
  },
  mounted() {
    axios
      .get("static/thumbnails.json")
      .then((res) => res.data)
      .then((json) => {
        this.list = json;
        console.log(this.list);
      });
  },
});

