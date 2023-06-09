// const mongoose = require('mongoose');
// const sellerId = new mongoose.Types.ObjectId();
// const sellerSchema = new mongoose.Schema({
//     sellerId: {
//         type: mongoose.Schema.Types.ObjectId,
//         default: mongoose.Types.ObjectId,
//       },
//   email: String,
//   businessName: String,
//   password: String,
//   storeInfo: {
//     address: String,
//     gst: String,
//     logo: String,
//     storeTimings: String,
//   },
//   categories: [
//     {
//       name: String,
//       subcategories: [String],
//     },
//   ],
//   inventory: [
//     {
//       category: String,
//       subcategory: String,
//       productName: String,
//       mrp: Number,
//       sp: Number,
//       qty: Number,
//       images: [String],
//     },
//   ],
// });

// const Seller = mongoose.model('Seller', sellerSchema);
// module.exports = Seller;