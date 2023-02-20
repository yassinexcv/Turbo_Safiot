const express = require('express');
const router = express.Router();




const {addScouter, getScouters , activateScouter, desactivateScouter , getScouterById} = require('../../scooter/Controllers/SccouterController');


router.route('/addScouter').post(addScouter);
router.route('/getScouter').get(getScouters);
router.route('/activateScouter/:id').get(activateScouter);
router.route('/desactivateScouter/:id').get(desactivateScouter);
router.route('/getScouterById/:id').get(getScouterById);



module.exports = router;