export default class User {
  constructor (data) {
    this.bind(data)
  }

  bind (data) {
    Object.keys(data).forEach((key) => {
      this[key] = data[key]
    })
  }
}
