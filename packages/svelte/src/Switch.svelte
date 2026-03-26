<script>
  import '@chassisui/core/switch';
  export let checked = false;
  export let label = '';
  export let disabled = false;
  export let name = '';
  export let value = 'on';
</script>

<chassis-switch {checked} {label} {disabled} {name} {value} on:change />
