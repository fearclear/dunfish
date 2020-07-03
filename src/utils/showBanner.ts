import pkg from '../../package.json'
import figlet from 'figlet'
import chalk from 'chalk'

export default function showBanner () {
  const message = figlet.textSync(pkg.name.toUpperCase(), {
    font: 'Standard',
    horizontalLayout: 'full',
    verticalLayout: 'default'
  })
  console.log(chalk.blue(message))
}
