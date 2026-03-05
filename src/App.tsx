import { useEffect, useRef } from 'react';

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const contactLink = contactRef.current;
    const dot = cursorRef.current;
    const ring = cursorRingRef.current;
    const canvas = canvasRef.current;

    if (!contactLink || !dot || !ring || !canvas) {
      return;
    }

    const parts = ['info', '@', 'arkridgeindustries', '.com'];
    contactLink.href = `mailto:${parts.join('')}`;

    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;

    const onMouseMove = (event: MouseEvent) => {
      mx = event.clientX;
      my = event.clientY;
    };

    let cursorAnimationId = 0;
    const tickCursor = () => {
      dot.style.left = `${mx}px`;
      dot.style.top = `${my}px`;
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      cursorAnimationId = window.requestAnimationFrame(tickCursor);
    };

    if (!isTouch) {
      document.addEventListener('mousemove', onMouseMove);
      tickCursor();
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    let width = 0;
    let height = 0;
    let centerX = 0;
    let centerY = 0;

    const colors = [
      [255, 255, 255],
      [210, 222, 230],
      [165, 185, 200],
      [110, 140, 160],
      [70, 100, 120],
    ];

    const count = isTouch ? 90 : 160;
    let points: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      op: number;
      cr: number;
      cg: number;
      cb: number;
    }> = [];

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      centerX = width / 2;
      centerY = height / 2;
    };

    const init = () => {
      points = [];
      for (let i = 0; i < count; i += 1) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        points.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 1.2 + 0.2,
          op: Math.random() * 0.45 + 0.08,
          cr: color[0],
          cg: color[1],
          cb: color[2],
        });
      }
    };

    const onResize = () => {
      resize();
      init();
    };

    resize();
    init();
    window.addEventListener('resize', onResize);

    ctx.fillStyle = '#2A3138';
    ctx.fillRect(0, 0, width, height);

    let canvasAnimationId = 0;
    const draw = () => {
      ctx.fillStyle = 'rgba(42,49,56,0.2)';
      ctx.fillRect(0, 0, width, height);

      const vignette = ctx.createRadialGradient(centerX, centerY, height * 0.1, centerX, centerY, height * 0.85);
      vignette.addColorStop(0, 'transparent');
      vignette.addColorStop(1, 'rgba(10,14,18,0.75)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      const glow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, Math.min(width, height) * 0.38);
      glow.addColorStop(0, 'rgba(255,255,255,0.018)');
      glow.addColorStop(1, 'transparent');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < count; i += 1) {
        const point = points[i];
        point.x += point.vx;
        point.y += point.vy;
        if (point.x < 0) point.x = width;
        if (point.x > width) point.x = 0;
        if (point.y < 0) point.y = height;
        if (point.y > height) point.y = 0;

        ctx.beginPath();
        ctx.arc(point.x, point.y, point.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${point.cr},${point.cg},${point.cb},${point.op})`;
        ctx.fill();
      }

      ctx.lineWidth = 0.4;
      for (let i = 0; i < count; i += 1) {
        for (let j = i + 1; j < count; j += 1) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 105) {
            ctx.strokeStyle = `rgba(185,210,225,${(1 - distance / 105) * 0.16})`;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      canvasAnimationId = window.requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.cancelAnimationFrame(cursorAnimationId);
      window.cancelAnimationFrame(canvasAnimationId);
      if (!isTouch) {
        document.removeEventListener('mousemove', onMouseMove);
      }
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={cursorRingRef} />

      <canvas id="c" ref={canvasRef} />

      <div className="title-wrap">
        <div className="title-glow" />
        <div className="company-name">Arkridge Industries</div>
        <div className="title-line" />
        <div className="tagline">Engineering Solutions For TOMORROW</div>
      </div>

      <div className="contact">
        <div className="contact-bar" />
        <a className="contact-link" ref={contactRef}>
          <span className="t1" />
          <span className="t2" />
          <span className="b1" />
          <span className="b2" />
          <span className="l1" />
          <span className="l2" />
          <span className="r1" />
          <span className="r2" />
          Contact Us
        </a>
      </div>

      <div className="copyright">
        <span className="copyright-text">© 2025 Arkridge Industries Private Limited</span>
        <div className="copyright-dot" />
        <span className="copyright-text">All Rights Reserved</span>
      </div>
    </>
  );
}

export default App;
