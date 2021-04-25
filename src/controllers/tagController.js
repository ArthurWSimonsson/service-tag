const Tag = require('../models/Tag')

// Adds a tag to the tag database
exports.addTag = async (req) => {
    let tag = {
        name: req.name,
        uuid: generateUUID()
    }

    let result = await Tag.findOne({name: req.name});

    if (!result) {
        result = await new Tag(tag).save();
    }

    return result
}

function generateUUID() {  
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}