// @flow strict
export { default } from './Page';
export const pageQuery = graphql
`
query {
allPosts(
filter: { status: { eq: "publish" } }
sort: { fields: publish_date___startDate, order: DESC }
) {
totalCount
edges {
node {
id
tags
title
slug
publish_date {
startDate(formatString: "YYYY-MM-DD")
}
}
}
}
}
`