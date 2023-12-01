const { username, password } = process.env;
export const connectionStr = `mongodb+srv://${username}:${password}@cluster0.dxyqr0e.mongodb.net/userDB?retryWrites=true&w=majority`;
