interface ChartLegendInterface {
  bulletBg: string;
  label: string;
  value: string;
}

const ChartLegend = ({ bulletBg, label, value }: ChartLegendInterface) => {
  return (
    <div className="d-flex align-items-center gap-2">
      <div className={`bullet-item bg-${bulletBg}`} />
      <h6 className="text-body fw-semibold flex-1 mb-0">{label}</h6>
      <h6 className="text-body fw-semibold mb-0">{value}</h6>
    </div>
  );
};

export default ChartLegend;
