<template>
  <div>
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <!-- about hero content --> <!-- title -->
      <h1 class="font-semibold text-2xl">Informazioni sul team</h1>
    </transition>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  methods: {
    //start animation
    beforeEnter(el) {
      el.style.opacity = '0'
      el.style.transform = 'translateY(-90px)'
    },
    //end animation
    enter(el) {
      gsap.to(el, {
        duration: 1,
        y: 0,
        opacity: 1,
      })
    }
  }
}
</script>