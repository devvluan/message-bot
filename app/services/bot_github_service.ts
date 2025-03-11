import { Octokit } from '@octokit/rest'

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
})

export default class GithubService {
  
  async createDiscussionInGithub ({
    title,
    body,
    categoryId,
    repositoryId,
  }: {
    title: string
    body: string
    categoryId: string
    repositoryId: string
  }): Promise<any> {
    try {
      const query = `
        mutation {
          createDiscussion(input: {
            repositoryId: "${repositoryId}", 
            title: "${title}",
            body: "${body}",
            categoryId: "${categoryId}"
          }) {
            discussion {
              id
              title
              body
              number
            }
          }
        }
      `
      const {
        createDiscussion: { discussion },
      } = await octokit.graphql<any>(query)
      return { discussion }
    } catch (error) {
      console.error(error)
    }
  }
}