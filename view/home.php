<?php
  include "partial/_head.php";
  include "component/jumbotron.component.php";
  include "component/alert.component.php";
?>
<div id="app">
  <error v-for="value in errormgs" :error="value" class="alert alert-success"></error>
  <jumbotron title="My Web Page" subtitle="Making Your Way Easy"></jumbotron>
  <alert alerttitle="Hello World!" alertmsg="Oh how I love this!" alerttype="success"></alert>
</div>


<?php include "partial/_footer.php"; ?>
