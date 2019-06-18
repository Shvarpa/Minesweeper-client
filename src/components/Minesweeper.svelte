<script>
  // import { MinesweeperGame } from "../typescript/MinesweeperGame";
  import Grid from "./Grid.svelte";
  import io from "socket.io-client";
  import socket from "../modules/client";
  import Settings from "./Settings.svelte";
  export let rows = 10;
  export let columns = 10;
  let bombs = Math.floor((rows * columns) / 3);
  let started = false;
  let grid;
  let settings = false;

  socket.on("update", data => {
      console.log("recived update: ",data);
      
      started = true;
      let newGrid = data.grid;
      grid = newGrid;
  });

  const changeGrid = event => {
    let newSettings = event.detail;
    grid = undefined;
    rows = newSettings.rows;
    columns = newSettings.columns;
    bombs = newSettings.bombs;
    started = false;
  };

  $: current = {
    rows,
    columns,
    bombs,
  } 
</script>

{#if !settings}
  <Grid
    bind:columns
    bind:rows
    bind:grid
    on:reveal={event => {
      if (!settings) {
        let { x, y } = event.detail;
        if (!started) {
          socket.emit('start', { rows, columns, bombs, start: { x, y } });
        } else {
          socket.emit('reveal', { x, y });
        }
      }
    }} />
{/if}
<Settings bind:settings bind:current {...{ columns, rows, bombs }} on:settings={changeGrid} />
