var mongoose = require('mongoose');
	Schema = mongoose.Schema;
var menuItemSchema = new Schema({
	created_at: {type: Date, default: Date.now},
	updated_at: {type: Date, default: Date.now},
	image: {type: String},
	name: {type: String},
	description: String,
	featured: Boolean,
  	category: String,
    image: {
		type: String,
		default:''
	},
    reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}]
});
mongoose.model('Brand', BrandSchema);
