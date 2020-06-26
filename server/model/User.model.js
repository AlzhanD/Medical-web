import mongoose from 'mongoose'
import bcrypt from 'bcrypt-nodejs'

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: [String],
    default: ['user']
  }
})

// eslint-disable-next-line func-names
userSchema.pre('save', function () {
  this.password = bcrypt.hashSync(this.password)
})

userSchema.method({
  passwordMatches(password) {
    return bcrypt.compareSync(password, this.password)
  }
})

userSchema.statics = {
  async findAndValidateUser({ email, password }) {
    if (!email) {
      throw new Error('No email')
    }
    if (!password) {
      throw new Error('No password')
    }
    const user = await this.findOne({ email }).exec()
    if (!user) {
      throw new Error('no user')
    }
    const isPasswordOk = await user.passwordMatches(password)
    if (!isPasswordOk) {
      throw new Error('password incorrect')
    }
    return user
  }
}

export default mongoose.model('users', userSchema)
