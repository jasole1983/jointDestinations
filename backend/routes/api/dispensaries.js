const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requreAuth } = require('../index.js')
const db = require('../../db/models/')
const { Users, Dispensaries, Flowers, Reviews } = db


router.post('/:id/review', asyncHandler( async (req, res) => {
  const dispensaryId = parseInt(req.params.id, 10);
  const currentUserId = res.locals.user.id;
  const { rating, comments, photoURL} = req.body.data
  const newReview = await Reviews.build({
    targetType: 'Dispensary',
    dispensaryId,
    rating,
    comments,
    userId: currentUserId,
    photoURL})
    // tbd validations
    await newReview.save() ;
    
    res.status(203);
  }))
router.post('/:id/flower', asyncHandler( async (req, res) => {
  const dispensaryId = parseInt(req.params.id, 10);
  const currentUserId = res.locals.user.id
  const { name, imgURL, THC, strain, reportedEffects } = req.body.data
  const newFlower = await Flowers.build({
    name,
    imgURL,
    THC,
    strain,
    reportedEffects})
    // tbd validations
    await newFlower.save() ;
    
    res.status(203);
  }))
        
router.get('/:id', asyncHandler( async (req, res) => {
  const dispensaryId = parseInt(req.params.id, 10);
  
  const dispensaryData = await Dispensaries.findAll({ include: [Flowers, Reviews], where: { dispensaryId: Dispensary.id }})
  
  await console.log('dispensary', dispensary)
  
  res.json({ dispensaryData })
}))
    
router.get('/', asyncHandler( async (req, res) => {
  
  const dispList = await Dispensaries.findAll({ include: [Flowers, Reviews], where: { dispensaryId: Dispensary.id }})
  
  res.json({dispList})

}))

module.exports = router