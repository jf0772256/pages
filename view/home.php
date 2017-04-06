<?php
  include "partial/_head.php";
  require "component/jumbotron_component.php";
?>
<div id="app">
  <error v-for="value in errormgs" :error="value" class="alert alert-success"></error>
</div>

<div id="jmbTron">
  <jumbotron title="My Web Page" subtitle="Making Your Way Easy"></jumbotron>
</div>

<?php include "partial/_footer.php"; ?>
