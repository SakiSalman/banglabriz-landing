type LabelValue<L, V> = { label: L; value: V };

const mapArrayToLabelValue = <T, L extends keyof T, V extends keyof T>({
  array,
  label,
  value,
}: {
  array: T[];
  label: L | L[]; // Now supports string or string[]
  value: V;
}): LabelValue<string, T[V]>[] =>
  array.map((item) => ({
    label: Array.isArray(label)
      ? label
          .map((key) => String(item[key]))
          .filter(Boolean)
          .join(' ')
      : String(item[label]),
    value: item[value],
  }));

export default mapArrayToLabelValue;
