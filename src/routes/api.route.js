// Initialize express router
var router = require('express').Router();
var apiCtrl = require('../controllers/api.controller');

// Test api
router.get('/', (req, res) => {
    res.json({
        status: 'API Working.',
        message: 'Welcome!',
    });
});

router.get('/search', apiCtrl.getSearchData);

// router.get('/campaign', apiCtrl.getData);

// Export API routes
module.exports = router;