<template>
  <section>
    <hr />
    <b-pagination
      v-model="current"
      :total="total"
      :range-before="rangeBefore"
      :range-after="rangeAfter"
      :order="order"
      :size="size"
      :simple="isSimple"
      :rounded="isRounded"
      :per-page="perPage"
      :icon-prev="prevIcon"
      :icon-next="nextIcon"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
      :page-input="hasInput"
      :page-input-position="inputPosition"
      :debounce-page-input="inputDebounce"
      @change="handlePaginationChange($event)"
    >
    </b-pagination>
  </section>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      rangeBefore: 3,
      rangeAfter: 3,
      order: '',
      size: '',
      isSimple: false,
      isRounded: false,
      hasInput: false,
      prevIcon: 'chevron-left',
      nextIcon: 'chevron-right',
      inputPosition: '',
      inputDebounce: '',
    }
  },
  computed: {
    current: {
      get() {
        return this.currentPage
      },
      set() {
        return this.currentPage
      },
    },
  },
  methods: {
    handlePaginationChange(page) {
      this.$router.push({
        name: `${this.type}-page-page`,
        params: { page: page },
      })
    },
  },
}
</script>
