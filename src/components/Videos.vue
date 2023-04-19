<template>
    <div ref="artRef" class="relative" :aria-controls="false"></div>
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
                    html: 'SD 480P',
                    url: "./GSM/IMG_2848_MP4.mp4",
                },
                {
                    default: false,
                    html: 'HD 720P',
                    url: "./GSM/IMG_2848.webm",
                },
            ],
        });
        // this.instance = new Artplayer({
        //     ...this.option,
        //     container: this.$refs.artRef,
        //     url: "./GSM/IMG_2848_MP4.mp4",
        //     url: "./GSM/IMG_2848.webm",
        //     screenshot: true,
        //     autoSize: true,
        //     autoMini: true,
        // });
        
        art.contextmenu.add({
            name: 'your-menu',
            html: 'Your Menu',
            click: function (...args) {
                //console.info(args);
                art.contextmenu.show = false;
            },            
        });
        //console.info(art.contextmenu['your-menu']);

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