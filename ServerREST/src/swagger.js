import {UpdateUserSchema ,UserSchema } from './resources/users/schema'
import {RegistrationUserSchema, LoginUserSchema} from './resources/auth/schema'

module.exports = {
    "swagger": "2.0",
    "info": {
      "version": "1.0.0",
      "title": "Yet Another Node.js Blogg Application API",
      "description": "Yet Another Node.js Blogg Application API",
      "license": {
        "name": "MIT",
        "url": "https://opensource.org/licenses/MIT"
      }
    },
    "host": "localhost:5000",
    "basePath": "/",
    "tags": [
      {
        "name": "Users",
        "description": "API for users in the system"
      }
    ],
    "schemes": [
      "http"
    ],
    "consumes": [
      "application/json"
    ],
    "produces": [
      "application/json"
    ],
    "paths": {
      "/login": {
        "post": {
          "tags": [
            "User"
          ],
          "description": "Get user from system",
          "parameters": [
            {
              "name": "user",
              "in": "body",
              "description": "User want to get 'user'",
              "schema": {
                "$ref": "#/definitions/LoginUserSchema"
              }
            }
          ],
          "produces": [
            "application/json"
          ],
          "responses": {
            "200": {
              "description": "get user",
              "schema": {
                "$ref": "#/definitions/UserSchema"
              }
            }
          }
        } 
    },
    "/register": {
        "post": {
          "tags": [
            "User"
          ],
          "description": "Get user from system",
          "parameters": [
            {
              "name": "user",
              "in": "body",
              "description": "User want to create 'user'",
              "schema": {
                "$ref": "#/definitions/RegistrationUserSchema"
              }
            }
          ],
          "produces": [
            "application/json"
          ],
          "responses": {
            "200": {
              "description": "get user",
              "schema": {
                "$ref": "#/definitions/UserSchema"
              }
            }
          }
        } 
    }
    
    },
    "definitions": {
      "RegistrationUserSchema": 
      RegistrationUserSchema,
      "LoginUserSchema":
      LoginUserSchema,
      "UpdateUserSchema":
      UpdateUserSchema,
      "UserSchema":
      UserSchema,
      "Users": {
        "type": "array",
        "$ref": "#/definitions/User"
      }
    }
  }