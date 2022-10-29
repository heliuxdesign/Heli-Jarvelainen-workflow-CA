import ApolloClient, { gql} from 'apollo-boost';
import { orderBy } from "lodash";

function generateList(posts) {
    const resultsContainer = document.querySelector(".container");
    let html = `<ul class="results-list">`

    for(let i = 0; i < 10; i++) {
        console.log(posts[i]);
        html += `<li> ${posts[i].id} : ${posts[i].title}</li>`
    }
    html += `</ul>`
    resultsContainer.innerHTML = html;
}

async function makeGQLCall() {

    const client = new ApolloClient({
        uri: 'https://graphqlzero.almansi.me/api'
    });

    const results = await client.query({ 
        query: gql`
            {
                user(id: 1) {
                    posts {
                        data {
                            id
                            title
                        }
                    }
                }
            }
    `});
    console.log(results);

    let orderedPosts =  orderBy(results.data.user.posts.data, [parseInt('id')])

    generateList(orderedPosts);

}
makeGQLCall();



