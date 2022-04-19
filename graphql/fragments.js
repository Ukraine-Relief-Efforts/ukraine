export const FRAGMENT_FUNDRAISER_FIELDS = `
    fragment fundraiserFields on Fundraiser {
        sys {
            id
            publishedAt
            spaceId
            environmentId
            publishedVersion
            firstPublishedAt
        }
        contentfulMetadata {
            tags {
                id
                name
            }
        }
        slug
        organizationName
        donationLink
        contactForLargeDonations {
            json
        }
        description {
            json
        }
        description2 {
            json
        }
        cause
        howWillTheySpendDonations {
            json
        }
        whatWeHaveAccomplished {
            json
        }
        institutionalBacking {
            json
        }
        paymentMethod {
            json
        }
        supportsCryptocurrency
        facebook
        instagram
        organizationWebsite
        smallOrganization
        bannerImage {
            url
            title
            fileName
        }
    }
`;
