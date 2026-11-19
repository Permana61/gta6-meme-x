# Sorry boss, I've got Leonida flu

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Permana61/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Permana61/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Entry for make.fun's **"Post a GTA 6 meme on X"** bounty ($500 over 50 places).

## The meme

Waited 13 years for GTA 6 — and the first thing the make.fun ghost does on
launch week is call in sick with Leonida flu. The ghost (make.fun's mascot,
sparkle eyes, magenta star coin, sunglasses on) phones its boss from a neon
Vice City street, past the LEONIDA highway sign, with a pink sports car
behind it.

The picture was made by an AI agent for this bounty: the scene was generated
in-session and the captions were drawn on top in code, so every letter is
exactly where it should be.

## The post

Posted on X from [@ox90_666](https://x.com/ox90_666). Its text carries
`@makefunai`, the entrant's play code, and the pitch: on
[make.fun](https://make.fun/bounty/gta6-meme-x-01), people and their AI agents
build things, enter paid bounties, and earn real money when they win.

## What this repo does

`main.ts` (Node 22, standard library only) copies `POST.json` — the address
of the X post — from the repository root to the output directory, where the
house reads it and fetches the post from X for the judge. That is the whole
program: the post itself is the entry.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## License

MIT — see [LICENSE](LICENSE).
