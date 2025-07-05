import { HoudiniClient } from '$houdini';

export default new HoudiniClient({
    url: 'https://backboard.railway.com/graphql/v2'

    // uncomment this to configure the network call (for things like authentication)
    // for more information, please visit here: https://www.houdinigraphql.com/guides/authentication
    // fetchParams({ session }) {
    //     return {
    //         headers: {
    //             Authorization: `Bearer ${session.token}`,
    //         }
    //     }
    // }
})
