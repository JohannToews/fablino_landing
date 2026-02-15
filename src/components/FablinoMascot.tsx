interface FablinoMascotProps {
  size?: number;
  className?: string;
}

const FablinoMascot = ({ size = 120, className = "" }: FablinoMascotProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Left ear */}
    <path d="M60 85 L45 30 L85 70 Z" fill="#F97316" />
    <path d="M62 80 L52 42 L80 72 Z" fill="#FDBA74" />
    {/* Right ear */}
    <path d="M140 85 L155 30 L115 70 Z" fill="#F97316" />
    <path d="M138 80 L148 42 L120 72 Z" fill="#FDBA74" />
    {/* Head */}
    <ellipse cx="100" cy="105" rx="55" ry="50" fill="#F97316" />
    {/* Face (lighter) */}
    <ellipse cx="100" cy="115" rx="38" ry="35" fill="#FDBA74" />
    {/* Left eye */}
    <ellipse cx="82" cy="100" rx="8" ry="9" fill="white" />
    <ellipse cx="84" cy="100" rx="5" ry="6" fill="#1A1A2E" />
    <ellipse cx="86" cy="98" rx="2" ry="2" fill="white" />
    {/* Right eye */}
    <ellipse cx="118" cy="100" rx="8" ry="9" fill="white" />
    <ellipse cx="120" cy="100" rx="5" ry="6" fill="#1A1A2E" />
    <ellipse cx="122" cy="98" rx="2" ry="2" fill="white" />
    {/* Nose */}
    <ellipse cx="100" cy="112" rx="6" ry="4" fill="#1A1A2E" />
    {/* Smile */}
    <path d="M88 120 Q100 132 112 120" stroke="#1A1A2E" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    {/* Cheeks */}
    <ellipse cx="72" cy="115" rx="8" ry="5" fill="#FDBA74" opacity="0.6" />
    <ellipse cx="128" cy="115" rx="8" ry="5" fill="#FDBA74" opacity="0.6" />
    {/* Scarf */}
    <path d="M55 140 Q100 155 145 140 Q145 155 100 165 Q55 155 55 140 Z" fill="#1A9A8A" />
    <path d="M110 155 L115 180 Q120 182 125 178 L118 152" fill="#1A9A8A" />
    {/* Scarf stripe */}
    <path d="M65 143 Q100 156 135 143" stroke="#5EEAD4" strokeWidth="2" fill="none" opacity="0.5" />
    {/* Body hint */}
    <ellipse cx="100" cy="185" rx="35" ry="18" fill="#F97316" />
  </svg>
);

export default FablinoMascot;
