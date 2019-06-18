<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let rows;
  export let columns;
  export let bombs;

  export let current = {
    rows,
    columns,
    bombs
  };

  export let settings = false;
  $: max_bombs = rows * columns;
  $: bombs = Math.min(max_bombs, bombs);

  const toggleSettings = () => {
    settings = !settings;
    if ((current.rows != rows) | (current.columns != columns) | (current.bombs != bombs)) {
      console.log("settings changed, old:", current);
      
      dispatch("settings", { rows, columns, bombs });
    }
  };
  $: max_bombs = rows * columns;
</script>

{#if settings}
  <form>
    Columns:
    <input type="number" bind:value={columns} min="1" />
    <br />
    Rows:
    <input type="number" bind:value={rows} min="1" />
    <br />
    Bombs:
    <input type="number" bind:value={bombs} min="0" />
    <br />
    <button on:click|preventDefault={toggleSettings}>done</button>
  </form>
{:else}
  <button on:click={toggleSettings}>Settings</button>
{/if}
