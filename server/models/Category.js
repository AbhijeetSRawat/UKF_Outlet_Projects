const mongoose = require("mongoose");

// Define the Tags schema
const categorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: { type: String },
	items: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "item",
		},
	],
});

// Export the Tags model
module.exports = mongoose.model("Category", categorySchema);