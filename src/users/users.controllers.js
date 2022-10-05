const uuid = require('uuid')

const userDB = [
    {
        id: '3b258891-81db-4c3a-a112-b7ac49f2e58c',
        first_name: 'Naruto',
        last_name: 'Uzumaki',
        email: 'junkotakeuchi@gmail.com',
        password: 'world_here/1_come',
        birthday: '1972/04/5' 
    },
    {
        id: 'e64485fc-0198-4876-9692-6a6b2be1695f',
        first_name: 'Baki',
        last_name: 'Hanma',
        email: 'masamikikuchi@gmail.com',
        password: '123456789',
        birthday: '1960/04/24' 
    }
]

const getAllUsers = () => {
    return userDB
};

const getUserById = (id) => {
    const data = userDB.find(task => task.id === id)
    return data
};

const createUser = (userObj) => {
    if(userDB.length === 0){
        const newUser = {
            id: uuid.v4(),
            first_name: userObj.name,
            last_name: userObj.lastname,
            email: userObj.email,
            password: userObj.password,
            birthday: userObj.birthday,
        }
    }
    userDB.push(newUser)
    return newUser
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}