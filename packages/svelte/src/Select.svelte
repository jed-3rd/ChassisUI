<script>
  import '@chassisui/core/select';
  export let value = '';
  export let placeholder = 'Select an option';
  export let label = '';
  export let error = '';
  export let required = false;
  export let disabled = false;
  export let size = 'md';
</script>

<chassis-select {value} {placeholder} {label} {error} {required} {disabled} {size}>
  <slot />
</chassis-select>
