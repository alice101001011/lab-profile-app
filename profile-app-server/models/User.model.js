const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
     unique: true
    },
    password: String,
    campus: {
      type: String,
      enum: [
        'Madrid',
        'Barcelona',
        'Miami',
        'Paris',
        'Berlin',
        'Amsterdam',
        'México',
        'Sao Paulo',
        'Lisbon',
        'Remote',
      ],
    },
    course: {
      type: String,
      enum: ['Web Dev', 'UX/UI', 'Data Analytics', 'Cyber Security'],
    },
    image: String,
  },
  {
    timestamps: true,
  }
);

const User = model('User', userSchema);

module.exports = User;
