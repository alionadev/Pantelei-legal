type WatermarkProps = {
  value: string;
  className?: string;
};

export const Watermark = ({ value, className = "" }: WatermarkProps) => (
  <span aria-hidden="true" className={`watermark ${className}`}>
    {value}
  </span>
);
