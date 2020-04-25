<template>
  <div class="w3-mobile layout">
    <header class="header">
      <strong>
        <g-link to="/">identity.SN</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/">Product</g-link>
        <g-link class="nav__link" to="/About">About</g-link>
        <g-link class="nav__link" to="/">Contact</g-link>
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

