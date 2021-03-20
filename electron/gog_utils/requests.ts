import { net } from 'electron'
import { writeFileSync, existsSync, readFileSync, writeFile } from 'graceful-fs'
import { heroicFolder, heroicGogGamesPath } from '../utils'

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
        return writeFileSync(file, JSON.stringify(body, null, 2))
      })
      response.on('end', () => {
        if (file === gogGameList) {
          gogGetGamesInfo()
        }
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
    const file = `${heroicGogGamesPath}/${id}.json`
    if (existsSync(file)) {
      return
    }
    const request = net.request({
      useSessionCookies: true,
      url: `https://www.gog.com/account/gameDetails/${id}.json`,
    })

    request.on('response', (response) => {
      response.on('end', () => {
        console.log('finishing getting data')
      })
      setTimeout(() => {
        response.on('data', (chunk) => {
          try {
            const game = JSON.parse(`${chunk}`, (key, value) => {
              switch (key) {
                case 'changelog':
                  return null
                case 'manualUrl':
                  return `https://www.gog.com${value}`
                case 'backgroundImage':
                  return `https:${value}_prof_game_200x120.jpg`
                default:
                  return value
              }
            })
            writeFile(
              file,
              JSON.stringify({ id, ...game }, null, 2),
              () => 'done'
            )
            return console.log('stored info for ', id)
          } catch (error) {
            console.log('error parsing id:', id)
          }
        })
      }, 1000)
    })
    request.end()
  })
}
