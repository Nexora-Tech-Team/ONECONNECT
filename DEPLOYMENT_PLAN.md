# OneConnect Deployment Plan

## Current Deployment Target

Repository:

`https://github.com/Nexora-Tech-Team/ONECONNECT`

VPS:

- IP: `72.61.209.201`
- OS: `Ubuntu 24.04 LTS`
- Subdomain: `oneconnect.nexoratech.co`
- Existing app root on VPS: `/root/nexora-node/apps`
- Planned app folder: `/root/nexora-node/apps/oneconnect`

Important security note:

- Do not commit GitHub passwords, VPS passwords, SSH keys, tokens, `.env` files, or production secrets.
- Use GitHub Actions secrets for SSH credentials and deploy keys.
- Prefer GitHub fine-grained personal access token or SSH key over password-based Git operations.
- Any credentials shared in chat should be rotated before production use.

## Current Application Stage

Current project is still a static HTML prototype:

- HTML
- CSS
- Vanilla JavaScript
- Static assets

This is acceptable for the first deployment. The static prototype should be deployed as a reference/prototype release before migrating to fullstack.

## Future Fullstack Direction

Planned stack:

- Frontend: Next.js
- Backend: Go / Golang
- Database: PostgreSQL
- Deployment: Docker
- Reverse proxy: existing Traefik
- CI/CD: GitHub Actions to VPS

Suggested future repo structure:

```text
ONECONNECT/
  prototype/
    oneconnect.html
    oneconnect.css
    login.html
    login.css
    login.js
    forgot-password.html
    forgot-password.js
    module-detail.html
    module-detail.css
    module-detail.js
    selfasesment_iso27001.html
    assets/
  apps/
    web/          # Future Next.js frontend
    api/          # Future Go backend
  infra/
    docker/
    traefik/
    github-actions/
  docs/
```

Alternative simple structure for the first push:

```text
ONECONNECT/
  oneconnect.html
  oneconnect.css
  login.html
  login.css
  login.js
  forgot-password.html
  forgot-password.js
  module-detail.html
  module-detail.css
  module-detail.js
  selfasesment_iso27001.html
  assets/
  PROJECT_NOTES.md
  DEPLOYMENT_PLAN.md
```

Recommended now:

- Keep the current static files at repo root for quick deployment.
- Later, move them into `prototype/` when `apps/web` and `apps/api` are introduced.

## Existing VPS Docker Context

The VPS already runs multiple Dockerized applications under:

`/root/nexora-node/apps`

Existing visible app folders include:

- `erpnext`
- `evolution-api`
- `ins`
- `iso14064`
- `iso27001`
- `kks`
- `nexa`
- `nexfinance`
- `nexflow`
- `nexone`
- `onetool`
- `portal-grc`
- `pusintek-nexone`
- `pusintek-nexone-ai`
- `smk3`
- `spbe`
- `support`
- `support-sync-login`
- `tvra`
- `tvra-prod`
- planned: `oneconnect`

Existing reverse proxy:

- `traefik:v2.11`
- Exposes ports `80` and `443`

Because Traefik is already present, OneConnect should integrate with the existing Docker network and Traefik routing instead of adding a separate public Nginx binding.

## Static Prototype Docker Deployment

For the first version, use a lightweight Nginx container serving static files.

Deployment files now included in this repository:

- `Dockerfile`
- `nginx.conf`
- `docker-compose.yml`
- `.dockerignore`
- `.github/workflows/deploy.yml`

Expected files on VPS after GitHub Actions deploy:

```text
/root/nexora-node/apps/oneconnect/
  docker-compose.yml
  Dockerfile
  nginx.conf
  oneconnect.html
  oneconnect.css
  login.html
  login.css
  login.js
  forgot-password.html
  forgot-password.js
  module-detail.html
  module-detail.css
  module-detail.js
  selfasesment_iso27001.html
  assets/
```

Current Dockerfile:

