import {employee, report} from "./EmployeeReport";

const employees: employee[] = [
  {age: 17, name: "Max"},
  {age: 18,name: "Sepp"},
  {age: 15,name: "Nina"},
  {age: 51,name: "Mike"}
]

describe('EmployeeReport', () => {
  it('should return only employees over the age of 18', () => {
    const result = report(employees)
    expect(result[0].age).toBeGreaterThanOrEqual(18)
    expect(result[1].age).toBeGreaterThanOrEqual(18)
    expect(result.length).toEqual(2)
  });
  it('should sort employees by their name', () => {
    const result = report(employees)
    expect(result.length).toEqual(2)
    expect(result[0].name.toLowerCase()).toEqual("sepp")
    expect(result[1].name.toLowerCase()).toEqual("mike")
  });
  it('should return names capitalized', () => {
    const result = report(employees)
    expect(result[0].name).toEqual("SEPP")
    expect(result[1].name).toEqual("MIKE")
  })
})