"use client";

import { useEffect, useRef } from "react";

type Pt = [number, number];

type Palette = {
  weight: number;
  core: string;
  mid: string;
  edge: string;
  blotches: string[];
  vein: string;
  stem: string;
};

type Sprite = {
  front: HTMLCanvasElement;
  back: HTMLCanvasElement;
  shadow: HTMLCanvasElement;
};

type Leaf = {
  sprite: number;
  z: number;
  px: number;
  py: number;
  radius: number;
  swing: number;
  omega: number;
  phase: number;
  rot: number;
  spin: number;
  flip: number;
  flipRate: number;
  boost: number;
  vx: number;
  vy: number;
};

const PALETTES: Palette[] = [
  {
    weight: 3,
    core: "#ffb23e",
    mid: "#f47a1f",
    edge: "#b8331a",
    blotches: ["#ffd25e", "#e85a1c", "#c9361a", "#ff9a2e"],
    vein: "rgba(150,48,18,0.55)",
    stem: "#a8382a",
  },
  {
    weight: 3,
    core: "#f2622c",
    mid: "#d43a1d",
    edge: "#82160e",
    blotches: ["#f78a2e", "#b5231a", "#ffb04a", "#9c1a12"],
    vein: "rgba(100,16,10,0.55)",
    stem: "#8e2318",
  },
  {
    weight: 2.5,
    core: "#ffe07a",
    mid: "#f8b12c",
    edge: "#e2701d",
    blotches: ["#fff1a8", "#f3a325", "#ec7f20", "#ffc93f"],
    vein: "rgba(196,92,30,0.5)",
    stem: "#c0532e",
  },
  {
    weight: 1.2,
    core: "#84c23c",
    mid: "#c9c43a",
    edge: "#ee8b24",
    blotches: ["#4e9b30", "#a7cf45", "#f2a72c", "#6fb236"],
    vein: "rgba(72,104,28,0.5)",
    stem: "#a64a2a",
  },
  {
    weight: 1.6,
    core: "#cf3420",
    mid: "#a61e15",
    edge: "#560e0a",
    blotches: ["#e64b2a", "#7a130d", "#dc5a22", "#8c1c13"],
    vein: "rgba(60,8,6,0.6)",
    stem: "#6e1a12",
  },
];

const SPRITE = 192;
const UNIT = SPRITE * 0.38;
const ORIGIN: Pt = [SPRITE / 2, SPRITE * 0.6];
const SPRITE_COUNT = 10;

// One side of a maple lobe from its base to its tip: [along midrib, out from midrib].
const EDGE: Pt[] = [
  [0.4, 0.2],
  [0.53, 0.3],
  [0.58, 0.2],
  [0.69, 0.21],
  [0.77, 0.27],
  [0.81, 0.15],
  [0.88, 0.13],
  [0.93, 0.18],
  [0.96, 0.07],
];
const TEETH = [1, 4, 7];

const LOBES = [
  { a: 146, len: 0.62 },
  { a: 207, len: 0.92 },
  { a: 270, len: 1 },
  { a: 333, len: 0.92 },
  { a: 394, len: 0.62 },
];

const rand = (min: number, max: number) => min + Math.random() * (max - min);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

