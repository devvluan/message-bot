import GithubService from '#services/bot_github_service'
import { test } from '@japa/runner'

test.group('GithubService', (group) => {
  const githubService = new GithubService()

  group.setup(async () => {})

  test('Deve ser possivel excutar a mensagem do robo', async ({ assert }) => {
    const response = await githubService.createDiscussionInGithub({
      repositoryId: "R_kgDOM2tIZQ",
      title: "Teste",
      body: "Teste de relatório",
      categoryId: "DIC_kwDOM2tIZc4Cn0PL"
    })

    console.log(response)

    // assert.equal(response.data.name, 'Nome do cliente')
  })
})
