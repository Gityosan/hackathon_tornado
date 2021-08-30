/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreatePlan = /* GraphQL */ `
  subscription OnCreatePlan($owner: String) {
    onCreatePlan(owner: $owner) {
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
export const onUpdatePlan = /* GraphQL */ `
  subscription OnUpdatePlan($owner: String) {
    onUpdatePlan(owner: $owner) {
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
export const onDeletePlan = /* GraphQL */ `
  subscription OnDeletePlan($owner: String) {
    onDeletePlan(owner: $owner) {
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
export const onCreateItinerary = /* GraphQL */ `
  subscription OnCreateItinerary($owner: String) {
    onCreateItinerary(owner: $owner) {
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
export const onUpdateItinerary = /* GraphQL */ `
  subscription OnUpdateItinerary($owner: String) {
    onUpdateItinerary(owner: $owner) {
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
export const onDeleteItinerary = /* GraphQL */ `
  subscription OnDeleteItinerary($owner: String) {
    onDeleteItinerary(owner: $owner) {
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
export const onCreateSpot = /* GraphQL */ `
  subscription OnCreateSpot($owner: String) {
    onCreateSpot(owner: $owner) {
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
export const onUpdateSpot = /* GraphQL */ `
  subscription OnUpdateSpot($owner: String) {
    onUpdateSpot(owner: $owner) {
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
export const onDeleteSpot = /* GraphQL */ `
  subscription OnDeleteSpot($owner: String) {
    onDeleteSpot(owner: $owner) {
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
export const onCreateImage = /* GraphQL */ `
  subscription OnCreateImage($owner: String) {
    onCreateImage(owner: $owner) {
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
export const onUpdateImage = /* GraphQL */ `
  subscription OnUpdateImage($owner: String) {
    onUpdateImage(owner: $owner) {
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
export const onDeleteImage = /* GraphQL */ `
  subscription OnDeleteImage($owner: String) {
    onDeleteImage(owner: $owner) {
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
export const onCreateAdSense = /* GraphQL */ `
  subscription OnCreateAdSense($owner: String) {
    onCreateAdSense(owner: $owner) {
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
export const onUpdateAdSense = /* GraphQL */ `
  subscription OnUpdateAdSense($owner: String) {
    onUpdateAdSense(owner: $owner) {
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
export const onDeleteAdSense = /* GraphQL */ `
  subscription OnDeleteAdSense($owner: String) {
    onDeleteAdSense(owner: $owner) {
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
export const onCreateAdImage = /* GraphQL */ `
  subscription OnCreateAdImage($owner: String) {
    onCreateAdImage(owner: $owner) {
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
export const onUpdateAdImage = /* GraphQL */ `
  subscription OnUpdateAdImage($owner: String) {
    onUpdateAdImage(owner: $owner) {
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
export const onDeleteAdImage = /* GraphQL */ `
  subscription OnDeleteAdImage($owner: String) {
    onDeleteAdImage(owner: $owner) {
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
