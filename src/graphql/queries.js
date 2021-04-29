/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getExchange = /* GraphQL */ `
  query GetExchange($id: ID!) {
    getExchange(id: $id) {
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
export const listExchanges = /* GraphQL */ `
  query ListExchanges(
    $filter: ModelExchangeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExchanges(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getMember = /* GraphQL */ `
  query GetMember($id: ID!) {
    getMember(id: $id) {
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
export const listMembers = /* GraphQL */ `
  query ListMembers(
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cognitoID
        nickname
        username
        exchangesAsSourceByType {
          nextToken
        }
        exchangesAsDestinationByType {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const memberByUsername = /* GraphQL */ `
  query MemberByUsername(
    $username: String
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    memberByUsername(
      username: $username
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cognitoID
        nickname
        username
        exchangesAsSourceByType {
          nextToken
        }
        exchangesAsDestinationByType {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const memberByNickname = /* GraphQL */ `
  query MemberByNickname(
    $nickname: String
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    memberByNickname(
      nickname: $nickname
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cognitoID
        nickname
        username
        exchangesAsSourceByType {
          nextToken
        }
        exchangesAsDestinationByType {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const memberByCognitoId = /* GraphQL */ `
  query MemberByCognitoId(
    $cognitoID: String
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    memberByCognitoID(
      cognitoID: $cognitoID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cognitoID
        nickname
        username
        exchangesAsSourceByType {
          nextToken
        }
        exchangesAsDestinationByType {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
