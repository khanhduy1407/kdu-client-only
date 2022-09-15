# kdu-no-ssr

## Install

```bash
yarn add kdu-no-ssr
```

## Usage

```kdu
<template>
  <div id="app">
    <h1>My Website</h1>
    <no-ssr>
      <!-- this component will only be rendered on client-side -->
      <comments />
    </no-ssr>
  </div>
</template>

<script>
  import NoSSR from 'kdu-no-ssr'

  export default {
    components: {
      'no-ssr': NoSSR
    }
  }
</script>
```

### Placeholder

Use a slot or text as placeholder until `<no-ssr />` is mounted on client-side.

eg, show a loading indicator.

```kdu
<template>
  <div id="app">
    <h1>My Website</h1>
    <!-- use slot -->
    <no-ssr>
      <comments />
      <comments-placeholder slot="placeholder" />
    </no-ssr>
    <!-- or use text -->
    <no-ssr placeholder="Loading...">
      <comments />
    </no-ssr>
  </div>
</template>

<script>
  import NoSSR from 'kdu-no-ssr'

  export default {
    components: {
      'no-ssr': NoSSR
    }
  }
</script>
```

By default the placeholder will be wrapped in a `div` tag, however you can use `placeholderTag` prop to customize it:

```kdu
<no-ssr placeholder="loading" placeholader-tag="span">
  <comments />
</no-ssr>
```

And you get:

```html
<span class="no-ssr-placeholder">
  loading
</span>
```

If prop `placeholder` is an empty string (or `null`) and no `placeholder`
slot is found, then `<no-ssr>` will render the Kdu placeholder element `<!---->`
instead of rendering the `placholder-tag` during SSR render.

## Development

```bash
yarn install

# Run example
yarn example
```
