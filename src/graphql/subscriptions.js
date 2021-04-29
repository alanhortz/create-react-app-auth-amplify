/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateExchange = /* GraphQL */ `
  subscription OnCreateExchange($owner: String!) {
    onCreateExchange(owner: $owner) {
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
export const onUpdateExchange = /* GraphQL */ `
  subscription OnUpdateExchange($owner: String!) {
    onUpdateExchange(owner: $owner) {
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
export const onDeleteExchange = /* GraphQL */ `
  subscription OnDeleteExchange($owner: String!) {
    onDeleteExchange(owner: $owner) {
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
export const onCreateMember = /* GraphQL */ `
  subscription OnCreateMember($owner: String!) {
    onCreateMember(owner: $owner) {
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
export const onUpdateMember = /* GraphQL */ `
  subscription OnUpdateMember($owner: String!) {
    onUpdateMember(owner: $owner) {
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
export const onDeleteMember = /* GraphQL */ `
  subscription OnDeleteMember($owner: String!) {
    onDeleteMember(owner: $owner) {
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