```dockerfile
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY . /usr/share/nginx/html/
```

Current Nginx config:

```nginx
server {
  listen 80;
  server_name _;

  root /usr/share/nginx/html;
  index oneconnect.html;

  location / {
    try_files $uri $uri/ /oneconnect.html;
  }
}
```

Current Docker Compose with Traefik labels:

```yaml
services:
  oneconnect:
    build:
      context: .
    container_name: oneconnect-app
    restart: unless-stopped
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.oneconnect.rule=Host(`oneconnect.nexoratech.co`)"
      - "traefik.http.routers.oneconnect.entrypoints=websecure"
      - "traefik.http.routers.oneconnect.tls=true"
      - "traefik.http.routers.oneconnect.tls.certresolver=letsencrypt"
      - "traefik.http.services.oneconnect.loadbalancer.server.port=80"
    networks:
      - traefik

networks:
  traefik:
    external: true
```

Note:

- The VPS Traefik external Docker network is `web`.
- The VPS Traefik certificate resolver used by existing apps is `myresolver`.
- If existing apps use different label names or network names, match the existing pattern.
- The GitHub Actions workflow is manual for now (`workflow_dispatch`) so it will not deploy automatically on every push until the VPS secrets and Traefik details are confirmed.

## GitHub Actions CI/CD Concept

Recommended CI/CD flow:

1. Push to `main`.
2. GitHub Actions connects to VPS over SSH.
3. Creates or updates `/root/nexora-node/apps/oneconnect`.
4. Pulls latest repo or copies release artifact.
5. Rebuilds and restarts OneConnect container.

Recommended GitHub Secrets:

- `VPS_HOST` = `72.61.209.201`
- `VPS_USER` = deploy user, preferably not `root` for production
- `VPS_SSH_KEY` = private SSH key
- `VPS_PORT` = usually `22`

Current workflow:

- `.github/workflows/deploy.yml`
- Manual trigger from GitHub Actions.
- Connects to the VPS over SSH.
- Ensures `/root/nexora-node/apps/oneconnect` exists as a Git checkout.
- Fetches `origin/main` and resets the checkout to the latest `main`.
- Runs `docker compose up -d --build` on the VPS.

Current deployment blockers to confirm:

- The GitHub Actions deploy SSH key must be accepted by the VPS.
- The VPS must be able to clone `git@github.com:Nexora-Tech-Team/ONECONNECT.git`.
- DNS for `oneconnect.nexoratech.co` must point to `72.61.209.201`.

Suggested future automatic workflow:

```yaml
name: Deploy OneConnect

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Deploy over SSH
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.VPS_HOST }}
          username: ${{ secrets.VPS_USER }}
          key: ${{ secrets.VPS_SSH_KEY }}
          port: ${{ secrets.VPS_PORT }}
          script: |
            set -e
            cd /root/nexora-node/apps/oneconnect
            git pull origin main
            docker compose up -d --build
```

For production hardening:

- Use a non-root deploy user.
- Restrict SSH key to deployment only.
- Avoid password-based SSH.
- Add health check.
- Add rollback strategy.
- Keep `.env` outside git.

## DNS Requirement

Subdomain:

`oneconnect.nexoratech.co`

DNS should point to:

`72.61.209.201`

Recommended record:

```text
Type: A
Name: oneconnect
Value: 72.61.209.201
TTL: Auto / 300
```

## Next Practical Steps

1. Confirm GitHub repo exists and local folder is initialized as a git repo.
2. Add `.gitignore`.
3. Commit current static prototype.
4. Push to `https://github.com/Nexora-Tech-Team/ONECONNECT`.
5. Inspect existing VPS Traefik compose labels and network names.
6. Add OneConnect Dockerfile, nginx config, and compose file.
7. Create GitHub Actions secrets.
8. Add deploy workflow.
9. Test deploy on `oneconnect.nexoratech.co`.
10. Later migrate static prototype into Next.js and Go/Postgres architecture.
