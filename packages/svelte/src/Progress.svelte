<script>
  import '@chassis-ui/core/progress';
  export let value = 0;
  export let max = 100;
  export let variant = 'linear';
  export let indeterminate = false;
</script>

<chassis-progress {value} {max} {variant} {indeterminate}></chassis-progress>
