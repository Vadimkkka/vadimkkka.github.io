<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const deadline = new Date()
if (deadline.getDay()) {
  deadline.setDate(deadline.getDate() - deadline.getDay() + 6)
}
deadline.setHours(24, 0, 0, 0)

let total = deadline.getTime() - Date.now()

const secondMs = 1000
const minuteMs = secondMs * 60
const hourMs = minuteMs * 60
const dayMs = hourMs * 24


const words = {
  ru: {
    days: ['день', 'дня', 'дней'],
    hours: ['час', 'часа', 'часов'],
    minutes: ['минута', 'минуты', 'минут'],
    seconds: ['секунда', 'секунды', 'секунд'],
  },
}

function declensionNum(num: number, words: string[]) {
  return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
}

function numToDigits(num: number) {
  return num.toString().padStart(2, '0')
}

function getTimeRemaining() {
  const days = Math.floor(total / dayMs)
  const hours = Math.floor((total / hourMs) % 24)
  const minutes = Math.floor((total / minuteMs) % 60)
  const seconds = Math.floor((total / secondMs) % 60)
  return {
    days: { digits: numToDigits(days), title: declensionNum(days, words.ru.days) },
    hours: { digits: numToDigits(hours), title: declensionNum(hours, words.ru.hours) },
    minutes: { digits: numToDigits(minutes), title: declensionNum(minutes, words.ru.minutes) },
    seconds: { digits: numToDigits(seconds), title: declensionNum(seconds, words.ru.seconds) },
  };
}

const countdown = ref(getTimeRemaining())

onMounted(() => {
  setInterval((interval: number) => {
    if (total <= secondMs) {
      deadline.setDate(deadline.getDate() + 7)
      total = deadline.getTime() - Date.now()
    }

    total -= interval
    countdown.value = getTimeRemaining()
  }, secondMs, secondMs);
})
</script>

<template>
  <div class="timer">
    <div
      v-for="(item, key) in countdown"
      :key="key"
      :data-title="item.title"
      class="timer-item"
    >
      <div
        v-for="(digit, i) in item.digits"
        :key="i"
        class="timer-item-digits"
      >
        <transition name="flip">
          <div :key="digit">{{ digit }}</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timer {
  display: flex;
  font-family: var(--vp-font-family-mono);
  font-size: 32px;
  line-height: 1;
}
.timer-item {
  display: flex;
  position: relative;
  margin-left: 8px;
  margin-right: 8px;
  padding-bottom: 12px;
  text-align: center;
}
.timer-item::before {
  content: attr(data-title);
  display: block;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  font-size: 12px;
}
.timer-item:not(:last-child)::after {
  content: ':';
  position: absolute;
  top: 0;
  right: -18px;
}
.timer-item-digits {
  position: relative;
  width: 19.3px;
}

.flip-enter-active,
.flip-leave-active {
  position: absolute;
  left: 0;
  transition: opacity 600ms ease-out, transform 600ms ease-out;
}
.flip-enter-active {
  opacity: 0;
  transform: translateY(16px) rotateX(90deg);
}
.flip-enter-to {
  opacity: 1;
  transform: translateY(0) rotateX(0);
}
.flip-leave-to {
  opacity: 0;
  transform: translateY(-16px) rotateX(90deg);
}
</style>
