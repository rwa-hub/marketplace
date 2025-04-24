interface MetricBadgeProps {
  label: string;
  value: string;
  color: 'blue' | 'purple' | 'cyan';
}

const colorMap = {
  blue: {
    text: 'text-blue-400',
    border: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
  },
  purple: {
    text: 'text-pink-400',
    border: 'linear-gradient(90deg, #a855f7, #ec4899)',
  },
  cyan: {
    text: 'text-cyan-300',
    border: 'linear-gradient(90deg, #22d3ee, #38bdf8)',
  },
};

export const MetricBadge: React.FC<MetricBadgeProps> = ({ label, value, color }) => {
  const { text, border } = colorMap[color];

  return (
    <div
      className="flex-1 rounded-xl p-[1px]"
      style={{
        background: border,
      }}
    >
      <div
        className={`h-full w-full rounded-xl bg-[#1B1743] px-4 py-3 text-center`}
        style={{
          backgroundClip: 'padding-box',
        }}
      >
        <div className={`text-[11px] font-semibold tracking-wide uppercase ${text}`}>
          {label}
        </div>
        <div className="text-white text-base font-bold mt-1">{value}</div>
      </div>
    </div>
  );
};

