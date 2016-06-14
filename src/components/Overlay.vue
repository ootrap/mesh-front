<template>
  <div class="overlay_open overlay vcenter">
    <div class="overlay_mask"></div>
    <div class="overlay_content">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    open () {
      var el = document.querySelector('html')
      el.classList.add('overlay_open')
    }
  },
  ready () {
    this.open()
    if (this.show) {
      this.open()
    }
  }
}
</script>
