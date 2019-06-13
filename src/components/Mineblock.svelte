<script>
  import { createEventDispatcher } from "svelte";
  let dispatch = createEventDispatcher();

  export let x = 0;
  export let y = 0;
  export let cell = 1;
  export let revealed = false;

  function click() {
    if (!revealed) {
      dispatch("reveal", { x, y });
    }
  }
</script>

<button on:click>x</button>
