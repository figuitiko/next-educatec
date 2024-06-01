export const calculatePercentage = (
  partialValue: number,
  totalValue: number
): number => {
  if (totalValue === 0) {
    throw new Error('Total value cannot be zero.')
  }
  return (100 * partialValue) / totalValue
}
