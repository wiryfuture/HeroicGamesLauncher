import { net } from 'electron'
import { writeFile, existsSync, readFileSync } from 'graceful-fs'
import { heroicFolder, heroicGamesConfigPath } from '../utils'

export function gogRequest() {
  const gogUser = `${heroicFolder}/gog_user.json`
  const gogGameList = `${heroicFolder}/gog_games.json`

  const endpoints = [
    { url: 'https://embed.gog.com/userData.json', file: gogUser },
    { url: 'https://menu.gog.com/v1/account/licences', file: gogGameList },
  ]

  endpoints.forEach(({ url, file }) => {
    const request = net.request({
      useSessionCookies: true,
      url: url,
    })
    request.on('response', (response) => {
      response.on('data', (chunk) => {
        const body = JSON.parse(`{"games": ${chunk}}`)
        console.log(`BODY: `, body)
        return writeFile(file, JSON.stringify(body, null, 2), () => 'done')
      })
      response.on('end', () => {
        gogGetGamesInfo()
      })
    })
    request.end()
  })
}

function gogGetGamesInfo() {
  const gogGameList = `${heroicFolder}/gog_games.json`
  if (!existsSync(gogGameList)) {
    return
  }

  const gameList: { games: Array<string> } = JSON.parse(
    readFileSync(gogGameList, 'utf-8')
  )

  gameList.games.forEach((id) => {
    const file = `${heroicGamesConfigPath}/gog-${id}.json`
    const request = net.request({
      useSessionCookies: true,
      url: `https://www.gog.com/account/gameDetails/${id}.json`,
    })

    request.on('response', (response) => {
      response.on('data', (chunk) => {
        const body = JSON.parse(`${chunk}`)
        return writeFile(file, JSON.stringify(body, null, 2), () => 'done')
      })
    })
    request.end()
  })
}
