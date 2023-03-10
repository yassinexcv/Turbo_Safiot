const express = require('express')
const asyncHandler = require('express-async-handler')
const Scouter = require('../Model/ScouterModel')




const addScouter = asyncHandler(async (req, res) => {
    const { nom, latitude , longitude, description,status  } = req.body
    const scouter = await Scouter.create({
        nom,
        latitude,
        longitude,
        description,
        status
       
    })
    if (scouter) {
        res.status(201).json({
            _id: scouter._id,
            nom: scouter.nom,
            latitude: scouter.latitude,
            longitude: scouter.longitude,
            description: scouter.description,
            status: scouter.status
        })
    } else {
        res.status(400)
        throw new Error('Invalid Scouter data')
    }
})

const getScouters = asyncHandler(async (req, res) => {
    const scouter = await Scouter.find({})
    res.json(scouter)
}
)

const getScouterById = asyncHandler(async (req, res) => {
    const scouter = await Scouter.findById(req.params.id)
    if (scouter) {
        res.json(scouter)
    } else {
        res.status(404)
        throw new Error('Scouter not found')
    }
})

const activateScouter = asyncHandler(async (req, res) => {
    const scouter = await Scouter.findById(req.params.id)
    if (scouter) {
        scouter.status = "activer"
        const updatedScouter = await scouter.save()
        res.json({updatedScouter})
    } else {
        res.status(404)
        throw new Error('Scouter not found')
    }
})

const desactivateScouter = asyncHandler(async (req, res) => {
    const scouter = await Scouter.findById(req.params.id)
    if (scouter) {
        scouter.status = "desactiver"
        const updatedScouter = await scouter.save()
        res.json({updatedScouter})
    } else {
        res.status(404)
        throw new Error('Scouter not found')
    }
}
)

module.exports = {addScouter,getScouters,activateScouter,desactivateScouter , getScouterById}

