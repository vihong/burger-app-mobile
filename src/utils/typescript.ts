export const deepClone = <T>(objectToClone: T): T => {
  return JSON.parse(JSON.stringify(objectToClone))
}
