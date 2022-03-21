import axios from "axios";

class UserService {
  static HandleError(err: any) {
    return err.response
      ? err.response.data
      : "Unable to connect to the server. Please, try again later!";
  }

  static async CreateAccount(
    userName: string,
    email: string,
    password: string
  ) {
    const userDetails = {
      userName: userName,
      email: email,
      password: password,
    };

    let error = "";

    await axios
      .post("https://localhost:7202/api/register", userDetails)
      .catch((err) => {
        error = UserService.HandleError(err);
      });

    if (error.length > 0) {
      throw new Error(error);
    }
  }

  static async LoginUser(userName: string, password: string) {
    const userCredentials = {
      userName: userName,
      password: password,
    };

    let error = "";

    await axios
      .post("https://localhost:7202/api/login", userCredentials)
      .catch((err) => {
        error = UserService.HandleError(err);
      });

    if (error.length > 0) {
      throw new Error(error);
    }
  }
}

export default UserService;
