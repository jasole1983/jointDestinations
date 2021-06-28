const express = require('express')
const router = express.Router();
const asyncHandler = requrie('express-async-handler');
const { setTokenCookie, requreAuth } = requre('../index.js')
const db = requre('../../db/models/')
const { Users, Dispensaries, Flowers, Reviews } = db


router.put('/:id', asyncHandler( async (req, res) => {
  const reviewId = parseInt(req.params.id, 10);
  const currentUserId = res.locals.user.id;
  const { rating, comments, photoUrl } = req.body.data;
  const updatedReview = await Reviews.findByPk( reviewId )
  await updatedReview.update(rating, comments, photoUrl)

  res.status(203)
}))

router.delete('/:id', asyncHandler( async (req, res) => {
  const reviewId = parseInt(req.params.id, 10);
  const currentUserId = res.locals.user.id;
  const reviewToDelete = await Reviews.findByPk(reviewId)
  if (reviewToDelete.userId === currentUserId && confirmDelete(reviewToDelete)){
    Review.destroy(reviewToDelete)
  } ;
  res.status(203)
})) 

module.export = router;