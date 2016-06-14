<template>
<div transition="fade" class="loading-mask {{fixed ? 'fixed' : 'abs'}}">
  <div class="loading-wrapper">
      <div class="spinner"></div>
      <div class="spinner-text">{{text}}</div>
</div>
</div>
</template>
<script>
  export default {
    props: {
      text: {
        type: String,
        default: '数据处理中...'
      },
      fixed: {
        type: Boolean,
        default: true
      }
    }
  }
</script>
<style>
.loading-mask{
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9998;
  width: 100%;
  text-align: center;
  background: rgba(30,26,60,0.98);
}
.fixed {
  position: fixed;
  font-size: 1.2em;
}
.abs {
  position: absolute;
}
.loading-wrapper{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
 .spinner {
    width: 30px;
    height: 30px;
    position: relative;
    display: inline-block;
    border: 3px solid #b99b25;
    border-radius: 50%;
}
  .spinner-text {
    position: relative;
    text-align: center;
    margin-top: 0.5em;
    z-index: 2;
    color:#e0e0e0;
    width: 100%;
  }

.spinner:before, .spinner:after {
    content: "";
    position: absolute;
    display: block;
    width: 3px;
    background-color: #b99b25;
    border-radius: 1.5px;
    -webkit-transform-origin: 50% 0%;
    -ms-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
}
.spinner:before {
    height: 9px;
    left: 13.5px;
    top: 50%;
    -webkit-animation: spin 2000ms linear infinite;
    animation: spin 2000ms linear infinite;
}
.spinner:after {
    height: 12px;
    left: 13.5px;
    top: 50%;
    -webkit-animation: spin 500ms linear infinite;
    animation: spin 500ms linear infinite;
}

@-webkit-keyframes spin {
    to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@keyframes spin {
    to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
</style>