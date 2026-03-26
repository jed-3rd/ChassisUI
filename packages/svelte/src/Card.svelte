<script>
  import '@chassisui/core/card';
  export let elevated = false;
  export let outlined = false;
</script>

<chassis-card {elevated} {outlined}>
  <slot name="header" slot="header" />
  <slot />
  <slot name="footer" slot="footer" />
</chassis-card>
