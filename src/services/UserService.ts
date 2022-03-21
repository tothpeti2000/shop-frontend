import axios from "axios";

class UserService {
  static async RegisterUser(userName: string, email: string, password: string) {
    const userDetails = {
      userName: userName,
      email: email,
      password: password,
    };

    let error = "";

    await axios
      .post("https://localhost:7202/api/register", userDetails)
      .catch((err) => {
        if (err.response) {
          error = err.response.data;
        } else {
          error = "Unable to connect to the server. Please, try again later!";
        }
      });

    if (error.length > 0) {
      throw new Error(error);
    }
  }
}

export default UserService;
