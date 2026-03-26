<script>
  import '@chassisui/core/input';
  export let type = 'text';
  export let value = '';
  export let placeholder = '';
  export let label = '';
  export let helperText = '';
  export let error = '';
  export let disabled = false;
  export let required = false;
  export let size = 'md';
</script>

<chassis-input
  {type}
  {value}
  {placeholder}
  {label}
  helper-text={helperText}
  {error}
  {disabled}
  {required}
  {size}
  on:input
  on:change
/>
