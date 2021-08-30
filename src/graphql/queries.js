/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($owner: ID!) {
    getUser(owner: $owner) {
      id
      name
      address
      sex
      age
      job
      point
      favoritePlanId
      makePlanIds
      wentPlanIds
      type
      owner
      createdAt
      updatedAt
      plan {
        items {
          id
          userId
          name
          type
          destination
          budget
          capacity
          feature
          visible
          comment
          stay
          transportation
          star
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      adSense {
        items {
          id
          userId
          fullName
          name
          start
          end
          to
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $owner: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      owner: $owner
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        address
        sex
        age
        job
        point
        favoritePlanId
        makePlanIds
        wentPlanIds
        type
        owner
        createdAt
        updatedAt
        plan {
          nextToken
        }
        adSense {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getPlan = /* GraphQL */ `
  query GetPlan($id: ID!) {
    getPlan(id: $id) {
      id
      userId
      name
      type
      destination
      budget
      capacity
      feature
      visible
      comment
      stay
      transportation
      star
      owner
      createdAt
      updatedAt
      itinerary {
        items {
          id
          planId
          order
          title
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      spot {
        items {
          id
          planId
          name
          lat
          lng
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      image {
        items {
          id
          planId
          fullName
          name
          type
          size
          alt
          usage
          url
          identityId
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listPlans = /* GraphQL */ `
  query ListPlans(
    $id: ID
    $filter: ModelPlanFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPlans(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        userId
        name
        type
        destination
        budget
        capacity
        feature
        visible
        comment
        stay
        transportation
        star
        owner
        createdAt
        updatedAt
        itinerary {
          nextToken
        }
        spot {
          nextToken
        }
        image {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const listPlansByOwner = /* GraphQL */ `
  query ListPlansByOwner(
    $owner: ID
    $sortDirection: ModelSortDirection
    $filter: ModelPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlansByOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        name
        type
        destination
        budget
        capacity
        feature
        visible
        comment
        stay
        transportation
        star
        owner
        createdAt
        updatedAt
        itinerary {
          nextToken
        }
        spot {
          nextToken
        }
        image {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getItinerary = /* GraphQL */ `
  query GetItinerary($id: ID!) {
    getItinerary(id: $id) {
      id
      planId
      order
      start {
        time
        lat
        lng
        title
      }
      end {
        time
        lat
        lng
        title
      }
      title
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listItinerarys = /* GraphQL */ `
  query ListItinerarys(
    $id: ID
    $filter: ModelItineraryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listItinerarys(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        planId
        order
        start {
          time
          lat
          lng
          title
        }
        end {
          time
          lat
          lng
          title
        }
        title
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listItinerariesByOwner = /* GraphQL */ `
  query ListItinerariesByOwner(
    $owner: ID
    $sortDirection: ModelSortDirection
    $filter: ModelItineraryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItinerariesByOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        planId
        order
        start {
          time
          lat
          lng
          title
        }
        end {
          time
          lat
          lng
          title
        }
        title
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSpot = /* GraphQL */ `
  query GetSpot($id: ID!) {
    getSpot(id: $id) {
      id
      planId
      name
      lat
      lng
      spotImage {
        fullName
        name
        type
        size
        alt
        url
        identityId
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listSpots = /* GraphQL */ `
  query ListSpots(
    $id: ID
    $filter: ModelSpotFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSpots(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        planId
        name
        lat
        lng
        spotImage {
          fullName
          name
          type
          size
          alt
          url
          identityId
        }
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listSpotsByOwner = /* GraphQL */ `
  query ListSpotsByOwner(
    $owner: ID
    $sortDirection: ModelSortDirection
    $filter: ModelSpotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpotsByOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        planId
        name
        lat
        lng
        spotImage {
          fullName
          name
          type
          size
          alt
          url
          identityId
        }
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getImage = /* GraphQL */ `
  query GetImage($id: ID!) {
    getImage(id: $id) {
      id
      planId
      fullName
      name
      type
      size
      alt
      usage
      url
      identityId
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listImages = /* GraphQL */ `
  query ListImages(
    $id: ID
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listImages(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        planId
        fullName
        name
        type
        size
        alt
        usage
        url
        identityId
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listImagesByOwner = /* GraphQL */ `
  query ListImagesByOwner(
    $owner: ID
    $sortDirection: ModelSortDirection
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImagesByOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        planId
        fullName
        name
        type
        size
        alt
        usage
        url
        identityId
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAdSense = /* GraphQL */ `
  query GetAdSense($id: ID!) {
    getAdSense(id: $id) {
      id
      userId
      fullName
      name
      start
      end
      to
      owner
      createdAt
      updatedAt
      adImage {
        items {
          id
          adSenseId
          fullName
          name
          type
          size
          alt
          url
          identityId
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listAdSenses = /* GraphQL */ `
  query ListAdSenses(
    $id: ID
    $filter: ModelAdSenseFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAdSenses(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        userId
        fullName
        name
        start
        end
        to
        owner
        createdAt
        updatedAt
        adImage {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const listAdSensesByOwner = /* GraphQL */ `
  query ListAdSensesByOwner(
    $owner: ID
    $sortDirection: ModelSortDirection
    $filter: ModelAdSenseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdSensesByOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        fullName
        name
        start
        end
        to
        owner
        createdAt
        updatedAt
        adImage {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getAdImage = /* GraphQL */ `
  query GetAdImage($id: ID!) {
    getAdImage(id: $id) {
      id
      adSenseId
      fullName
      name
      type
      size
      alt
      url
      identityId
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listAdImages = /* GraphQL */ `
  query ListAdImages(
    $id: ID
    $filter: ModelAdImageFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAdImages(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        adSenseId
        fullName
        name
        type
        size
        alt
        url
        identityId
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listAdImagesByOwner = /* GraphQL */ `
  query ListAdImagesByOwner(
    $owner: ID
    $sortDirection: ModelSortDirection
    $filter: ModelAdImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdImagesByOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        adSenseId
        fullName
        name
        type
        size
        alt
        url
        identityId
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
