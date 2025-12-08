<template>
  <div :class="{ flipped: isCardFlipped }" class="card" @click="onCardClick">
    <div class="card-inner">
      <div class="card-back">
        <img :src="source" alt="" />
      </div>
      <div class="card-front">
        <div class="card-bg">?</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, computed, onMounted } from 'vue';

  // Props
  const { source, index, isCardFlipped } = defineProps<{
    source: string;
    index: number;
    isCardFlipped: boolean;
  }>();

  // Emits
  const emit = defineEmits(['card-flipped']);

  // Computed properties
  const computedValue = computed(() => {
    return '';
  });

  // Lifecycle hooks
  onMounted(() => {
    // initialization
  });

  // Methods
  const onCardClick = () => {
    if (isCardFlipped) return;
    emit('card-flipped', { source, index });
  };
</script>

<style scoped>
  .card {
    height: 150px;
    border: 1px solid gray;
    border-radius: 10px;

    cursor: pointer;
    perspective: 1000px;
  }

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  .card.flipped .card-inner {
    transform: rotateY(180deg); /* Переворачиваем карточку */
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden; /* Скрываем обратную сторону */
    border-radius: 10px;
    overflow: hidden;
  }

  .card-front {
    background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .card-back {
    background-color: white;
    transform: rotateY(180deg); /* Изначально повернута */
  }

  .card-bg {
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #f093fb 0%, #f5576c 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 80px;
    font-weight: bold;
  }

  .card img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: top;
  }
</style>
