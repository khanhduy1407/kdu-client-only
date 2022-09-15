# kdu-client-only

## Install

```bash
yarn add kdu-client-only
```

## Usage

```kdu
<template>
  <div id="app">
    <h1>My Website</h1>
    <client-only>
      <!-- this component will only be rendered on client-side -->
      <comments />
    </client-only>
  </div>
</template>

<script>
  import ClientOnly from 'kdu-client-only'

  export default {
    components: {
      ClientOnly
    }
  }
</script>
```

### Placeholder

Use a slot or text as placeholder until `<client-only />` is mounted on client-side.

eg, show a loading indicator.

```kdu
<template>
  <div id="app">
    <h1>My Website</h1>
    <!-- use slot -->
    <client-only>
      <comments />
      <comments-placeholder slot="placeholder" />
    </client-only>
    <!-- or use text -->
    <client-only placeholder="Loading...">
      <comments />
    </client-only>
  </div>
</template>

<script>
  import ClientOnly from 'kdu-client-only'

  export default {
    components: {
      ClientOnly
    }
  }
</script>
```

By default the placeholder will be wrapped in a `div` tag, however you can use `placeholderTag` prop to customize it:

```kdu
<client-only placeholder="loading" placeholder-tag="span">
  <comments />
</client-only>
```

And you get:

```html
<span class="client-only-placeholder">
  loading
</span>
```

If prop `placeholder` is an empty string (or `null`) and no `placeholder`
slot is found, then `<client-only>` will render the Kdu placeholder element `<!---->`
instead of rendering the `placholder-tag` during SSR render.

## Development

```bash
yarn install

# Run example
yarn example
```
