<template>
  <div
    class="tk-blob"
    :style="`--fill: ${background}; --amount: 0.1; --time: ${animationTime}s; left: ${left}%; right: ${right}%; top: ${top}%`"
  >
    <svg
      v-if="!blobShape"
      id="10015.io"
      viewBox="0 0 480 480"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M435.5,280.5Q463,321,409,328.5Q355,336,350.5,379.5Q346,423,313.5,448Q281,473,247.5,430.5Q214,388,172,409.5Q130,431,127.5,384Q125,337,86.5,323.5Q48,310,41.5,275Q35,240,35,202.5Q35,165,67,143.5Q99,122,129.5,111.5Q160,101,185,85Q210,69,242.5,55Q275,41,298,70.5Q321,100,365,99Q409,98,427,131.5Q445,165,426.5,202.5Q408,240,435.5,280.5Z"
      />
    </svg>

    <svg
      v-if="blobShape === 1"
      id="10015.io"
      viewBox="0 0 480 480"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M434.5,277Q407,314,375,334.5Q343,355,317,375.5Q291,396,256.5,403.5Q222,411,193,391.5Q164,372,144.5,348Q125,324,82,303.5Q39,283,80,249Q121,215,94,164.5Q67,114,98.5,82Q130,50,178,80Q226,110,255,107.5Q284,105,308,121.5Q332,138,390,142.5Q448,147,455,193.5Q462,240,434.5,277Z"
      />
    </svg>

    <svg
      v-if="blobShape === 2"
      id="10015.io"
      viewBox="0 0 480 480"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M415.5,282.5Q372,325,354,387.5Q336,450,276.5,423.5Q217,397,152.5,406Q88,415,66,356.5Q44,298,56,243.5Q68,189,82.5,132Q97,75,157,78.5Q217,82,260,92Q303,102,334.5,130.5Q366,159,412.5,199.5Q459,240,415.5,282.5Z"
      />
    </svg>

    <svg
      v-if="blobShape === 3"
      id="10015.io"
      viewBox="0 0 480 480"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M413,293.5Q347,347,293.5,348Q240,349,162.5,372Q85,395,61,317.5Q37,240,77,178.5Q117,117,178.5,95.5Q240,74,319,78Q398,82,438.5,161Q479,240,413,293.5Z"
      />
    </svg>

    <svg
      v-if="blobShape === 4"
      id="10015.io"
      viewBox="0 0 480 480"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M357.5,281Q322,322,281,365Q240,408,168.5,395.5Q97,383,77.5,311.5Q58,240,92,183Q126,126,183,126.5Q240,127,306.5,117Q373,107,383,173.5Q393,240,357.5,281Z"
      />
    </svg>
  </div>
</template>

<script>
import '~/style/blobz.css';

export default {
  props: {
    background: String,
    left: Number,
    right: Number,
    top: Number,
    blobShape: Number,
    animationTime: Number,
  },
};
</script>

<style scoped>
.tk-blob {
  z-index: -1;
  display: block;
  position: absolute;
  width: 100rem;
  height: 100rem;
  transform: translate(-50%, -50%);
}
</style>
