<template>
  <div ref="artRef" class="relative video-gsm" :aria-controls="false"></div>
</template>

<script>
import Artplayer from "artplayer";

export default {
  data() {
    return {
      instance: null,
    };
  },
  props: {
    option: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    var art = new Artplayer({
      ...this.option,
      container: this.$refs.artRef,
      quality: [
        {
          default: false,
          html: 'HD 720',
          type: 'HD',
          url: "/GSM_Foto_Premiazioni/IMG_4975.mp4",
        },
        {
          default: true,
          html: 'FHD 1080p',
          type: 'FHD',
          url: "/GSM_Foto_Premiazioni/IMG_4975_1080FHD.mp4",
        },
      ],
    });

    this.$nextTick(() => {
      this.$emit("get-instance", this.instance);
    });
  },
  beforeDestroy() {
    if (this.instance && this.instance.destroy) {
      this.instance.destroy(false);
      console.log("destroy");
    }
  },
};
</script>