# jurisprudenciafamilia

Monorepo para construir una base documental y buscador de jurisprudencia en derecho de familia.

## Estructura

- `apps/web`: landing y futura interfaz de búsqueda.
- `packages/core`: lógica de recolección e indexado.
- `packages/cli`: comandos para pipelines y utilidades.
- `data`: datasets y salidas de procesamiento.
- `docs`: documentación técnica y funcional.

## Cómo ver la web

El contenido público está en `apps/web/src` y **no** se publica solo por estar en el repo.

1. Construí la web estática:

   ```bash
   node apps/web/scripts/build.mjs
   ```

2. Servila localmente:

   ```bash
   cd apps/web/dist
   python3 -m http.server 4173
   ```

3. Abrí `http://localhost:4173`.

## Publicación en GitHub Pages

Se agregó el workflow `.github/workflows/deploy-pages.yml` que:

- builda `apps/web/dist`
- publica en GitHub Pages en cada push a `main`

> Importante: en el repositorio, en **Settings → Pages**, seleccioná **GitHub Actions** como fuente.
