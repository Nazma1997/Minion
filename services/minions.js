const Minions = require('../models/minions');


// It's not a method. It's a function for patch and delete method
const findMinionByProperty = (key, value) => {
  if(key == '_id'){
    return Minions.findById(value);
  }

  return Minions.findOne({[key] : value});
}

// Create new Minion

const createMinion = ({name, age, color}) => {
 
  const minion = new Minions({name, age, color});
  return minion.save();
}


// View list of all minion

const findAllMinions = () => {
  return Minions.find();
}


// Update a Minion 

const updateMinion = async(id, data) => {
  const minion = await findMinionByProperty('_id', data._id)
  if(minion){
    throw error('Minion already in use', 400)
  }

  return Minions.findByIdAndUpdate(id, {...data}, 
    {new: true})
}

module.exports = {
  findMinionByProperty,
  createMinion,
  findAllMinions,
  updateMinion

}