function rgba(hex: string, alpha: number) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${alpha})`;
}

function px([x, y]: Pt): Pt {
  return [ORIGIN[0] + x * UNIT, ORIGIN[1] + y * UNIT];
}

function pickPalette() {
  const total = PALETTES.reduce((sum, p) => sum + p.weight, 0);
  let roll = Math.random() * total;
  for (const p of PALETTES) {
    roll -= p.weight;
    if (roll <= 0) return p;
  }
  return PALETTES[0];
}

function buildGeometry() {
  const lobes = LOBES.map((l) => ({
    a: ((l.a + rand(-3, 3)) * Math.PI) / 180,
    len: l.len * rand(0.94, 1.06),
  }));

  const local = (lobe: (typeof lobes)[number], x: number, y: number): Pt => {
    const dx = Math.cos(lobe.a);
    const dy = Math.sin(lobe.a);
    return [(dx * x - dy * y) * lobe.len, (dy * x + dx * y) * lobe.len];
  };

  const sinus = (i: number, j: number, r: number): Pt => {
    const a = (lobes[i].a + lobes[j].a) / 2;
    return [Math.cos(a) * r, Math.sin(a) * r];
  };

  const path = new Path2D();
  const veins: { from: Pt; ctrl: Pt; to: Pt; main: boolean }[] = [];
  let first: Pt = [0, 0];

  lobes.forEach((lobe, i) => {
    const jitter = () => rand(-0.012, 0.012);
    const sideA = EDGE.map(([x, y]) => local(lobe, x + jitter(), -(y + jitter())));
    const sideB = [...EDGE].reverse().map(([x, y]) => local(lobe, x + jitter(), y + jitter()));
    const tip = local(lobe, 1, 0);
    const points = [...sideA, tip, ...sideB];

    if (i === 0) {
      first = points[0];
      path.moveTo(...px(first));
    } else {
      const r = i === 2 || i === 3 ? 0.26 : 0.22;
      path.quadraticCurveTo(...px(sinus(i - 1, i, r)), ...px(points[0]));
    }
    for (let k = i === 0 ? 1 : 0; k < points.length; k++) path.lineTo(...px(points[k]));

    const bend = rand(-0.04, 0.04);
    veins.push({ from: [0, 0], ctrl: local(lobe, 0.5, bend), to: local(lobe, 0.97, 0), main: true });
    for (const t of TEETH) {
      const [x, y] = EDGE[t];
      for (const side of [-1, 1]) {
        veins.push({
          from: local(lobe, x * 0.7, 0),
          ctrl: local(lobe, x * 0.86, side * y * 0.45),
          to: local(lobe, x - 0.01, side * (y - 0.02)),
          main: false,
        });
      }
    }
  });

  path.quadraticCurveTo(...px([0, 0.05]), ...px(first));
  path.closePath();

  return { path, veins };
}

function canvas() {
  const c = document.createElement("canvas");
  c.width = SPRITE;
  c.height = SPRITE;
  return c;
}

function strokeVeins(
  ctx: CanvasRenderingContext2D,
  veins: ReturnType<typeof buildGeometry>["veins"],
  color: string,
  scale = 1,
  offset: Pt = [0, 0],
) {
  ctx.strokeStyle = color;
  ctx.lineCap = "round";
  for (const v of veins) {
    const [fx, fy] = px(v.from);
    const [cx, cy] = px(v.ctrl);
    const [tx, ty] = px(v.to);
    ctx.lineWidth = (v.main ? UNIT * 0.026 : UNIT * 0.012) * scale;
    ctx.beginPath();
    ctx.moveTo(fx + offset[0], fy + offset[1]);
    ctx.quadraticCurveTo(cx + offset[0], cy + offset[1], tx + offset[0], ty + offset[1]);
    ctx.stroke();
  }
}

function buildSprite(): Sprite {
  const palette = pickPalette();
  const { path, veins } = buildGeometry();

  const front = canvas();
  const ctx = front.getContext("2d")!;
  ctx.save();
  ctx.clip(path);

  const base = ctx.createRadialGradient(
    ORIGIN[0],
    ORIGIN[1],
    0,
    ORIGIN[0],
    ORIGIN[1] - UNIT * 0.2,
    UNIT * 1.05,
  );
  base.addColorStop(0, palette.core);
  base.addColorStop(0.5, palette.mid);
  base.addColorStop(1, palette.edge);
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, SPRITE, SPRITE);

  for (let i = 0; i < 7; i++) {
    const a = rand(0, Math.PI * 2);
    const d = rand(0.15, 0.85) * UNIT;
    const x = ORIGIN[0] + Math.cos(a) * d;
    const y = ORIGIN[1] - UNIT * 0.2 + Math.sin(a) * d;
    const r = rand(0.18, 0.5) * UNIT;
    const color = palette.blotches[Math.floor(Math.random() * palette.blotches.length)];
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, rgba(color, rand(0.35, 0.6)));
    g.addColorStop(1, rgba(color, 0));
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, SPRITE, SPRITE);
  }

  ctx.lineJoin = "round";
  ctx.strokeStyle = rgba(palette.edge, 0.2);
  ctx.lineWidth = UNIT * 0.3;
  ctx.stroke(path);
  ctx.strokeStyle = rgba(palette.edge, 0.5);
  ctx.lineWidth = UNIT * 0.1;
  ctx.stroke(path);

  for (let i = 0; i < 1400; i++) {
    const light = Math.random() < 0.5;
    ctx.fillStyle = light ? `rgba(255,246,220,${rand(0.03, 0.09)})` : `rgba(60,18,8,${rand(0.03, 0.08)})`;
    const s = rand(0.6, 1.8);
    ctx.fillRect(rand(0, SPRITE), rand(0, SPRITE), s, s);
  }

  strokeVeins(ctx, veins, "rgba(255,236,196,0.22)", 1, [-0.7, -0.7]);
  strokeVeins(ctx, veins, palette.vein);

  const light = ctx.createLinearGradient(0, 0, SPRITE, SPRITE);
  light.addColorStop(0, "rgba(255,248,228,0.24)");
  light.addColorStop(0.5, "rgba(255,248,228,0)");
  light.addColorStop(1, "rgba(40,10,4,0.22)");
  ctx.fillStyle = light;
  ctx.fillRect(0, 0, SPRITE, SPRITE);
  ctx.restore();

  ctx.strokeStyle = rgba(palette.edge, 0.7);
  ctx.lineWidth = 1;
  ctx.stroke(path);

  const [sx, sy] = px([0, 0.02]);
  const [scx, scy] = px([rand(0.02, 0.08), 0.32]);
  const [sex, sey] = px([rand(-0.06, 0.02), 0.62]);
  ctx.lineCap = "round";
  ctx.strokeStyle = palette.stem;
  ctx.lineWidth = UNIT * 0.04;
  ctx.beginPath();
  ctx.moveTo(sx, sy);
  ctx.quadraticCurveTo(scx, scy, sex, sey);
  ctx.stroke();
  ctx.strokeStyle = "rgba(255,220,190,0.3)";
  ctx.lineWidth = UNIT * 0.012;
  ctx.beginPath();
  ctx.moveTo(sx - 1, sy);
  ctx.quadraticCurveTo(scx - 1, scy, sex - 1, sey);
  ctx.stroke();

  const back = canvas();
  const bctx = back.getContext("2d")!;
  bctx.drawImage(front, 0, 0);
  bctx.globalCompositeOperation = "source-atop";
  bctx.fillStyle = "rgba(246,226,196,0.38)";
  bctx.fillRect(0, 0, SPRITE, SPRITE);
  bctx.globalCompositeOperation = "source-over";
  bctx.save();
  bctx.clip(path);
  strokeVeins(bctx, veins, "rgba(255,244,222,0.5)", 1.25);
  bctx.restore();

  const shadow = canvas();
  const shctx = shadow.getContext("2d")!;
  shctx.shadowColor = "rgba(42,31,28,1)";
  shctx.shadowBlur = UNIT * 0.18;
  shctx.shadowOffsetX = SPRITE * 2;
  shctx.translate(-SPRITE * 2, 0);
  shctx.fillStyle = "#000";
  shctx.fill(path);

  return { front, back, shadow };
}

function resetLeaf(leaf: Leaf, width: number, height: number, wind: number, initial: boolean) {
  leaf.px = rand(-80, width + 80) - wind * 2;
  leaf.py = initial ? rand(-height * 0.3, height) : -rand(60, 200);
  leaf.radius = rand(30, 80);
  leaf.swing = rand(0.5, 1);
  leaf.omega = rand(1.1, 2);
  leaf.phase = rand(0, Math.PI * 2);
  leaf.rot = rand(0, Math.PI * 2);
  leaf.spin = Math.random() < 0.2 ? rand(-2.2, 2.2) : rand(-0.4, 0.4);
  leaf.flip = rand(0, Math.PI * 2);
  leaf.flipRate = rand(0.5, 1.8);
  leaf.boost = 0;
  leaf.vx = 0;
  leaf.vy = 0;
}

function makeLeaf(width: number, height: number): Leaf {
  const leaf = {
    sprite: Math.floor(Math.random() * SPRITE_COUNT),
    z: Math.pow(Math.random(), 0.8) * 0.55 + 0.45,
  } as Leaf;
  resetLeaf(leaf, width, height, 0, true);
  return leaf;
}

export function AutumnLeaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const el = canvasRef.current;
    const ctx = el?.getContext("2d");
    if (!el || !ctx) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sprites: Sprite[] = [];
    const leaves: Leaf[] = [];
    const pointer = { x: -9999, y: -9999, vx: 0, vy: 0, t: 0 };
    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;
    let last = 0;
    let lastScroll = window.scrollY;
    let wind = 0;
    let gust = { start: 0, duration: 0, strength: 0, next: performance.now() / 1000 + rand(4, 9) };

    const ensureSprites = () => {
      while (sprites.length < SPRITE_COUNT) sprites.push(buildSprite());
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      el.width = Math.round(width * dpr);
      el.height = Math.round(height * dpr);
      const count = width < 640 ? 6 : Math.max(8, Math.min(14, Math.round(width / 115)));
      while (leaves.length < count) leaves.push(makeLeaf(width, height));
      leaves.length = count;
      leaves.sort((a, b) => a.z - b.z);
    };

    const windAt = (t: number) => {
      const base = 12 * Math.sin(t * 0.11) + 7 * Math.sin(t * 0.29 + 2);
      if (t > gust.next && gust.duration === 0) {
        gust = {
          start: t,
          duration: rand(2.5, 4.5),
          strength: (Math.sign(base) || 1) * rand(45, 95),
          next: 0,
        };
      }
      let level = 0;
      if (gust.duration > 0) {
        const p = (t - gust.start) / gust.duration;
        if (p >= 1) {
          gust = { start: 0, duration: 0, strength: 0, next: t + rand(7, 15) };
        } else {
          level = Math.pow(Math.sin(Math.PI * p), 2);
        }
      }
      return { wind: base + gust.strength * level, level };
    };

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const t = now / 1000;
      const w = windAt(t);
      wind = w.wind;
      const decay = Math.exp(-2.4 * dt);
      pointer.vx *= Math.exp(-7 * dt);
      pointer.vy *= Math.exp(-7 * dt);
      const pointerSpeed = Math.hypot(pointer.vx, pointer.vy);

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, el.width, el.height);

      for (const leaf of leaves) {
        const z = leaf.z;
        leaf.phase += leaf.omega * (1 + w.level * 0.7) * dt;
        leaf.py += (lerp(24, 56, z) + leaf.vy) * dt;
        leaf.px += (wind * (0.45 + z * 0.75) + leaf.vx) * dt;
        leaf.vx *= decay;
        leaf.vy *= decay;
        leaf.boost *= decay;

        const theta = leaf.swing * Math.sin(leaf.phase);
        const x = leaf.px + leaf.radius * Math.sin(theta);
        const y = leaf.py - leaf.radius * (1 - Math.cos(theta));

        if (pointerSpeed > 20) {
          const reach = 130 * z;
          const d = Math.hypot(x - pointer.x, y - pointer.y);
          if (d < reach) {
            const f = Math.pow(1 - d / reach, 2);
            leaf.vx += pointer.vx * f * 3.2 * dt;
            leaf.vy += pointer.vy * f * 3.2 * dt;
            leaf.boost += pointerSpeed * f * 0.02 * dt;
          }
        }

        if (y > height + 80 || x < -160 || x > width + 160 || y < -height) {
          resetLeaf(leaf, width, height, wind, false);
          continue;
        }

        leaf.rot += leaf.spin * dt;
        leaf.flip += (leaf.flipRate * (1 + w.level * 1.6) + leaf.boost) * dt;

        const size = lerp(30, 62, z);
        const cos = Math.cos(leaf.flip);
        const sx = Math.sign(cos || 1) * Math.max(0.08, Math.abs(cos));
        const sy = 0.82 + 0.18 * Math.cos(leaf.flip * 0.6 + leaf.phase);
        const angle = leaf.rot + theta * 0.9;
        const c = Math.cos(angle);
        const s = Math.sin(angle);
        const sprite = sprites[leaf.sprite];

        const lift = 3 + z * 5;
        ctx.globalAlpha = 0.07 + z * 0.08;
        ctx.setTransform(c * sx * dpr, s * sx * dpr, -s * sy * dpr, c * sy * dpr, (x + lift * 0.6) * dpr, (y + lift) * dpr);
        ctx.drawImage(sprite.shadow, -size / 2, -size / 2, size, size);

        ctx.globalAlpha = lerp(0.62, 0.96, z) * (0.78 + 0.22 * Math.abs(cos));
        ctx.setTransform(c * sx * dpr, s * sx * dpr, -s * sy * dpr, c * sy * dpr, x * dpr, y * dpr);
        ctx.drawImage(cos >= 0 ? sprite.front : sprite.back, -size / 2, -size / 2, size, size);
      }

      ctx.globalAlpha = 1;
      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (frame || motion.matches || document.hidden) return;
      ensureSprites();
      last = performance.now();
      frame = requestAnimationFrame(tick);
    };

    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const sync = () => {
      if (motion.matches) {
        stop();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, el.width, el.height);
      } else if (document.hidden) {
        stop();
      } else {
        start();
      }
    };

    const onPointer = (e: PointerEvent) => {
      const now = performance.now();
      const dt = Math.max(8, now - pointer.t) / 1000;
      if (pointer.t && now - pointer.t < 120) {
        pointer.vx = lerp(pointer.vx, (e.clientX - pointer.x) / dt, 0.5);
        pointer.vy = lerp(pointer.vy, (e.clientY - pointer.y) / dt, 0.5);
      }
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.t = now;
    };

    const onScroll = () => {
      const delta = Math.max(-240, Math.min(240, window.scrollY - lastScroll));
      lastScroll = window.scrollY;
      for (const leaf of leaves) leaf.py -= delta * 0.22 * leaf.z;
    };

    resize();
    start();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", sync);
    motion.addEventListener("change", sync);

    return () => {
      stop();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", sync);
      motion.removeEventListener("change", sync);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 size-full"
    />
  );
}
