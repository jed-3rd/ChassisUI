<script>
  import '@chassisui/core/checkbox';
  export let checked = false;
  export let indeterminate = false;
  export let label = '';
  export let disabled = false;
  export let value = '';
  export let name = '';
</script>

<chassis-checkbox {checked} {indeterminate} {label} {disabled} {value} {name} on:change />
