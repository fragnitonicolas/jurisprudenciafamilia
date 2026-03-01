# jurisprudenciafamilia

Monorepo para construir una base documental y buscador de jurisprudencia en derecho de familia.

## Estructura

- `apps/web`: landing y futura interfaz de búsqueda.
- `packages/core`: lógica de recolección e indexado.
- `packages/cli`: comandos para pipelines y utilidades.
- `data`: datasets y salidas de procesamiento.
- `docs`: versión estática para GitHub Pages en modo **Deploy from branch**.

## Por qué veías otra web (o el README)

No estabas haciendo nada “mal”: en tu captura, GitHub Pages está en **Deploy from a branch** con `main / (root)`.
Cuando no hay `index.html` en esa carpeta publicada, GitHub renderiza el `README.md`.

## Opciones correctas para publicar

### Opción A (recomendada): GitHub Actions

1. Settings → Pages → Source: **GitHub Actions**.
2. El workflow `.github/workflows/deploy-pages.yml` construye `apps/web/dist` y publica.

### Opción B: Deploy from a branch

1. Settings → Pages → Source: **Deploy from a branch**.
2. Branch: `main`.
3. Folder: **`/docs`**.

En este repo, `docs/index.html` y `docs/styles.css` se sincronizan desde `apps/web/src`.

## Ver la web localmente

```bash
node apps/web/scripts/build.mjs
cd apps/web/dist
python3 -m http.server 4173
```

Abrir: `http://localhost:4173`

## Sincronizar `/docs` cuando cambie la landing

```bash
./scripts-sync-docs.sh
```
