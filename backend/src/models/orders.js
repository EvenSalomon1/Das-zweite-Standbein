import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    date: Date.now(),
    products: {
      type: mongoose.Types.ObjectId,
      ref: "products",
      required: true,
    },
    state: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    customer: {
      type: mongoose.Types.ObjectId,
      //   ! Warum customer? haben doch gar kein customer schema
      ref: "customer",
      required: true,
    },
  },
  { collection: "orders", timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
