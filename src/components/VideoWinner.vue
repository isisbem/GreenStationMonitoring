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
          default: true,
          type: 'SD',
          html: 'SD 480p',
          url: "/video-tpl-official/GSM_VIDEO_COMRPES.mp4",
        },
        {
          default: false,
          type: 'HD',
          html: 'HD 720p',
          url: "/video-tpl-official/Video-HD-720.mp4",
        },
        {
          default: false,
          html: 'FHD 1080p',
          type: 'FHD',
          url: "/video-tpl-official/video_TPL_ciclomobilita_sostenibile_BEM.mp4",
        },
      ],
    });

    art.contextmenu.add({
      name: 'your-menu',
      html: 'Your Menu',
      click: function (...args) {
        art.contextmenu.show = false;
      },
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