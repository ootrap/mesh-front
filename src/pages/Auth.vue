<template>
     <overlay v-if="showLogin" transition="fade" :show.sync="showLogin">
    <login-form></login-form> 
  </overlay>
</template>

<script>
import overlay from '../components/Overlay.vue'
import loginForm from '../components/LoginForm.vue'
export default {
  components: {
    overlay,
    loginForm
  },
  data: function () {
    return {
      showLogin: true
    }
  }
}
</script>
