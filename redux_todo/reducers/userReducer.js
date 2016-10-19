export default (user = {}, action) => {
    switch (action.type) {
        case 'CREATE_USER_ID':
            return {
                id: action.id,
                username: user.username
            }
        default:
            return user;
    }
}
