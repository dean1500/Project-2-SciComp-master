Hey Dean, making this so you know what I've planned out for the project.

We will use SVG to make the field for the heron game. We will also display an animation showing all the math and work when a user claims an area using heron's area formula.

Files:
main.js - main file, wires everything together and handles clicking
state.js - handles game state info. players, dots, claimed triangles
geometry.js - distance, heron, overlap checks
render.js - drawing the state into our SVG
mathPanel.js - animation for when player claims space


below is what i had ai generate as some guidance for implementation and more. it looks nice if you use the vscode display markdown shortcut:

# Heron's Field

A two-player territory game. Place dots, pick three of your own to make a triangle, and claim its area, calculated live with Heron's formula. Most area when no legal moves are left wins.

## Running it

The JS files use `import`/`export`, so open the page through a local server, not by double-clicking `index.html`:

- VS Code: install "Live Server", right-click `index.html`, "Open with Live Server"
- Or run `python -m http.server` here and open http://localhost:8000

## Rules

Each turn, do one of these:

- **Place a dot** on an empty grid point within `maxPlaceDistance` of one of your dots. Not allowed inside claimed territory.
- **Claim an area** with three of your own dots. Not allowed if any other dot is inside it or on its edge, or if it overlaps any claim (including your own). Triangles can share corners and edges. Dots can be reused. Opponent dots can't be used. Three dots in a line are a valid claim worth 0, and they're stored like any other claim.

A player with no legal moves is skipped. The game ends when neither player can move.

## Files

| File | What goes there |
|---|---|
| `index.html` | Page layout |
| `css/style.css` | All styling |
| `js/config.js` | Grid size, max distance, player names |
| `js/geometry.js` | Pure math: distance, Heron's formula, overlap checks |
| `js/rules.js` | Is a move legal? Returns `{ ok, reason }` |
| `js/state.js` | Game data and functions that apply moves |
| `js/render.js` | Draws the field in the SVG |
| `js/mathPanel.js` | The Heron's formula animation |
| `js/main.js` | Handles clicks and turn flow; connects everything |

A move flows through the files in this order: `main.js` gets a click → `rules.js` checks it → `state.js` applies it → `render.js` redraws.

## Suggested build order

- [ ] `geometry.js`: distance, Heron, point-in-triangle (test in the browser console)
- [ ] `render.js`: grid lines and dots
- [ ] `render.js`: click → grid point
- [ ] `rules.js` + `state.js`: placing dots and switching turns
- [ ] Selecting three dots and claiming (no animation yet)
- [ ] `geometry.js`: triangle overlap check
- [ ] End-of-game detection
- [ ] `mathPanel.js`: the animation
- [ ] Polish: styling, sounds, end screen

Look for `TODO` comments in each file.