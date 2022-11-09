const Minion = require('../models/minions');
const minionService = require('../services/minions');

// Get All Minions
const getAllMinions = async(req,res, next) => {
  try{
    const minion = await minionService.findAllMinions();
    return res.status(200).json(minion);
  }
  catch(e){
    next(e)
  }
};

// Get Minion by Id

const getMinionById = async(req,res, next) => {
  const minionId = req.params.minionId;
  try{
    const minion = await minionService.findMinionByProperty('_id', minionId);
    if(!minion){
      throw error('Minion not found', 404);
    }
    return res.status(200).json(minion)
  }
  catch(e){
    next(e)
  }
}

// Post new Minion
const postMinion = async(req,res, next) => {
  const {name, age, color} = req.body;

  try{
    const minion = await minionService.createMinion({name, age, color})
    return res.status(201).json(minion)
  }
  catch(e){
    next(e)
  }
}

// Delete a Minion

const deleteMinionById = async(req, res, next) => {
  const minionId = req.params.minionId;
  try{
    const minion = await minionService.findMinionByProperty('_id', minionId);
    if(!minion) {
      throw error('Minion not found', 404)
    }

    await minion.remove();

    return res.status(203).json({message: 'Minion Deleted Successfully', minion}).send()
  }
  catch(e){
    next(e)
  }
}

// Update Minion (some fields)

const patchMinionById = async(req, res, next) => {
  const minionId = req.params.minionId;
  const {name, age, color} = req.body;

  try{
      const minion = await minionService.findMinionByProperty('_id',minionId);

      if(!minion){
        throw error('Minion not found', 400);
      }

      minion.name = name ?? minion.name;
      minion.age = age ?? minion.age;
      minion.color = color ?? minion.color;
      



      await minion.save();

      return res. status(200).json(minion);
  }
  catch(e){
    next(e)
  }
}

module.exports ={
  getAllMinions,
  getMinionById,
  postMinion,
  deleteMinionById,
  patchMinionById

}