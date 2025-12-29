// Utility functions for filtering assets

export interface FilterParams {
  searchTerm?: string;
  filters: Record<string, string>;
}

export function filterByPrice(price: number, filterValue: string): boolean {
  if (!filterValue) return true;
  
  const [min, max] = filterValue.split("-").map(Number);
  if (max) {
    return price >= min && price <= max;
  } else {
    return price >= min;
  }
}

export function filterByRange(value: number, filterValue: string): boolean {
  if (!filterValue) return true;
  
  const [min, max] = filterValue.split("-").map(Number);
  if (max) {
    return value >= min && value <= max;
  } else {
    return value >= min;
  }
}

export function filterBySearch(
  searchTerm: string,
  ...fields: string[]
): boolean {
  if (!searchTerm) return true;
  
  const searchLower = searchTerm.toLowerCase();
  return fields.some((field) => field.toLowerCase().includes(searchLower));
}

export function filterByExactMatch(value: string, filterValue: string): boolean {
  if (!filterValue) return true;
  return value.toLowerCase() === filterValue.toLowerCase();
}

export function filterByPartialMatch(value: string, filterValue: string): boolean {
  if (!filterValue) return true;
  return value.toLowerCase().includes(filterValue.toLowerCase());
}
