<script setup lang="ts">
  import { ref, computed } from 'vue';
  import Card from '@/components/Card.vue';
  import { randomImagePathes } from '@/utils/imagePathes';

  type CardPair = { source: string; index: number };

  const images = ref(randomImagePathes);
  const moves = ref<number>(0);
  const matches = ref<number>(0);
  const totalPairs = computed(() => randomImagePathes.length / 2 || 0);

  let flippedImagesDiff = ref<CardPair[]>([]);

  const onCardFlipped = ({ source, index }: CardPair) => {
    flippedImagesDiff.value.push({ source, index });
    const flippedLength = flippedImagesDiff.value.length;

    const lastItemIndex = flippedLength - 1;
    const secondToLastindex = flippedLength - 2;

    if (flippedLength % 2 === 0 && flippedLength > 0) {
      setTimeout(() => {
        if (
          flippedImagesDiff.value[lastItemIndex]?.source ===
          flippedImagesDiff.value[secondToLastindex]?.source
        ) {
          console.log('THE SAME!');
          matches.value += 1;
        } else {
          console.log('DIFFERENT!');
          flippedImagesDiff.value.pop();
          flippedImagesDiff.value.pop();
        }
      }, 1000);
      moves.value += 1;
    }
  };
</script>

<template>
  <div class="container">
    <h1>Memory Games</h1>
    <div class="status-bar">
      <div class="status-bar__moves">MOVES: {{ moves }}</div>
      <div class="status-bar__matches">MATCHES {{ matches }} / {{ totalPairs }}</div>
    </div>

    <div class="game-body">
      <Card
        v-for="(image, i) in images"
        :source="image"
        :index="i"
        :is-card-flipped="flippedImagesDiff.some((crd) => crd.index === i)"
        @card-flipped="onCardFlipped"
      />
    </div>
  </div>
</template>

<style scoped>
  .status-bar {
    display: flex;
    justify-content: space-between;
  }

  .game-body {
    border: 2px solid grey;
    border-radius: 15px;

    padding: 15px 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);

    gap: 10px;
  }
</style>
