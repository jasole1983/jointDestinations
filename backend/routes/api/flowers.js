const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requreAuth } = require('../index.js')
const db = require('../../db/models/')
const { Users, Dispensaries, Flowers, Reviews } = db


router.post('/', asyncHandler( async (req, res) => {
  const currentUserId = res.locals.user.id
  const { commonName, botanicalName, imgURL, THC, strain, reportedEffects } = req.body.data
  const newFlower = await Flowers.build({
    commonName,
    botanicalName,
    imgURL,
    THC,
    strain,
    reportedEffects})
    // tbd validations
    await newFlower.save() ;
    
    res.status(203);
  }))
  
  router.put('/:id', asyncHandler( async (req, res) => {
    const targetFlowerId = parseInt(req.params.id, 10)
    const { commonName, botanicalName, imgURL, THC, strain, reportedEffects } = req.body.data
    const updatedFlower = await Flowers.findOne({ where: { flowerId: targetFlowerId}})
      // tbd validations
      if(updatedFlower) return await updatedFlower.update( commonName, botanicalName, imgURL, THC, strain, reportedEffects )
      
      
      res.status(203);
    }))

  
  router.get('/:id', asyncHandler( async (req, res) => {
    const flowerId = parseInt(req.params.id, 10);
    
    const flowerData = await Flowers.findOne( { attributes: [commonName, botanicalName, imgURL, THC, strain, reportedEffects],  where: { id: flowerId }})
    
    await console.log('flowers', dispensary)
    
    res.json({ flowerData })
  }))
  
  router.get('/', asyncHandler( async (req, res) => {
    const { list } = req.body.data
    const flowers = await Flowers.findAll( { where: { attributes: [...list] } } )

    res.json({ list })
  }))

  module.exports = router;