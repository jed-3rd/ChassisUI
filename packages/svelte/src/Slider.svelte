<script>
  import '@chassis-ui/core/slider';
  export let min = 0;
  export let max = 100;
  export let step = 1;
  export let value = '0';
  export let dual = false;
  export let valueEnd = 100;
  export let disabled = false;
</script>

<chassis-slider {min} {max} {step} {value} {dual} value-end={valueEnd} {disabled}>
</chassis-slider>
