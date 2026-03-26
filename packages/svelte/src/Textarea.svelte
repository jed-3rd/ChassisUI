<script>
  import '@chassisui/core/textarea';
  export let label = '';
  export let placeholder = '';
  export let value = '';
  export let rows = 3;
  export let maxlength = 0;
  export let resize = 'vertical';
  export let error = '';
  export let helperText = '';
  export let disabled = false;
  export let required = false;
</script>

<chassis-textarea
  {label}
  {placeholder}
  {value}
  {rows}
  {maxlength}
  {resize}
  {error}
  helper-text={helperText}
  {disabled}
  {required}
></chassis-textarea>
