const mongoose = require('mongoose');
const projectlistSchema = new mongoose.Schema({
  title: { type: String, required: true },
  img: { type: String, required: true },
  desc: { type: String, required: true },
  link: { type: String, required: true },
  code: { type: String, required: true },
  detail: { type: String, required: true },
});

const Projectlist = mongoose.model('PROJECTLIST', projectlistSchema);
//USER  will be converted to users
module.exports = Projectlist;
