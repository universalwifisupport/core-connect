// Stylized SVG outline with glowing network nodes and animated routes.
// Simplified vector outline suitable for a decorative coverage map.

const nodes = [
  { id: "sea", x: 130, y: 90, city: "Seattle" },
  { id: "sfo", x: 90, y: 220, city: "San Francisco" },
  { id: "lax", x: 130, y: 300, city: "Los Angeles" },
  { id: "den", x: 300, y: 220, city: "Denver" },
  { id: "dfw", x: 400, y: 340, city: "Dallas" },
  { id: "chi", x: 500, y: 190, city: "Chicago" },
  { id: "atl", x: 590, y: 320, city: "Atlanta" },
  { id: "mia", x: 650, y: 400, city: "Miami" },
  { id: "nyc", x: 720, y: 170, city: "New York" },
  { id: "bos", x: 760, y: 130, city: "Boston" },
  { id: "was", x: 700, y: 210, city: "Washington DC" },
];

const routes: [string, string][] = [
  ["sea", "sfo"], ["sfo", "lax"], ["sea", "den"], ["lax", "dfw"], ["den", "chi"],
  ["den", "dfw"], ["chi", "nyc"], ["chi", "atl"], ["dfw", "atl"], ["atl", "mia"],
  ["nyc", "bos"], ["nyc", "was"], ["was", "atl"], ["sfo", "den"], ["lax", "den"],
];

const n = (id: string) => nodes.find((x) => x.id === id)!;

export function UsMap({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 850 500" className="w-full h-auto">
        <defs>
          <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2F80FF" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#28D7FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#2F80FF" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient id="nodeGlow">
            <stop offset="0%" stopColor="#28D7FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#28D7FF" stopOpacity="0" />
          </radialGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Stylized US outline */}
        <path
          d="M60 160 Q90 100 140 90 L200 80 L260 90 L330 100 L420 95 L520 100 L620 115 L700 130 L760 145 L790 180 L780 230 L760 260 L720 280 L680 320 L640 370 L620 410 L570 430 L510 430 L440 410 L380 400 L320 380 L260 360 L200 340 L140 310 L100 270 L70 220 Z"
          fill="rgba(47,128,255,0.06)"
          stroke="rgba(47,128,255,0.35)"
          strokeWidth="1"
        />
        {/* Grid dots inside */}
        {Array.from({ length: 24 }).map((_, i) =>
          Array.from({ length: 14 }).map((__, j) => (
            <circle key={`${i}-${j}`} cx={80 + i * 30} cy={100 + j * 22} r="0.8" fill="#28D7FF" opacity="0.18" />
          ))
        )}

        {/* Routes */}
        {routes.map(([a, b], i) => {
          const A = n(a); const B = n(b);
          const mx = (A.x + B.x) / 2;
          const my = (A.y + B.y) / 2 - 30;
          return (
            <g key={i}>
              <path d={`M${A.x} ${A.y} Q${mx} ${my} ${B.x} ${B.y}`} stroke="url(#routeGrad)" strokeWidth="1.2" fill="none" opacity="0.9" />
              <path
                d={`M${A.x} ${A.y} Q${mx} ${my} ${B.x} ${B.y}`}
                stroke="#28D7FF"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="4 200"
                className="animate-dash"
                style={{ animationDelay: `${i * 0.4}s` }}
              />
            </g>
          );
        })}

        {/* Nodes */}
        {nodes.map((nd) => (
          <g key={nd.id} filter="url(#glow)">
            <circle cx={nd.x} cy={nd.y} r="14" fill="url(#nodeGlow)" opacity="0.6" />
            <circle cx={nd.x} cy={nd.y} r="4" fill="#28D7FF" className="animate-pulse-dot" />
            <circle cx={nd.x} cy={nd.y} r="2" fill="#FFFFFF" />
          </g>
        ))}
      </svg>
    </div>
  );
}
