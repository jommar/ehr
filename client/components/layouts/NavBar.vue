<template>
  <v-navigation-drawer v-model="isDrawerOpen"></v-navigation-drawer>
</template>
<script>
export default {
  props: {
    modelValue: { type: Boolean, default: false },
  },
  setup(props) {
    const isDrawerOpen = ref(false)
    watch(
      () => props.modelValue,
      (val) => {
        isDrawerOpen.value = val
      },
    )

    return { isDrawerOpen }
  },
}
</script>
