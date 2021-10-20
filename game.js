let n = 16;
let w = Math.floor(_c.width / n) * n;
let j = w / n;
_xs('white');
_xr(0, 0, w, w);
let s = [[3, 5]];
let a = [11, 5];
let [vx, vy] = [0, 0];

let i = setInterval(() => {
    let d = direction;

    [vx, vy] = {
        [d]: [vx, vy],
        right: [vx || 1, 0],
        left: [vx || -1, 0],
        down: [0, vy || -1],
        up: [0, vy || 1],
    }[d];

    s.unshift([s[0][0] + vx, s[0][1] - vy]);
    let h = s[0];
    if ('' + h == a) {
        while (s.some((v) => '' + v == a)) {
            a = [Math.floor(Math.random() * n), Math.floor(Math.random() * n)];
        }
    } else {
        if (s.slice(1, -1).some((v) => '' + v == h) || /16|-/.test('' + h)) {
            return clearInterval(i);
        }

        s.pop();
    }

    _xs('white');
    _xr(0, 0, w, w);
    _xs('red');
    _xr(a[0] * j, a[1] * j, j, j);
    _xs('lime');
    s.forEach(([x, y]) => _xr(x * j, y * j, j, j));
}, 250);
