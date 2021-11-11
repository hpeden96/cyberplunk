const users = [];

function userJoin(id, username, room, characterCreated, role, health, maxhealth, items ){
    const user = { id, username, room, characterCreated, role, health, maxhealth, items }
    users.push(user);
    return user;
}

function getCurrentUser(id){
    return users.find(user => user.id === id);
}

function userLeave(id){
    const index = users.findIndex(user => user.id === id);

    if(index !== -1){
        return users.splice(index, 1)[0];
    }
}

function getRoomUsers(room){
    return users.filter(user => user.room === room);
}

//function rollInitiative(){
//    return Math.floor(Math.random() * 20)
//}


module.exports = { userJoin, getCurrentUser, userLeave, getRoomUsers }