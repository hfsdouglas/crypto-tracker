export function formatCurrency(currency: number): string {
    const value = currency.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'USD'
    })

    return value
}