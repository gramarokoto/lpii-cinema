<template>
  <section>
    <hr />
    <b-pagination
      :total="total"
      v-model="current"
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
    >
    </b-pagination>
  </section>
</template>

<script>
export default {
  name: 'Pagination',
  data() {
    return {
      total: 200,
      current: 1,
      perPage: 15,
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
}
</script>
