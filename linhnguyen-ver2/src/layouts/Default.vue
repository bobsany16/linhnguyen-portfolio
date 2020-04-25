<template>
  <div class="w3-mobile layout">
    <header class="header w3-theme-d2">
      <strong>
        <g-link to="/">Linh Nguyen</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link w3-hover-text-theme" to="/">Home</g-link>
        <g-link class="nav__link w3-hover-text-theme" to="/">About</g-link>
        <g-link class="nav__link w3-hover-text-theme" to="/About">Projects</g-link>
        <g-link class="nav__link w3-hover-text-theme" to="/">Contact</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

