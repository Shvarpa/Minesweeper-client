<script>
  import { MinesweeperGame } from "../typescript/MinesweeperGame";
  import Mineblock from "./Mineblock.svelte";
  export let rows = 5;
  export let columns = 5;
  let bombs = Math.floor((rows * colums) / 3);

  $: gridStyle = () => {
    return `
            display: grid;
            grid-template-columns:repeat(${columns},35px);
            grid-template-rows: repeat(${rows},35px);
            grid-row-gap: 0px;
        `;
  };

  let game = new MinesweeperGame(rows, columns);
  // console.log(game.generateBombs(10));
</script>

<style>

</style>

<div style={gridStyle()}>
  {#each [...Array(columns).keys()] as x (x)}
    {#each [...Array(rows).keys()] as y (y)}
      <Mineblock {...{ x, y }} />
    {/each}
  {/each}
</div>
