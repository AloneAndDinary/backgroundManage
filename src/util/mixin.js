export default {
  data() {
    return {
      btnLoading: false
    };
  },
  methods: {
    showBtnLoading() {
      this.btnLoading = true;
    },
    hideBtnLoading() {
      setTimeout(() => {
        this.btnLoading = false;
      }, 1000);
    }
  }
};
