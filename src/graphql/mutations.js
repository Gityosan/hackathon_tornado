/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPlan = /* GraphQL */ `
  mutation CreatePlan(
    $input: CreatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    createPlan(input: $input, condition: $condition) {
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
export const updatePlan = /* GraphQL */ `
  mutation UpdatePlan(
    $input: UpdatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    updatePlan(input: $input, condition: $condition) {
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
export const deletePlan = /* GraphQL */ `
  mutation DeletePlan(
    $input: DeletePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    deletePlan(input: $input, condition: $condition) {
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
export const createItinerary = /* GraphQL */ `
  mutation CreateItinerary(
    $input: CreateItineraryInput!
    $condition: ModelItineraryConditionInput
  ) {
    createItinerary(input: $input, condition: $condition) {
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
export const updateItinerary = /* GraphQL */ `
  mutation UpdateItinerary(
    $input: UpdateItineraryInput!
    $condition: ModelItineraryConditionInput
  ) {
    updateItinerary(input: $input, condition: $condition) {
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
export const deleteItinerary = /* GraphQL */ `
  mutation DeleteItinerary(
    $input: DeleteItineraryInput!
    $condition: ModelItineraryConditionInput
  ) {
    deleteItinerary(input: $input, condition: $condition) {
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
export const createSpot = /* GraphQL */ `
  mutation CreateSpot(
    $input: CreateSpotInput!
    $condition: ModelSpotConditionInput
  ) {
    createSpot(input: $input, condition: $condition) {
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
export const updateSpot = /* GraphQL */ `
  mutation UpdateSpot(
    $input: UpdateSpotInput!
    $condition: ModelSpotConditionInput
  ) {
    updateSpot(input: $input, condition: $condition) {
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
export const deleteSpot = /* GraphQL */ `
  mutation DeleteSpot(
    $input: DeleteSpotInput!
    $condition: ModelSpotConditionInput
  ) {
    deleteSpot(input: $input, condition: $condition) {
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
export const createImage = /* GraphQL */ `
  mutation CreateImage(
    $input: CreateImageInput!
    $condition: ModelImageConditionInput
  ) {
    createImage(input: $input, condition: $condition) {
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
export const updateImage = /* GraphQL */ `
  mutation UpdateImage(
    $input: UpdateImageInput!
    $condition: ModelImageConditionInput
  ) {
    updateImage(input: $input, condition: $condition) {
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
export const deleteImage = /* GraphQL */ `
  mutation DeleteImage(
    $input: DeleteImageInput!
    $condition: ModelImageConditionInput
  ) {
    deleteImage(input: $input, condition: $condition) {
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
export const createAdSense = /* GraphQL */ `
  mutation CreateAdSense(
    $input: CreateAdSenseInput!
    $condition: ModelAdSenseConditionInput
  ) {
    createAdSense(input: $input, condition: $condition) {
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
export const updateAdSense = /* GraphQL */ `
  mutation UpdateAdSense(
    $input: UpdateAdSenseInput!
    $condition: ModelAdSenseConditionInput
  ) {
    updateAdSense(input: $input, condition: $condition) {
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
export const deleteAdSense = /* GraphQL */ `
  mutation DeleteAdSense(
    $input: DeleteAdSenseInput!
    $condition: ModelAdSenseConditionInput
  ) {
    deleteAdSense(input: $input, condition: $condition) {
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
export const createAdImage = /* GraphQL */ `
  mutation CreateAdImage(
    $input: CreateAdImageInput!
    $condition: ModelAdImageConditionInput
  ) {
    createAdImage(input: $input, condition: $condition) {
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
export const updateAdImage = /* GraphQL */ `
  mutation UpdateAdImage(
    $input: UpdateAdImageInput!
    $condition: ModelAdImageConditionInput
  ) {
    updateAdImage(input: $input, condition: $condition) {
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
export const deleteAdImage = /* GraphQL */ `
  mutation DeleteAdImage(
    $input: DeleteAdImageInput!
    $condition: ModelAdImageConditionInput
  ) {
    deleteAdImage(input: $input, condition: $condition) {
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
