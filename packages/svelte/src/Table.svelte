<script>
  import '@chassisui/core/table';
  export let sortable = false;
  export let striped = false;
  export let stickyHeader = false;
</script>

<chassis-table {sortable} {striped} sticky-header={stickyHeader}>
  <slot />
</chassis-table>
