const isLogin = (token) => {
  if (token) {
    return true;
  }
  return false;
};

const register = (token) => {
  localStorage.setItem("token", JSON.stringify(token));
};

const getMe = () => true;

const test = () => true;

const isValid = () => false;

const getToken = () => true;

const addCourse = (course) => {
  return { message: "refactored" };
};

const addLike = () => true;
