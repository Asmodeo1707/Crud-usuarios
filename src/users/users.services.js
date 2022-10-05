const { createUser, getAllUsers, getUserById } = require('./users.controllers')

const getAll = (req, res) => {
    const data = getAllUsers()
    res.status(200).json(data)
}

const getOneUsers = (req, res) => {
    const id = req.params.id
    const data = getUserById(id)
    if(data){
        res.status(200).json(data)
    } else {
        res.status(404).json({id: id, message: 'Invalid ID'})
    }
}

const createNewUser = (req, res) => {
    const { userObj } = req.body

    if(userObj){
        const data = createUser(userObj)
        res.status(201).json(data)
    } else {
        res.status(400).json({message: 'Missing Data'})
    }
}

module.exports = {
    getAll,
    getOneUsers,
    createNewUser
}