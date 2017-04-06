<script type="text/x-template" id="alerttempl">
  <div class="alert" :class="{'alert-success':alerttypeSuccess,'alert-info':this.alerttypeInfo,'alert-warning':this.alerttypeWarn,'alert-danger':this.alerttypeDanger}">
    <span style="font-weight:bold;">{{alerttitle}}: </span>{{alertmsg}}
  </div>
</script>
