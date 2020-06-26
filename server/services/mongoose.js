import mongoose from 'mongoose'

exports.connect = (mongoURL) => {
  mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })
  return mongoose.connection
}

mongoose.connection.on('connected', () => {
  console.log('Connected')
})

mongoose.connection.on('error', (err) => {
  console.log(`Connection failed ${err}`)
  process.exit(1)
})
