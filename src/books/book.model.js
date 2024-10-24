const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema({
  title: {
    type: String, 
    required: true
  }, 
  author: {
    type: String, 
    required: true
  },
  description: {
    type: String, 
    required: true
  },
  price: {
    type: Number, 
    required: true
  },
  coverImage: {
    type: String, 
    required: true
  },
  publicationDate: {
    type: Date,
    required: true
  },
  date: {
    type: Date, 
    default: Date.now
  },
  topics: {
    type: [String], 
    required: true
  },
  category: {
    type: [String], 
    required: true
  },
  tags: {
    type: [String], 
    required: true
  },
  availableIssu: {
    type: Boolean,
    required: true
  },
  availableBuy: {
    type: Boolean,
    required: true
  }
}, {
    timestamps: true 
});

const Book = mongoose.model('Book', BookSchema);