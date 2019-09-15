<template>
  <div>
  <b-navbar toggleable="lg" variant="info" class="darknav">
    <b-navbar-brand to="/"><img src="@/assets/navlogo.png" alt=""></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/downloads">Descargas</b-nav-item>
        <b-nav-item href="/tuto">Guía</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <template v-slot:button-content>
            Discord
          </template>
          <b-dropdown-item href="https://discord.gg/H6RnBya" target="_blank">Ingresar</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
        
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {

}
</script>

<style>
.darknav {
background-color: #212121 !important;
}
.nav-link {
  color: white !important;
}
.navbar-light .navbar-brand{
  color:white;
}
.navbar-light .navbar-brand:hover{
  color:white;
}
.navbar-light .navbar-nav .nav-link {
  color: white;
}
</style>