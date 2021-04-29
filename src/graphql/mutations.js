/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createExchange = /* GraphQL */ `
  mutation CreateExchange(
    $input: CreateExchangeInput!
    $condition: ModelExchangeConditionInput
  ) {
    createExchange(input: $input, condition: $condition) {
      id
      value
      type
      permission
      request
      createdAt
      updatedAt
      sourceID
      destinationID
      owner
    }
  }
`;
export const updateExchange = /* GraphQL */ `
  mutation UpdateExchange(
    $input: UpdateExchangeInput!
    $condition: ModelExchangeConditionInput
  ) {
    updateExchange(input: $input, condition: $condition) {
      id
      value
      type
      permission
      request
      createdAt
      updatedAt
      sourceID
      destinationID
      owner
    }
  }
`;
export const deleteExchange = /* GraphQL */ `
  mutation DeleteExchange(
    $input: DeleteExchangeInput!
    $condition: ModelExchangeConditionInput
  ) {
    deleteExchange(input: $input, condition: $condition) {
      id
      value
      type
      permission
      request
      createdAt
      updatedAt
      sourceID
      destinationID
      owner
    }
  }
`;
export const createMember = /* GraphQL */ `
  mutation CreateMember(
    $input: CreateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    createMember(input: $input, condition: $condition) {
      id
      cognitoID
      nickname
      username
      exchangesAsSourceByType {
        items {
          id
          value
          type
          permission
          request
          createdAt
          updatedAt
          sourceID
          destinationID
          owner
        }
        nextToken
      }
      exchangesAsDestinationByType {
        items {
          id
          value
          type
          permission
          request
          createdAt
          updatedAt
          sourceID
          destinationID
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateMember = /* GraphQL */ `
  mutation UpdateMember(
    $input: UpdateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    updateMember(input: $input, condition: $condition) {
      id
      cognitoID
      nickname
      username
      exchangesAsSourceByType {
        items {
          id
          value
          type
          permission
          request
          createdAt
          updatedAt
          sourceID
          destinationID
          owner
        }
        nextToken
      }
      exchangesAsDestinationByType {
        items {
          id
          value
          type
          permission
          request
          createdAt
          updatedAt
          sourceID
          destinationID
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteMember = /* GraphQL */ `
  mutation DeleteMember(
    $input: DeleteMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    deleteMember(input: $input, condition: $condition) {
      id
      cognitoID
      nickname
      username
      exchangesAsSourceByType {
        items {
          id
          value
          type
          permission
          request
          createdAt
          updatedAt
          sourceID
          destinationID
          owner
        }
        nextToken
      }
      exchangesAsDestinationByType {
        items {
          id
          value
          type
          permission
          request
          createdAt
          updatedAt
          sourceID
          destinationID
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
