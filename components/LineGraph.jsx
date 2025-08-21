import { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler, Legend);

/* ---------- Colors ---------- */
const PURPLE = "rgba(142, 97, 255, 1)";
const PURPLE_DIM = "rgba(142, 97, 255, .35)";
const YELLOW = "rgba(255, 204, 0, 1)";
const GRID = "rgba(255,255,255,.06)";
const TICK = "rgba(255,255,255,.55)";

/* ---------- Helpers ---------- */
const fmtMoney = (n) => `$${n.toLocaleString("en-US", { maximumFractionDigits: 0 })}.00`;

/* ---------- External HTML tooltip (uses CSS class) ---------- */
function externalTooltip(context) {
  const { chart, tooltip } = context;

  // Create once
  let el = document.getElementById("glass-tip");
  if (!el) {
    el = document.createElement("div");
    el.id = "glass-tip";
    el.className = "chartjs-glass-tooltip";
    document.body.appendChild(el);
  }

  // Hide
  if (tooltip.opacity === 0) {
    el.style.opacity = 0;
    return;
  }

  // Content
  if (tooltip.body) {
    const title = tooltip.title?.[0] ?? "";
    const lines = tooltip.dataPoints
      .map((dp) => {
        const color = dp.dataset.borderColor;
        const label = dp.dataset.label;
        const value = fmtMoney(dp.raw);
        return `
          <div class="tip-row">
            <span class="tip-bar" style="background:${color}"></span>
            <span class="tip-label" style="font-family: helvetica;">${label}</span>
            <span class="tip-value" style="font-family: helvetica;">${value}</span>
          </div>`;
      })
      .join("");

    el.innerHTML = `<div class="tip-title">${title}</div>${lines}`;
  }

  // Position
  const { offsetLeft: x, offsetTop: y } = chart.canvas;
  const left = x + tooltip.caretX - el.clientWidth / 2;
  const top = y + tooltip.caretY - el.clientHeight - 14;
  el.style.opacity = 1;
  el.style.left = Math.max(left, 8) + "px";
  el.style.top = Math.max(top, 8) + "px";
}

/* ---------- Crosshair + split-line plugin ---------- */
const crosshairPlugin = {
  id: "crosshairPlugin",
  afterDraw(chart, _args, opts = {}) {
    const { ctx, tooltip, chartArea, scales } = chart;
    const xScale = scales.x;

    // Fixed dotted split line (e.g., estimation boundary)
    if (typeof opts.splitIndex === "number") {
      const x = xScale.getPixelForValue(opts.splitIndex);
      ctx.save();
      ctx.setLineDash([6, 6]);
      ctx.strokeStyle = "rgba(255,255,255,.35)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, chartArea.top);
      ctx.lineTo(x, chartArea.bottom);
      ctx.stroke();
      ctx.restore();
    }

    // Hover crosshair (dotted)
    const active = chart.tooltip?.dataPoints?.[0];
    if (active) {
      const x = xScale.getPixelForValue(active.dataIndex);
      ctx.save();
      ctx.setLineDash([5, 6]);
      ctx.strokeStyle = "rgba(255,255,255,.45)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, chartArea.top);
      ctx.lineTo(x, chartArea.bottom);
      ctx.stroke();
      ctx.restore();
    }
  },
};

ChartJS.register(crosshairPlugin);

export default function DashboardLine() {
  const labels = ["Q1", "", "Q2", "", "Q3", "", "Q4", ""]; // like your shot
  // millions to match Y tick style

    const purple = [10, 18, 14, 27, 22, 31, 50, 46].map(n => n * 1_000_000); // 46M peak
    const yellow = [15, 23, 34, 29, 33, 31, 32, 37].map(n => n * 1_000_000); // stays < 40M

  const data = useMemo(() => {
    const gradientFill = (ctx) => {
      const chart = ctx.chart;
      const { ctx: g, chartArea } = chart;
      if (!chartArea) return PURPLE_DIM;
      const grad = g.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
      grad.addColorStop(0, "rgba(142, 97, 255, .35)");
      grad.addColorStop(1, "rgba(142, 97, 255, 0)");
      return grad;
    };

    return {
      labels,
      datasets: [
        {
          label: "Gross",
          data: purple,
          borderColor: PURPLE,
          backgroundColor: gradientFill,
          fill: true,
          tension: 0.35,
          pointRadius: 0,
          pointHoverRadius: 4,
        },
        {
          label: "Net",
          data: yellow,
          borderColor: YELLOW,
          backgroundColor: "transparent",
          fill: false,
          tension: 0.35,
          pointRadius: 0,
          pointHoverRadius: 4,
        },
      ],
    };
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: "index", intersect: false },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false, external: externalTooltip },
      crosshairPlugin: { splitIndex: 4 }, // draws the fixed dotted boundary after mid-Q3
    },
    layout: { padding: { left: 8, right: 8, top: 8, bottom: 0 } },
    scales: {
      x: {
        ticks: { color: TICK, font: { size: 11, weight: "500" }, maxRotation: 0 },
      },
      y: {
        suggestedMin: 0,
        suggestedMax: 60_000_000,  // headroom so 46M doesn’t hug the top
        grid: { color: GRID, drawBorder: false },
        ticks: {
            color: TICK,
            callback: v => `${Number(v)/1_000_000}M`,
        },
        },
    },
    elements: { line: { borderWidth: 2 }, point: { hoverBorderWidth: 2, hoverBorderColor: "#111" } },
  };

  return (
    <div className="chart-card">
      <Line data={data} options={options} />
    </div>
  );
}
