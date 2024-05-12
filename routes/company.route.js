const express = require('express');
const app = express();
const companyRoutes = express.Router();

let Company = require('../model/Company');

// api to add company
companyRoutes.route('/add').post(function (req, res) {
  let company = new Company(req.body);
  company.save()
  .then(company => {
    res.status(200).json({'status': 'success','mssg': 'company added successfully'});
  })
  .catch(err => {
    res.status(409).send({'status': 'failure','mssg': 'unable to save to database'});
  });
});

// api to get companys
companyRoutes.route('/').get(function (req, res) {
  Company.find(function (err, companys){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','companys': companys});
    }
  });
});

// api to get company
companyRoutes.route('/company/:id').get(function (req, res) {
  let id = req.params.id;
  Company.findById(id, function (err, company){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','company': company});
    }
  });
});

// api to update route
companyRoutes.route('/update/:id').put(function (req, res) {
    Company.findById(req.params.id, function(err, company) {
    if (!company){
      res.status(400).send({'status': 'failure','mssg': 'Unable to find data'});
    } else {
        company.name = req.body.name;
        company.email = req.body.email;
        company.address = req.body.address;
        company.password = req.body.password;
        company.cnpj = req.body.cnpj;
        company.area = req.body.area;
        company.phone_number = req.body.phone_number;
        company.picture = req.body.picture;

        company.save().then(business => {
          res.status(200).json({'status': 'success','mssg': 'Update complete'});
      })
    }
  });
});

// api for delete
companyRoutes.route('/delete/:id').delete(function (req, res) {
  Company.findByIdAndRemove({_id: req.params.id}, function(err,){
    if(err){
      res.status(400).send({'status': 'failure','mssg': 'Something went wrong'});
    }
    else {
      res.status(200).json({'status': 'success','mssg': 'Delete successfully'});
    }
  });
});

module.exports = companyRoutes;