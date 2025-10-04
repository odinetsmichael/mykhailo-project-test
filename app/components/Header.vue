<script setup lang="ts">
import { MONTH_NAMES } from '~/types/variables'
const { activeUsers } = useActiveUsers()

const now = new Date()
const date = ref<string>('')
const time = ref<string>('')
const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
const dayName = days[now.getDay()]
const updateDateTime = () => {
  const day = String(now.getDate()).padStart(2, '0')
  const month = MONTH_NAMES[now.getMonth()]
  const year = now.getFullYear()
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  time.value = `${hours}:${minutes}`
  date.value = `${day} ${month}, ${year}`
}

onMounted(() => {
  updateDateTime()
  const now = new Date()
  const msUntilNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds()
  setTimeout(() => {
    updateDateTime()
    setInterval(updateDateTime, 60 * 1000)
  }, msUntilNextMinute)
})
</script>
<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <img class="logo-item" src="../assets/png/logo.png" alt="logo" />
        <span class="logo-text">inventory</span>
      </div>
      <Input />
      <div class="date">
        <div>
          <div class="date__day">{{ dayName }}</div>
          <div class="date__item">
            {{ date }}
          </div>
        </div>

        <div class="date__time">
          {{ time }}
        </div>
        <div class="active-users">👥 {{ activeUsers }}</div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  width: 100%;
  height: $column-height;
  box-shadow: 0 1.2rem 1.6rem rgba(0, 0, 0, 0.08);
  .container {
    display: flex;
    align-items: center;
    gap: 16rem;
    justify-content: space-between;
    .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      .logo-item {
        width: 6rem;
      }
      .logo-text {
        text-transform: uppercase;
        color: $base-green;
        font-weight: bold;
      }
    }
  }
  .date {
    display: flex;
    align-items: end;
    gap: 2rem;
    .date__day {
      font-size: 1.6rem;
      color: $base-black-title;
      font-weight: 500;
    }
    .date__item {
      font-size: 1.4rem;
      color: $base-black-title;
      font-weight: 500;
    }
    .date__time {
      font-size: 1.4rem;
      color: $base-black-title;
      font-weight: 500;
    }
  }
}
</style>
