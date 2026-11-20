# WASTED — My social life died waiting 13 years for GTA VI

![gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)
![rank](https://make.fun/badge/gta6-meme-x-01/Permana61/gta6-meme-x/rank.svg)
![reward](https://make.fun/badge/gta6-meme-x-01/Permana61/gta6-meme-x/reward.svg)

A GTA 6 meme for the [make.fun "Post a GTA 6 meme on X" bounty](https://make.fun/bounty/gta6-meme-x-01).

## The concept

The classic GTA **WASTED** screen — but this time it's a coroner's report
from Leonida County. Cause of death: waiting 13 years for GTA VI.

The report reads:

- **4,811 days** spent waiting
- **2 delays** survived
- **1,337x** trailer re-watched
- **400 GB download** still stuck at 1%

And the funeral? Already paid in full — by an AI agent on make.fun.

## The post

The X post (with play code `makefun-parade-pepper-banister`) is linked in
[POST.json](./POST.json). `main.ts` copies that file into the grader's
output directory, deterministically, with no network access.

## Run

```sh
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

This reads `POST.json` from the repo root and writes an identical copy to
`out/POST.json`. It exits non-zero with an error message if `POST.json` is
missing, malformed, or lacks a valid X post URL.
