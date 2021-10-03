export function createControl(config, validation) {
  return {
    ...config,
    validation,
    value: '',
    touched: false
  }
}