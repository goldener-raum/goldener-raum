<template>
  <div
    class="tk-blob"
    :style="`--fill: ${background}; --amount: 0.1; --time: ${animationTime}s; left: ${left}vw; top: ${top}vh; right: ${right}vh`"
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
  position: absolute;
  display: inline;
  width: 100vw;
  height: 80vh;
}

@keyframes blobber {
  0% {
    border-radius: 48% 52% 68% 32% / 42% 28% 72% 58%;
  }
  5% {
    border-radius: 48% 52% 41% 59% / 66% 37% 63% 34%;
  }
  10% {
    border-radius: 69% 31% 71% 29% / 67% 31% 69% 33%;
  }
  15% {
    border-radius: 60% 40% 71% 29% / 63% 65% 35% 37%;
  }
  20% {
    border-radius: 61% 39% 51% 49% / 57% 58% 42% 43%;
  }
  25% {
    border-radius: 66% 34% 25% 75% / 47% 30% 70% 53%;
  }
  30% {
    border-radius: 32% 68% 38% 62% / 65% 60% 40% 35%;
  }
  35% {
    border-radius: 63% 37% 41% 59% / 35% 38% 62% 65%;
  }
  40% {
    border-radius: 57% 43% 49% 51% / 55% 71% 29% 45%;
  }
  45% {
    border-radius: 47% 53% 34% 66% / 65% 36% 64% 35%;
  }
  50% {
    border-radius: 44% 56% 32% 68% / 69% 26% 74% 31%;
  }
  55% {
    border-radius: 28% 72% 37% 63% / 71% 44% 56% 29%;
  }
  60% {
    border-radius: 38% 62% 35% 65% / 74% 53% 47% 26%;
  }
  65% {
    border-radius: 73% 27% 46% 54% / 54% 47% 53% 46%;
  }
  70% {
    border-radius: 75% 25% 47% 53% / 49% 53% 47% 51%;
  }
  75% {
    border-radius: 62% 38% 43% 57% / 55% 60% 40% 45%;
  }
  80% {
    border-radius: 41% 59% 65% 35% / 73% 50% 50% 27%;
  }
  85% {
    border-radius: 55% 45% 57% 43% / 73% 61% 39% 27%;
  }
  90% {
    border-radius: 74% 26% 33% 67% / 40% 65% 35% 60%;
  }
  95% {
    border-radius: 58% 42% 57% 43% / 53% 45% 55% 47%;
  }
  100% {
    border-radius: 48% 52% 68% 32% / 42% 28% 72% 58%;
  }
}

@keyframes cobler {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 0%;
  }
}

@keyframes wobbler {
  0% {
    transform: rotateZ(8deg);
  }
  100% {
    transform: rotateZ(-8deg);
  }
}
</style>
