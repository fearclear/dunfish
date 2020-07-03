import { Command } from 'commander'
import pkg from '../package.json'
import showBanner from './utils/showBanner'

const program = new Command()

program.version(pkg.version)
  .option('-d --debug', 'output extra debugging')
  .option('-s --small', 'small')
  .option('-b --big', 'big', false)
  .parse(process.argv)

function main () {
  showBanner()
}

main()
