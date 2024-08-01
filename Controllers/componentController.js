const Component = require('../models/Component');

exports.getComponentsByCategory = (req, res, category) => {
  Component.find({ category }, (err, foundComponents) => {
    if (err) {
      console.log(err);
    } else {
      res.render('component', { components: foundComponents });
    }
  });
};
