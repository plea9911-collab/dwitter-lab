import * as repository from '../repository/usersRepository.js';

export const getUsers = (req, res) => {
    const users = repository.getUsers();
    res.json({ "users": users });
}

export const getLogin = (req, res) => {
    const { id, password } = req.body.data
    const userIdx = repository.getLogin(id, password);
    const result = userIdx !== -1 ? true : false;
    res.json({ "result": result });
}
