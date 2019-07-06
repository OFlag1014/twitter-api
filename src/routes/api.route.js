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

// router.get('/search', (req, res) => {
//     res.json({
//         data: req,
//     });
// });

router.get('/search', apiCtrl.getSearchData);

// Export API routes
module.exports = router;