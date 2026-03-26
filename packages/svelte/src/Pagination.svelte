<script>
  import '@chassisui/core/pagination';
  export let total = 1;
  export let current = 1;
  export let siblings = 1;
  export let showEdges = false;
</script>

<chassis-pagination {total} {current} {siblings} show-edges={showEdges}></chassis-pagination>
