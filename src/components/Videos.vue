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
                    type: 'SD',
                    html: 'SD 480P',
                    url: "./GSM/IMG_2848_MP4.mp4",
                },
                {
                    default: false,
                    html: 'HD 720P',    
                    type: 'HD',
                    url: "./GSM/IMG_2848.webm",
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