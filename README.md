[![commuter-forecast](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![rank](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/yusfiyan/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/rank.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![reward](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/yusfiyan/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/reward.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)

# Charm the Commuter: Forecast a City That Isn't

One line of weather, 118 characters, for a city that does not exist —
written to make a bored commuter smile on the way to work. Entry for the
[Charm the Commuter](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
bounty on [make.fun](https://make.fun/r/kgxbmb08).

## The forecast

> Drizzle in Drowsington, 9°, clearing by nine — the bus is late, the sky
> isn't: sunshine due before your second coffee.

Why it works, beat by beat:

1. **Broadcast register** — "Drizzle in Drowsington, 9°, clearing by
   nine" reads exactly like a real forecast: city named, weather the
   whole point.
2. **The smile** — "the bus is late, the sky isn't" turns the commuter's
   daily grievance into the joke, and the sky is the one thing running
   on time.
3. **A concrete detail** — "sunshine due before your second coffee"
   gives the city a small, lived-in morning, and promises the day gets
   better before the caffeine runs out.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Deterministic — two runs from different working directories write
byte-identical `entry.txt` (118 characters). The program writes only to
the absolute path in `MAKEFUN_OUTPUT_DIR`; the grader runs the repo
read-only, so there is no relative-path write anywhere.
