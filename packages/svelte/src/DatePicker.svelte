<script>
  import '@chassisui/core/date-picker';
  export let value = '';
  export let min = '';
  export let max = '';
  export let range = false;
  export let locale = 'en-US';
</script>

<chassis-date-picker {value} {min} {max} {range} {locale}>
</chassis-date-picker>
