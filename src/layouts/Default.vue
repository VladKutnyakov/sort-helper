<template>
  <div class="default-layout">
    <Sidebar 
      :items="items"
    />
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Sidebar from '@/components/common/Sidebar'
import Footer from '@/components/common/Footer'

export default {
  name: 'DefaultLayout',
  components: {
    Sidebar,
    Footer,
  },
  data () {
    return {
      items: [
        {
          title: 'Сортировка пузырьком',
          link: '#bubble-sort'
        },
        {
          title: 'Сортировка выбором',
          link: '#selection-sort'
        },
        {
          title: 'Сортировка вставками',
          link: '#insertion-sort'
        },
      ]
    }
  },
}
</script>

<style lang="scss">
.default-layout {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: rgb(60, 59, 86);
  background: linear-gradient(0deg, rgba(60, 59, 86, 0.3449754901960784) 5%, rgba(238, 238, 238, 1) 10%);

  .content {
    padding: 5%;
  }
}
</style>