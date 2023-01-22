export interface employee {
  name: string
  age: number
}

export function report(employees: employee[]): employee[] {
  const filtered = employees.filter(employee => employee.age >= 18)
  const sorted = filtered.sort(sortByName)
  return sorted.map(employee => ({name: employee.name.toUpperCase(), age: employee.age}))
}

function sortByName(a: employee, b: employee): number {
  if (a.name > b.name) {
    return -1
  }
  if (a.name < b.name) {
    return 1
  }
  return 0
}