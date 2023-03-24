<template>
  <div class="content">
    <el-button type="primary" @click="cont++">按钮{{ cont }}</el-button>
  </div>
</template>

<script lang="ts" setup name="">
    import { ref } from 'vue'
    let cont = ref<number>(0)
</script>

<!-- <style lang="less" scoped>
.content {
}
</style> -->
