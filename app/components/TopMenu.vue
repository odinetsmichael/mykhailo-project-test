<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useActiveUsers } from '~/composables/useActiveUsers'
const { t, locale } = useI18n()

const { activeUsers } = useActiveUsers()

const date = ref('')
const time = ref('')
const dayName = ref('')

const updateDateTime = () => {
  const now = new Date()

  const dayIndex = now.getDay()
  dayName.value = t(`components.days.${dayIndex}`)
  const day = String(now.getDate()).padStart(2, '0')
  const monthIndex = now.getMonth()
  const month = t(`components.months.${monthIndex}`)
  const year = now.getFullYear()

  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')

  date.value = `${day} ${month}, ${year}`
  time.value = `${hours}:${minutes}`
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
watch(locale, () => {
  updateDateTime()
})
</script>

<template>
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
</template>

<style lang="scss" scoped>
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
</style>
