const Purchase = require('../Models/Purchase');
const Component = require('../Models/Component');

exports.addPurchase = (req, res) => {
  Component.findOne({ company: req.body.button }, (err, found) => {
    if (err) {
      console.log(err);
    } else {
      const newBuy = new Purchase({
        components: found.company,
        balanceAmount: found.price
      });

      newBuy.save(err => {
        if (err) {
          console.log(err);
        } else {
          res.redirect('/cart');
        }
      });
    }
  });
};

exports.viewCart = (req, res) => {
  Purchase.find((err, foundData) => {
    if (err) {
      console.log(err);
    } else {
      res.render('cart', { purchases: foundData });
    }
  });
};

exports.clearCart = (req, res) => {
  Purchase.deleteMany({}, err => {
    if (err) {
      console.log(err);
    } else {
      console.log('Successfully cleared CART items');
      res.redirect('/thankyou');
    }
  });
};
