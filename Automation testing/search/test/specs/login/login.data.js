export default [
  {
    "description": "should login with valid credentials",
    "username": "louisphhh",
    "password": "louis@phhh",
    "expected": "LOGIN_SUCCESS"
  },
  {
    "description": "should login fail with invalid credentials",
    "username": "louisphhh",
    "password": "louisphhh",
    "expected": "LOGIN_FAIL"
  },
  {
    "description": "should login fail with empty username and empty password",
    "username": "",
    "password": "",
    "expected": "LOGIN_FAIL"
  },
  {
    "description": "should login fail with empty username",
    "username": "",
    "password": "louis@phhh",
    "expected": "LOGIN_FAIL"
  },
  {
    "description": "should login fail with empty password",
    "username": "louisphhh",
    "password": "",
    "expected": "LOGIN_FAIL"
  }
]