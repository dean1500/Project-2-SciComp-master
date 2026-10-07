// Cross product of a -> b and a -> c
// Positive means c is left of line a->b, negatiive = right, 0 = all three on one line
// will mostly be used for checks ingame
export function cross(a, b, c) {
    return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x)
}

// gets distance between two points
export function dist(a, b) {
    // implement distance formula
    return 0
}

// Heron's formula. Return values of math in between so the math animation can display those.
export function heron(A, B, C) {
    // compute a, b, c then s = (a + b + c) / 2. then area
    // need to account for three dots in a line. lets make sure rounding doesnt make anything negative because you cant square root negatives
    return { a: 0, b: 0, c: 0, s: 0, area: 0}
}

export function pointInTriangle(p, a, b, c) {
    // TODO
    return false
}