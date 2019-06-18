<script>
  import { createEventDispatcher } from "svelte";
  let dispatch = createEventDispatcher();

  export let x;
  export let y;
  export let number = 0;
  export let flag = false;
  export let bomb = false;
  export let revealed = false;

  function click() {
    if (!revealed) {
      dispatch("reveal", { x, y });
    }
  }
</script>

<button on:click={click}>
  {#if !revealed}x{:else if flag}f{:else if bomb}b{:else}{number}{/if}
</button>
