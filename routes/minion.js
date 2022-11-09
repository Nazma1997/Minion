const router = require('express').Router();
const minionDataController = require('../controller/minion');

/**
 * update a minion by id (some fields)
 * @method PATCH
 */
router.patch('/:minionId', minionDataController.patchMinionById)

/**
 * Get All Minions
 * @method GET
 */

router.get('/', minionDataController.getAllMinions);

/**
 * Post a Minion
 * @method POST
 */

router.post('/', minionDataController.postMinion);

/**
 * Delete a Minion
 * @method DELETE
 */
router.delete('/:minionId', minionDataController.deleteMinionById);

module.exports = router