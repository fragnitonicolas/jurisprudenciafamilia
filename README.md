# jurisprudenciafamilia

Monorepo para construir una base documental y buscador de jurisprudencia en derecho de familia.

## Estructura

- `apps/web`: landing y futura interfaz de búsqueda.
- `packages/core`: lógica de recolección e indexado.
- `packages/cli`: comandos para pipelines y utilidades.
- `data`: datasets y salidas de procesamiento.
- `docs`: documentación técnica y funcional.

## Cómo ver la web localmente

```bash
node apps/web/scripts/build.mjs
cd apps/web/dist
python3 -m http.server 4173
```

Abrir: `http://localhost:4173`

## Por qué a veces se ve una web vieja en GitHub Pages

Si seguís viendo la página anterior, normalmente pasa por una de estas razones:

1. **El branch publicado no coincide** con el branch al que hiciste push.
2. **Pages está en modo "Deploy from branch"** en vez de **GitHub Actions**.
3. El último workflow todavía no terminó.

## Publicación en GitHub Pages

El workflow `.github/workflows/deploy-pages.yml` publica automáticamente cuando hay cambios en
`apps/web/**` para branches `main`, `master` o `work`.

En el repositorio, en **Settings → Pages**, elegí **GitHub Actions** como fuente.
