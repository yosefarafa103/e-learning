function formatNumberEU(number: number, decimals: number = 0): string {
    return new Intl.NumberFormat('de-DE', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    }).format(number);
}
export default formatNumberEU;