<template>
     <overlay>
    <login-form></login-form> 
  </overlay>
</template>

<script>
import overlay from '../components/Overlay.vue'
import loginForm from '../components/SignInForm.vue'
export default {
  components: {
    overlay,
    loginForm
  }
}
</script>
