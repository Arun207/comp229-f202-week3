let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/',indexController.displayHomePage);

/* GET home page. */
router.get('/home',indexController.displayHomePage);


/* GET About us page. */
router.get('/about', indexController.displayAboutPage);
  
/* GET Products page. */
router.get('/products',indexController.displayProductsPage) 


/* GET Services page. */
router.get('/services', indexController.displayServicesPage);


/* GET Contact us page. */
router.get('/contact',indexController.displayContactPage);

/*get route fordisplaying the login page*/
router.get('/login', indexController.displayLoginPage);


/*Post route for processing the login page*/
router.post('/login',indexController.processLoginPage);


/*get route fordisplaying the register page*/
router.get('/register', indexController.displayRegisterPage);


/*Post route for processing the register page*/
router.post('/register',indexController.processRegisterPage);

/*get to perform Userlogout */

router.get('/logout', indexController.performLogout);


module.exports = router;
