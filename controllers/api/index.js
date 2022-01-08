const router = require('express').Router();
const commentRouter = require('./comment-routes');
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');

router.use('/comments', commentRouter);
router.use('/users', userRoutes);
router.use('/post', postRoutes);

module.exports = router;