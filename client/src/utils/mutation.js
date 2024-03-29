import { gql } from '@apollo/client';

export const USER_LOGIN = gql`
mutation login($employeeId:String!, $password:String!){
  login(
    employeeId:$employeeId
    password:$password
  ){
    token
    user{
      _id
      firstName
      lastName
      employeeId
      department
      level
      password
    }
  }
}

`

export const CREATE_TASK = gql`
mutation createTask(
  $description: String!,
  $user: ID!,
  $dueDate: String!,
  $recurring: Boolean!,
  $renewIn: Int,
) {
  addTask(
    description: $description
    user: $user
    dueDate: $dueDate
    recurring: $recurring
    renewIn: $renewIn
  ) {
    description
  }
}`
export const CHANGE_QUOTE = gql`
mutation changeQuote(
  $_id:ID, 
  $quotes:String)
  {
  updateQuotes(
    _id:$_id, 
    quotes:$quotes){
    quotes
  }
}`