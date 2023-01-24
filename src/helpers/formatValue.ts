function formatValue(value: number) {
  return Intl.NumberFormat('pr-BR', { style: "currency", currency: "BRL" }).format(value);
}

export { formatValue }
