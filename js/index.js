const app = {
  data() {
    return {
      data: {
        section1: {
          backgroundImg: {
            backgroundImage: 'url("img/section1/background.png")',
          },
          logo: {
            src: "img/section1/logo.png",
            alt: "logo",
          },
          navLinks: [
            { a: "OUR COMPANY", class: "nav-link active" },
            { a: "OUR EXPERTS", class: "nav-link " },
            { a: "OUR VALUES", class: "nav-link " },
            { a: "CONTACT", class: "nav-link " },
            {
              a: "<img src='img/section1/search.png' alt='search'>",
              class: "nav-link ",
            },
          ],
          content: {
            h1: "Expert advice for discerning buyers",
            p:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.\
            Commodi, facere enim porro a illum dolor sunt, magni\
            architecto velit, amet iste modi?",
            a: "Learn more",
            src: "img/section1/right-arrow.png",
            alt: "right-arrow",
          },
        },
      },
    };
  },

  methods: {},

  mounted() {
    const sec1 = document.querySelector(".sec1");
    Object.assign(sec1.style, this.data.section1.backgroundImg);
  },
};
Vue.createApp(app).mount("#app");
