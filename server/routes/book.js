

let express = require('express');
let router = express.Router();
let mongoose= require('mongoose');


let passport = require('passport');


let bookController = require('../controllers/book');

//helper fuction for guard purposes
function requireAuth(req,res,next)
{
    //check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}



/*GET Route for the Book List page -- Read Operation */
router.get('/',bookController.displayBookList);

/*get route for the add page - create operation*/
router.get('/add', requireAuth,bookController.displayAddPage);
/*Post route for processing the add page - create operation*/
router.post('/add',requireAuth,bookController.processAddPage);
/*get route for displaying the edit page - update operation*/
router.get('/edit/:id',requireAuth,bookController.displayEditPage);
/*Post route for processing the edit page - update operation*/
router.post('/edit/:id',requireAuth,bookController.processEditPage);

/*get to perform deletion - delete operation*/

router.get('/delete/:id', requireAuth,bookController.performDelete);
module.exports = router;