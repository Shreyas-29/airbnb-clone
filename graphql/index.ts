import { gql, request } from "graphql-request";

const graphqlAPI = process.env.GRAPHCMS_ENDPOINT!

export const getCards = async () => {
    const query = gql`
        query Cards {
            cardsConnection {
                edges {
                    cursor
                    node {
                        id
                        name
                        time
                        featuredImage {
                        url
                        }
                    }
                }
            }
        }
    `
    const result = await request(graphqlAPI, query);
    return result.cardsConnection.edges;
}

export const getMediumCards = async () => {
    const query = gql`
        query MediumCards {
            mediumCardsConnection {
                edges {
                    cursor
                    node {
                        id
                        name
                        featuredImage {
                            url
                        }
                    }
                }
            }
        }
    `
    const result = await request(graphqlAPI, query);
    return result.mediumCardsConnection.edges;
}