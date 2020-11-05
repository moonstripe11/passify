const router = require('express').Router();

const {
    findLoginsByLoggedInUserApi,
    findLoginByIdApi,
    findAllLoginsApi,
    insertLoginApi,
    deleteLoginByIdFromDb,
} = require('../../../controllers/loginController');

const authMiddleware = require('../../../middlewares/authorizationMiddleware');

router.use(authMiddleware);

// /api/logins/userlogins
router.route('/userlogins')
  .get(findLoginsByLoggedInUserApi);

// /api/logins
router.route('/')
  .post(insertLoginApi);


//  /api/logins/:loginId
router.route('/:loginId')
  .get(findLoginByIdApi)
  .delete(deleteLoginByIdFromDb);

module.exports = router;