<template>
  <div class="canvas">
    <div class="parent">
      <div class="child">
        <svg
          id="10015.io"
          viewBox="0 0 480 480"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <path
            fill="red"
            d="M434.5,277Q407,314,375,334.5Q343,355,317,375.5Q291,396,256.5,403.5Q222,411,193,391.5Q164,372,144.5,348Q125,324,82,303.5Q39,283,80,249Q121,215,94,164.5Q67,114,98.5,82Q130,50,178,80Q226,110,255,107.5Q284,105,308,121.5Q332,138,390,142.5Q448,147,455,193.5Q462,240,434.5,277Z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.canvas {
  min-height: 100vh;
  min-width: 100vw;
  background: lightblue;
}
.parent {
  position: relative;
  background: blue;
  height: 50rem;
}
.child {
  display: block;
  width: 25rem;
  height: 25rem;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
