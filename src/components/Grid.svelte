<script>
  import Mineblock from "./Mineblock.svelte";

  export let columns;
  export let rows;
  export let grid;

  $: gridStyle = () => {
    return `
            display: grid;
            grid-template-columns:repeat(${columns},35px);
            grid-template-rows: repeat(${rows},35px);
            grid-row-gap: 0px;
        `;
  };
</script>

{#if typeof grid == 'undefined'}
  <div style={gridStyle()}>
    {#each [...Array(rows).keys()] as y (y)}
      {#each [...Array(columns).keys()] as x (x)}
        <Mineblock {...{ x, y }} on:reveal />
      {/each}
    {/each}
  </div>
{:else}
  <div style={gridStyle()}>
    {#each grid as row (row)}
      {#each row as cell (cell)}
        <Mineblock {...cell} on:reveal />
      {/each}
    {/each}
  </div>
{/if}
