const users = [
    { "id": "test", "password": "1234" },
    { "id": "hong", "password": "1111" },
    { "id": "test1234", "password": "test1234" }
];

export const getLogin = (id, password) => {
    const userIdx = users.findIndex(user => user.id === id && user.password === password);
    return userIdx;
}

export const getUsers = () => {
    return users;
}