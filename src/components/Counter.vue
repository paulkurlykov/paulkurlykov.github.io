<template>
  <div>{{ count }}</div>
  <button @click="$emit('on-decrease')" v-bind="attr">Минус</button>
  <button @click="$emit('on-increase')">Плюс</button>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted, useAttrs } from 'vue';

  defineProps<{ count: number }>();

  const emit = defineEmits(['eventName']);

  const data = ref(null);

  const computedValue = computed(() => {
    return '';
  });

  onMounted(() => {
    // initialization
  });

  const methodName = () => {
    // method logic
  };

  defineExpose({
    methodName,
  });

  defineOptions({
    inheritAttrs: false,
  });

  const attr = useAttrs();
  console.log(attr.class);
</script>

<style scoped>
  .class {
  }
</style>
