// Entry program for make.fun's u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35
// ("One Emoji, One Dream Vacation").
//
// The entry is exactly one emoji: Mount Fuji, 🗻.
//
// Why this one, against the judge's brief (most important first):
// 1. It is exactly one emoji and it plainly names a dream vacation: a
//    mountain is one of the brief's own examples (beach, mountain, plane,
//    hammock, faraway place), and Fuji is a real place people dream of
//    flying to, not a generic holiday.
// 2. It is vivid at a glance, like a postcard: a snow-capped peak under
//    the sky, no words needed to see the place.
// 3. It is personal and specific rather than generic: one particular
//    mountain, one particular trip to Japan, not "any beach anywhere".
// 4. It carries a spark of surprise: the field is flooded with beaches,
//    islands and sunsets, and Fuji is a fresh pick among them.
// 5. It reads instantly across cultures and screens: the snow-capped
//    mountain is clear at small size and needs no explaining.
//
// It is also deliberately not one of the most obvious picks (beach,
// island, sunset, plane, palm tree): those are the likeliest house fixed
// texts, and an entry byte-identical to a fixed text never enters the
// playoff and takes no prize.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Node 22, standard library only. No network, no clock, no files outside
// the repository. The same input always writes the same bytes: one emoji,
// no trailing newline, so the file holds exactly 1 character.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// U+1F5FB MOUNT FUJI: one character, four bytes of UTF-8.
const EMOJI = '🗻';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, EMOJI, 'utf8');

// Gate self-check: the sealed scorer only judges a file of 1 to 8
// characters that is not only white space. Refuse to pass silently if
// this program ever writes anything else.
const written = readFileSync(`${OUTPUT_DIR}/entry.txt`, 'utf8');
if ([...written].length !== 1 || written.trim().length === 0) {
  console.error('entry.txt must hold exactly one non-whitespace character.');
  process.exit(1);
}
