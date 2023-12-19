import mongoose from "mongoose";
//(9.51m)
const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.ObjectId,
        ref: "Products", // build relationship
      },
    ],
    payment: {},
    buyer: { //kisne ye product ko purchase kiya hai
      type: mongoose.ObjectId,
      ref: "users",
    },
    status: {
      type: String,
      default: "Not Process",
      enum: ["Not Process", "Processing", "Shipped", "deliverd", "cancel"], //enm means pass the multiple chije like check box
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);