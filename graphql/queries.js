import { FRAGMENT_FUNDRAISER_FIELDS } from "./fragments";

export const fundraiserQuery = `
    ${FRAGMENT_FUNDRAISER_FIELDS}

    query {
        fundraiser(id:"5zy3mVAEbNg9K7XXNF0Z4a") {
            organizationName
        }

        fundraiserCollection {
            items {
                ...fundraiserFields
            }
        }
    }
`;

//GET ALL BY CAUSE W/PAGINATION
export const fundraisersByCauseQuery = `
    ${FRAGMENT_FUNDRAISER_FIELDS}

    query {
        fundraiserCollection(limit: 25, skip: 0, where: {
  	        cause_contains_all: "Humanitarian"
        }) {
            items {
                ...fundraiserFields
            }
        }
    }
`;

//GET ALL BY CAUSE EXCLUSIVE LIST W/PAGINATION
export const fundraisersByCauseExclusiveQuery = `
    ${FRAGMENT_FUNDRAISER_FIELDS}

    query {
        fundraiserCollection(limit: 25, skip: 0, where: {
            AND: [
                { cause_contains_all: "Humanitarian" }
                { cause_contains_all: "Military" }
            ]
        }) {
            items {
                ...fundraiserFields
            }
        }
    }
`;

//GET ALL BY CAUSE INCLUSIVE LIST W/PAGINATION
export const fundraisersByCauseInclusiveQuery = `
    ${FRAGMENT_FUNDRAISER_FIELDS}

    query {
        fundraiserCollection(limit: 25, skip: 0, where: {
            OR: [
                { cause_contains_all: "Humanitarian" }
                { cause_contains_all: "Military" }
            ]
        }) {
            items {
                ...fundraiserFields
            }
        }
    }
`;

//GET BY CAUSE AND PRIORITY HIGH W/PAGINATION
export const fundraisersByCauseAndPriorityQuery = `
    ${FRAGMENT_FUNDRAISER_FIELDS}

    query {
        fundraiserCollection(limit: 25, skip: 0, where: {
            AND: [
                { cause_contains_all: "Humanitarian" }
                # ,
                # {isPriority: true} // is priority is not implemented yet
            ]
        }) {
            items {
                ...fundraiserFields
            }
        }
    }
`;

//GET BY CAUSE AND PAYMENT TYPES (Multi) W/PAGINATION
export const fundraisersByCauseAndPaymentTypeQuery = `
    ${FRAGMENT_FUNDRAISER_FIELDS}

    query {
        fundraiserCollection(limit: 25, skip: 0, where: {
            AND: [
                { cause_contains_all: "Humanitarian" },
                {
                    OR:[
                        {paymentMethod_contains: "SWIFT"},
                        {paymentMethod_contains: "Paypal"}
                    ]

                }
            ]
        }) {
            items {
                ...fundraiserFields
            }
        }
    }
`;

