export const money = (v) => new Intl.NumberFormat('ar-SA', { style: 'currency', currency: 'SAR' }).format(v);
