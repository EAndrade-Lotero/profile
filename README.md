# Edgar Andrade-Lotero — personal site

Material theme based on [MatJek](https://github.com/ShawnTeoh/matjek) (Materialize.css).

Site: https://eandrade-lotero.github.io/profile/

## Local preview

Requires **Ruby 3.3** (managed with [rbenv](https://github.com/rbenv/rbenv); see `.ruby-version`).

```bash
# Once per machine (if needed):
brew install rbenv ruby-build
rbenv install 3.3.12
rbenv global 3.3.12

# In this repo:
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000/profile/

## Customize

- Site title, user name, GitHub URL: `_config.yml`
- Sidebar photo: `assets/photos/Foto1.jpg`
- Logo: replace `assets/res/logo.png`
- Nav links: `_includes/header.html`
- Home bio: `_includes/about.html`
